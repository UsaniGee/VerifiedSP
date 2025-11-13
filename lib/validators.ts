import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Enter valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Please give a short message"),
  interest: z.enum(["cybersecurity", "devsecops", "ai", "data"]).optional(),
  honeypot: z.string().optional(), // For spam protection
});

export type Lead = z.infer<typeof leadSchema>;

