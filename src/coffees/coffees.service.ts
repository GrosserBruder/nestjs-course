import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Array<Coffee> = [
    {
      id: 1,
      name: 'Roast',
      brand: 'Brew',
      flavors: ['vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((x) => x.id === +id);
    if (!coffee) {
      // throw new HttpException(`Not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCofeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((x) => x.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
