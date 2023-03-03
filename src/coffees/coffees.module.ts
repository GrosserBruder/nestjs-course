import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffee.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

class ConfigService { }
class DevelopmentConfigService { }
class ProductionConfigService { }


@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe']
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
  controllers: [CoffeesController],
  // providers: [CoffeesService],
  providers: [
    CoffeesService,
    // { provide: COFFEE_BRANDS, useFactory: (brandsFactory: CoffeeBrandsFactory) => brandsFactory.create(), inject: [CoffeeBrandsFactory] },
    {
      provide: COFFEE_BRANDS, useFactory: async (connection: Connection) => {
        // const coffeeBrands = await connection.query("SELECT * ...")
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
        return coffeeBrands
      },
      inject: [Connection],
      scope: Scope.DEFAULT,
    },
    { provide: ConfigService, useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService }
  ],
  exports: [CoffeesService],
})
export class CoffeesModule { }
