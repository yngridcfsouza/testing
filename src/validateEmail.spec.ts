import { expect, it } from "vitest";
import { validateEmail } from "./validateEmail";

it.each([
  '',
  'invalid',
  'invalid@mail',
])('should return false for invalid email: $0', (email) => {
  const isValid = validateEmail(email);

  expect(isValid).toBe(false);
});

it.each([
  'a@mail.com',
])('should be true for valid email: $0', (email) => {
  const isValid = validateEmail(email);

  expect(isValid).toBe(true);
});

it.each([
  {email: 'a@mail.com'}
])('should be true for valid email: $0', ({ email }) => {
  const isValid = validateEmail(email);

  expect(isValid).toBe(true);
});

it.each([
  {email: { address: 'a+1@mail.com' }}
])('should be true for valid email: $email.address', ({ email }) => {
  const isValid = validateEmail(email.address);

  expect(isValid).toBe(true);
});

/* existem métodos como .skip .only .runIf que podem auxiliar
a rodar alguns testes em situações específicas */
