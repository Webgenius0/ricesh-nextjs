const { z } = require('zod');

export const GetInTouchSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().min(1, 'Email is required.').email('Invalid Email'),
  message: z.string().min(1, 'Message is required.'),
});
