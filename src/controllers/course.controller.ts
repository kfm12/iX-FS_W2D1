import { repository } from '@loopback/repository';
import { get, param, HttpErrors } from '@loopback/rest';
import { CourseRepository } from '../repositories/course.repository';
import { Course } from "../models/course.model";



export class CourseController {
  constructor(@repository(CourseRepository) protected courseRepo: CourseRepository
  ) { }

  @get('/courses')
  async findCourses(): Promise<Course[]> {
    return await this.courseRepo.find();
  }

  @get('/courses/{courseId}')
  async findCoursesById(@param.path.number('courseId') courseId: number): Promise<Course> {
    let courseExists: boolean = !!(await this.courseRepo.count({ courseId }));

    if (!courseExists) {
      throw new HttpErrors.BadRequest(`course ID ${courseId} does not exist`);
    }
    return await this.courseRepo.findById(courseId);
  }
}

