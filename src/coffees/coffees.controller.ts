import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Возвращает все кофе. Limit ${limit}, offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Возвращает #${id} кофе`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE) // такой статус код будет возвращаться при ответе без ошибок
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Обновление кофе #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Удаление кофе #${id}`;
  }
}
