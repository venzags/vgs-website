// ===============================
// File: api.ts
// ===============================
import { API_URL } from "./constants";
import type { NewsletterData, NewsletterResponse, ApiError } from "./types";

/**
 * Submits newsletter subscription via POST JSON
 * Supports AbortController for timeout/cancellation
 */
export async function submitNewsletter(
  data: NewsletterData,
  signal?: AbortSignal
): Promise<NewsletterResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout
  const finalSignal = signal ?? controller.signal;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName || "",
        email: data.email,
        turnstileToken: data.turnstileToken || "",
        honeypot: data.honeypot || "",
      }),
      signal: finalSignal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errorData: ApiError = await response.json().catch(() => ({
        code: response.status,
        message: "Request failed",
      }));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }

    const result: NewsletterResponse = await response.json();
    return result;
  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw err;
  }
}