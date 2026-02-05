import { CourseRepository } from "./CourseRepository";

type CreateCourseInput = {
  name: string;
}

type CreateCourseOutput = {
  id: string;
  name: string;
  createdAt: Date;
}

const createCourseRepo = new CourseRepository();

export async function createCourse(input: CreateCourseInput): Promise<CreateCourseOutput> {
  if (!input.name.trim()) {
    throw new Error("The name is required!");
  }

  const course = createCourseRepo.create(
    input.name,
  );

  return course;
}
