// ===============================
// File: utils.ts
// ===============================

/**
 * Trim and sanitize input strings
 */
export const sanitizeString = (str: string): string => str.trim();

/**
 * Basic email sanitization (trim and lowercase)
 */
export const sanitizeEmail = (email: string): string => email.trim().toLowerCase();

/**
 * Check if email is from a known disposable domain
 */
const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "throwaway.email",
  // Add more as needed
];

export const isDisposableEmail = (email: string): boolean => {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return DISPOSABLE_DOMAINS.includes(domain);
};

/**
 * Generate a unique reference ID (for logging / confirmation)
 */
export const generateReferenceId = (): string => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `VGS-NL-${y}${m}${d}-${rand}`;
};

/**
 * Debounce utility
 */
export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Parse API error response
 */
export const parseError = async (response: Response): Promise<string> => {
  try {
    const data = await response.json();
    return data.message || data.error || ERROR_MESSAGES.SERVER;
  } catch {
    return `HTTP ${response.status}: ${response.statusText}`;
  }
};

import { ERROR_MESSAGES } from "./constants";