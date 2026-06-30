// ===============================
// File: NewsletterForm.tsx
// ===============================
"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Turnstile from "react-turnstile";
import { newsletterSchema, type NewsletterFormValues } from "./newsletterSchema";
import { submitNewsletter } from "./api";
import NewsletterLoading from "./NewsletterLoading";
import NewsletterSuccess from "./NewsletterSuccess";
import { COOLDOWN_MS } from "./constants";

const NewsletterForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
const [errorMsg, setErrorMsg] = useState("");

const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
const [showTurnstile, setShowTurnstile] = useState(false);

const lastSubmission = useRef(0);
const abortRef = useRef<AbortController | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      firstName: "",
      email: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    const now = Date.now();
    if (now - lastSubmission.current < COOLDOWN_MS) {
      setErrorMsg("Please wait before subscribing again.");
      return;
    }
    lastSubmission.current = now;

    if (data.honeypot && data.honeypot.length > 0) return;

    if (!turnstileToken) {
      setErrorMsg("Please complete the security verification.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      abortRef.current = new AbortController();
      const result = await submitNewsletter(
        {
          firstName: data.firstName,
          email: data.email,
          turnstileToken,
        },
        abortRef.current.signal
      );
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setErrorMsg(err.message || "An unexpected error occurred.");
        setStatus("idle");
      }
    } finally {
      abortRef.current = null;
    }
  };

  if (status === "success") return <NewsletterSuccess />;
  if (status === "loading") return <NewsletterLoading />;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* First Name */}
        <div className="relative flex-1 w-full min-w-0">
          <input
  {...register("firstName")}
  type="text"
  onFocus={() => setShowTurnstile(true)}
  onChange={() => setShowTurnstile(true)}
            placeholder="First name (optional)"
            className="w-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors duration-300"
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.firstName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="relative flex-1 w-full min-w-0">
          <input
  {...register("email")}
  type="email"
  onFocus={() => setShowTurnstile(true)}
  onChange={() => setShowTurnstile(true)}
            placeholder="Your work email *"
            className="w-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors duration-300"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>
          )}
        </div>

        {/* Subscribe Button – always enabled here because loading state is handled earlier */}
        <motion.button
          type="submit"
          disabled={false}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(34,211,238,0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Subscribe
        </motion.button>
      </div>

      {/* Honeypot (hidden) */}
      <input
        {...register("honeypot")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      {/* Cloudflare Turnstile - Show only after user starts typing */}
{showTurnstile && (
  <div className="flex justify-center mt-4">
    <Turnstile
      sitekey={
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
        "0x4AAAAAADrReyVICiE2Fzct"
      }
      onVerify={(token: string) => setTurnstileToken(token)}
      onError={() => setTurnstileToken(null)}
      onExpire={() => setTurnstileToken(null)}
      theme="dark"
    />
  </div>
)}

      {errorMsg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-2 text-center"
        >
          {errorMsg}
        </motion.p>
      )}
    </motion.form>
  );
};

export default NewsletterForm;