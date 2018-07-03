import { model, property, Entity } from "@loopback/repository";

@model({
  name: "registration"
})

export class User extends Entity {

  @property({
    type: "number",
    id: true
  })
  id: number;

  @property({
    type: "string"
  })
  name: string;

  getID() {
    return this.id;
  }
}
