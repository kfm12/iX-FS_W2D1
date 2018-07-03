import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { User } from '../models/user.model';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
  >
{

  constructor(@inject('datasources.db') protected datasource: juggler.DataSource) {
    super(User, datasource);
  }
}
