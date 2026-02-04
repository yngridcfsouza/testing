import { expect, it } from "vitest";
import { CourseMapper } from "./CourseMapper";

it('should convert a CourseAPI to a CourseDomain', () => {
  const course = CourseMapper.toDomain({
    course:{
      name: 'Curso de React',
    },
  });

  expect(course).toEqual({
    name: 'Curso de React',
  });
});

it('should convert a CourseDomain to a CourseAPI', () => {
  const course = CourseMapper.toAPI({
    name: 'Curso de React',
  });

  expect(course).toEqual({
    course: {
      name: 'Curso de React'
    },
  });
});
