import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { Course } from '../models/course.model';

export class CourseRepository extends DefaultCrudRepository<
  Course,
  typeof Course.prototype.id
  >
{

  constructor(@inject('datasources.db') protected datasource: juggler.DataSource) {
    super(Course, datasource);
  }
}
