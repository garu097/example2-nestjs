import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const CONFIG: MysqlConnectionOptions = {
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: '',
   database: 'example2',
   entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
   ],
   synchronize: true,
}