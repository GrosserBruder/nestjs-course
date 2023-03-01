import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/dataSource';
import { CoffeeRatingModuleModule } from './coffee-rating-module/coffee-rating-module.module';
import { DatabaseModule } from './database/database.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeeRatingModuleModule } from './coffee-rating-module/coffee-rating-module.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoffeeRatingModuleModule,
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
