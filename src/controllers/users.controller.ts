import { repository } from '@loopback/repository';
import { get, param } from '@loopback/rest';
import { UserRepository } from '../repositories/user.repository';
import { User } from "../models/user";



export class UsersController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/users/{userID}')
  getSpecificUser(@param.path.number("userID") userID: number
  ): any {

  }

}
