import { repository } from "@loopback/repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class LoginController {

  constructor(
    @repository()
  ) { }
}
