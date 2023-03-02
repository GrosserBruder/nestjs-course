import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [CoffeesModule,
    // DatabaseModule.register({ 
    //   type: 'postgres',
    //   host: '192.168.0.49',
    //   port: 5432,
    // })
  ],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule { }
