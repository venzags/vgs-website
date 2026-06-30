// ===============================
// File: constants.ts
// ===============================
export const API_URL = process.env.NEXT_PUBLIC_NEWSLETTER_API_URL || "https://vgs-newsletter-api.venzags.workers.dev";

export const SUCCESS_MESSAGE = "Subscription Successful";
export const SUCCESS_DESCRIPTION =
  "Thank you for subscribing to the VGS Newsletter. You'll begin receiving enterprise technology updates soon.";

export const ERROR_MESSAGES = {
  NETWORK: "Network error. Please check your connection.",
  SERVER: "Server error. Please try again later.",
  TIMEOUT: "Request timed out. Please try again.",
  VALIDATION: "Please check your entries.",
};

export const COOLDOWN_MS = 5000; // Minimum time between submissions
export const MAX_EMAIL_LENGTH = 254;
export const MAX_NAME_LENGTH = 50;

export const ANIMATION_DURATION = 0.3;