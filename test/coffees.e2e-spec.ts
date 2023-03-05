import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesModule } from '../src/coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto/create-coffee.dto';

describe('[Feature] Coffees - /coffees', () => {
  const coffee = {
    name: 'Shipwreck Roast',
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla'],
  }

  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        CoffeesModule,
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: "e2e-test.sqlite3",
          autoLoadEntities: true,
          synchronize: true,
        })
      ],
    }).compile();

    app = moduleFixture.createNestApplication(); app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // валидатор лишает проверенный объект любых свойств, у которых нет декораторов. Используйте декоратор @Allow, если другие не подходят
        transform: true, // трансформирует данные из запроса в инстансы DTO
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    await app.init();
  });

  it('Create [POST /]', () => {
    return request(app.getHttpServer())
      .post('/coffees')
      .send(coffee as CreateCoffeeDto)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        const expectedCoffee = jasmine.objectContaining({
          ...coffee,
          flavors: jasmine.arrayContaining(
            coffee.flavors.map((name) => jasmine.objectContaining({ name }))
          )
        })

        expect(body).toEqual(expectedCoffee)
      })

  });
  it.todo('Get all [GET /]');
  it.todo('Get one [GET /:id]');
  it.todo('Update one [PATCH /:id]');
  it.todo('Delete one [DELETE /:id]');

  afterAll(async () => {
    await app.close();
  });
});
