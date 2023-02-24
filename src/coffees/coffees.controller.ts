import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'Возвращает все кофе';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Возвращает #${id} кофе`;
  }
}
