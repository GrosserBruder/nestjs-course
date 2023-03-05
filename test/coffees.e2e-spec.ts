import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesModule } from '../src/coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';

describe('[Feature] Coffees - /coffees', () => {
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

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .set('Authorization', process.env.API_KEY)
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  it.todo('Create [POST /]');
  it.todo('Get all [GET /]');
  it.todo('Get one [GET /:id]');
  it.todo('Update one [PATCH /:id]');
  it.todo('Delete one [DELETE /:id]');

  afterAll(async () => {
    await app.close();
  });
});
