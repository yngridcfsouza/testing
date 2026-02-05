import { expect, it, vi } from "vitest";
import { createCourse } from "./createCourse";

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 12, 1));

it('should return the course object with success', async () => {
  const course = await createCourse({
    name: 'Curso de Testes',
  });

  expect(course).toBeTruthy();
  expect(course.name).toBe('Curso de Testes');

  expect(typeof course.id).toBe('string');

  // Para testar o objeto inteiro:
  expect(course).toEqual({
    id: expect.any(String),
    name: 'Curso de Testes',
    createdAt: new Date(),
  });
});

it('should throw a new error if no name is provided', async () => {
  const coursePromise = createCourse({ name: '' });

  await expect(coursePromise).rejects.toThrow();
  await expect(coursePromise).rejects.toThrow(new Error('The name is required!'));
});
