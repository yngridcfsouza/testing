import { expect, it } from "vitest";
import { validateCoursePrice } from "./validateCoursePrice";

it('should return true for valid prices', () => {
  const isValid = validateCoursePrice(1);

  expect(isValid).toBe(true);
});

// quando for validar retorno de erros é ncessário adicionar uma função que chama a
// função e automaticamente faz um try catch e conegue pegar esse erro por baixo
// dos panos
it('should throw new Error if a negative number is provided', () => {
  expect(() => validateCoursePrice(-10)).toThrow();
});
