import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const CONFIG_ORM: TypeOrmModuleAsyncOptions = {
   inject: [ConfigService],
   useFactory: (config: ConfigService): TypeOrmModuleOptions => {
      console.log(config.get<string>('database.host'))
      return {
         type: config.get<string>('database.type') as any,
         host: config.get<string>('database.host'),
         port: config.get<number>('database.port'),
         username: config.get<string>('database.username'),
         password: config.get<string>('database.password'),
         database: config.get<string>('database.schema'),
         entities: [
              __dirname + '/../../**/*.entity{.ts,.js}',
         ],
         synchronize: true,
      } 
   }
   
}
