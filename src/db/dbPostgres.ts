import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from 'src/module/users/entities/user.entity';

export class DbPostgres implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'DB_POSTGRES',
      type: 'postgres',
      port: +process.env.SERVER_DB_POSTGRES_PORT,
      username: process.env.SERVER_DB_POSTGRES_USERNAME,
      password: process.env.SERVER_DB_POSTGRES_PASSWORD,
      database: process.env.SERVER_DB_POSTGRES_DATABASE,
      entities: [UserEntity],
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    };
  }
}
