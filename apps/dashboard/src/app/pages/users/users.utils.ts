import * as zod from 'zod';

export const UserEntrySchema = zod
  .object({
    name: zod
      .string({
        invalid_type_error: 'Please enter valid name',
        required_error: 'Please enter your full name',
      })
      .min(3, "User's name should be atleast 3 charactes in length!"),
    email: zod
      .string({
        invalid_type_error: 'Please enter valid email address',
        required_error: 'Please check email address!',
      })
      .email(),
    phone: zod
      .string({
        invalid_type_error: 'Please enter valid phone number',
        required_error: 'Please enter your phone number',
      })
      .min(10, 'Phone number must be at least 10 characters')
      .max(15, 'Phone number must be less than 15 characters'),
    role: zod.string({
      invalid_type_error: 'Role should be selected!',
      required_error: 'Role should be selected!',
    }),
  })
  .required();
