import * as path from 'path';
import { juggler } from '@loopback/repository';

const dsConfigPath = path.resolve(
  __dirname,
  '../../config/datasources.json',
);

const config = require(dsConfigPath);

export var dataSourceConfig = new juggler.DataSource({
  name: 'db',
  connector: 'loopback-connector-mysql',
  host: 'localhost',
  port: 3306,
  database: 'day_6',
  user: 'root',
  password: 'root1234'
});
this.dataSource(dataSourceConfig);
