// ===============================
// File: newsletterSchema.ts
// ===============================
import { z } from "zod";
import { isDisposableEmail } from "./utils";

export const newsletterSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(50, "First name too long")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email too long")
    .email("Invalid email address")
    .refine((email) => !isDisposableEmail(email), "Disposable emails not allowed"),
  turnstileToken: z.string().optional(),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;