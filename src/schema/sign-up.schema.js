const { z } = require("zod");

export const SignUPSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Invalid Email"),
  password: z.string().min(1, "Password is required."),
});
