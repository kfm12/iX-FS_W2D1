import { model, property, Entity } from "@loopback/repository";

@model()

export class Course extends Entity {

  @property({
    type: "number",
    CourseId: true
  })
  courseId?: number;

  @property({
    type: "string",
  })
  courseName: string;

  getID() {
    return this.courseId;
  }
}
