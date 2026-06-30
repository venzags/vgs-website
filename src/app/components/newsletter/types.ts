// ===============================
// File: types.ts
// ===============================
export interface NewsletterData {
  firstName?: string;
  email: string;
  turnstileToken?: string;
  honeypot?: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}

export type NewsletterStatus = "idle" | "loading" | "success" | "error";

export interface ApiError {
  code: number;
  message: string;
  details?: string;
}

export interface FormState {
  status: NewsletterStatus;
  errorMessage: string;
}