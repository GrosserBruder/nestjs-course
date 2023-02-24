import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // валидатор лишает проверенный объект любых свойств, у которых нет декораторов. Используйте декоратор @Allow, если другие не подходят
      transform: true, // трансформирует данные из запроса в инстансы DTO
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
