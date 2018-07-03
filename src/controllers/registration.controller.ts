import { repository } from "@loopback/repository";
import { post, get, param, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository"
import { User } from "../models/user";

// import {inject} from '@loopback/context';


export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/registration/{userID}')
  async addUser(@param.path.number('userID') userID: number): Promise<User> {
    return await this.userRepo.create(userID);
  }
}
