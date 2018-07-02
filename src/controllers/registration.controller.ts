import { repository } from "@loopback/repository";
import { post, get, param, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/users"
import { User } from "../models/user";

// import {inject} from '@loopback/context';


export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private registrationRepo: UserRepository
  ) { }

  @post('/registration/{user_ID}')
  async addUser(@param.path.number('user_ID') user_ID: number): Promise<User> {
    return await this.userRepo.create(user);
  }
}
