import { z } from "zod";

export const UserSchema = z.object({
  id: z.any().optional(),
  name: z.string(),
  count: z.number(),
  ip: z.string(),
  time: z
    .union([z.string(), z.date()])
    .transform((time) => (typeof time === "string" ? new Date(time) : time)),
});

export type IUser = z.infer<typeof UserSchema>;
