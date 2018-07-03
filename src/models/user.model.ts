import { model, property, Entity } from "@loopback/repository";

@model()

export class User extends Entity {

  @property({
    type: "number",
    id: true
  })
  id?: number;

  @property({
    type: "string",
  })
  firstName: string;

  @property({
    type: "string",
  })
  lastName: string;


  @property({
    type: "string",
    required: true,
  })
  email: string;

  @property({
    type: "string",
    required: true,
  })
  password: string;

  getID() {
    return this.id;
  }
}
