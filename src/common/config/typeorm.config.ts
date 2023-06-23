import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const getDatabaseConfig = (optionalConfig?: DataSourceOptions): DataSourceOptions  => ({
      ...optionalConfig,
      synchronize: false,
      entities: ['**/*.entity.js'],
      subscribers: ['dist/src/subscriber/**/*{.js,.ts}'],
      migrations: ['dist/migrations/**/*{.ts,.js}'],
   })


export const typeOrmModuleOptions: TypeOrmModuleAsyncOptions = {
   inject: [ConfigService],
   useFactory: (config: ConfigService): TypeOrmModuleOptions => {
      return getDatabaseConfig({
         type: config.get<string>('db.type') as any,
         host: config.get<string>('db.host'),
         port: config.get<number>('db.port'),
         username: config.get<string>('db.username'),
         password: config.get<string>('db.password'),
         database: config.get<string>('db.database'),
      })
   }
}
