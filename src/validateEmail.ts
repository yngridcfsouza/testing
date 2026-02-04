import z from "zod"

const schema = z.email();

export function validateEmail(email: string) {
  return schema.safeParse(email).success;
}
