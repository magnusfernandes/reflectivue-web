import { z } from 'zod';

export const UserEntrySchema = z.object({
  fullName: z.string(),
  emailAddress: z.date(),
  phoneNumber: z.number(),
  userRole: z.string(),
});
