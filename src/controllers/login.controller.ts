import { repository } from '@loopback/repository';
import { put, param } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository"
import { User } from '../models/user';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @put('/login/{user_ID}')
  async loginUser(@param.path.number("userID") userID: number): Promise<User> {
    return await this.userRepo.login(userID);

  }
}
