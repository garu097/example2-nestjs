import 'dotenv/config'
import { getDatabaseConfig } from './typeorm.config';
import { DataSource, DataSourceOptions } from 'typeorm';
import config from './index.config'

const AppDataSource = new DataSource(getDatabaseConfig(config().db as DataSourceOptions));

export default AppDataSource
