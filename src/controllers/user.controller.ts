import { repository } from '@loopback/repository';
import { get, param, HttpErrors } from '@loopback/rest';
import { UserRepository } from '../repositories/user.repository';
import { User } from "../models/user.model";



export class UserController {
  constructor(@repository(UserRepository) protected userRepo: UserRepository
  ) { }

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }
    return await this.userRepo.findById(id);
  }
}

