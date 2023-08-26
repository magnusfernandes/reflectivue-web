import * as zod from 'zod';

export const loginFormSchema = zod
  .object({
    phone: zod
      .string()
      .min(10, 'Phone number must be at least 10 characters')
      .max(15, 'Phone number must be less than 15 characters'),
    password: zod
      .string()
      .min(6, 'Password should be at least 6 characters')
      .max(120, 'Password should be less than 120 characters'),
  })
  .required();
