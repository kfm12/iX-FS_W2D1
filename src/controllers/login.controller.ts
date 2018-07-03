import { repository } from '@loopback/repository';
import { post, HttpErrors, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository"
import { User } from '../models/user.model';


export class LoginController {

  constructor(
    @repository(UserRepository) protected userRepo: UserRepository
  ) { }

  @post('/login')
  async loginUser(@requestBody() user: User): Promise<User> {

    if (!user.email || !user.passwoed) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    return await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      },
    });
  }
}
