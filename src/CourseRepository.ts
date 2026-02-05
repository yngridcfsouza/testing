import { randomUUID } from "node:crypto";

export class CourseRepository {
  async findByID(courseId: string) {
    console.log(`> Searching ${courseId} to database... <`)

    return {
    id: randomUUID(),
    name: `Course - ${Math.random()}`,
    createdAt: new Date(),
    };
  }

  async create(name: string) {
    return {
    id: randomUUID(),
    name: name,
    createdAt: new Date(),
    };
  }
}
