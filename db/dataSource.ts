import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '192.168.0.49',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-js-course',
  entities: ["dist/src/**/*.entity.js"],
  migrations: ['dist/db/migrations/*.js'],
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
