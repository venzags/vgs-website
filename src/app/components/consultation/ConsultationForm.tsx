// src/components/consultation/ConsultationForm.tsx
"use client";

import React, { useState, useCallback, useRef } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Turnstile from "react-turnstile";
import type { UseFormRegisterReturn, Control, Path } from "react-hook-form";

// ---------- Integration stub ----------
async function submitConsultationForm(
  data: ConsultationFormData & { turnstileToken: string }
): Promise<{ success: boolean; message?: string }> {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "attachments" || key === "turnstileToken" || value === undefined || value === null) return;
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  });
  // Append turnstile token
  if (data.turnstileToken) formData.append("turnstileToken", data.turnstileToken);

  if (data.attachments && Array.isArray(data.attachments)) {
    data.attachments.forEach((file: File) => formData.append("attachments", file));
  }

  const response = await fetch("https://vgs-consultation-api.venzags.workers.dev", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || result.message || "Failed to submit consultation request.");
  }
  return result;
}

// ---------- Zod schema ----------
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "image/png",
  "image/jpeg",
];

const consultationFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  businessEmail: z.string().email("Invalid email address"),
  website_url: z.string().optional(),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  country: z.string().optional(),
  industry: z.enum([
    "Technology",
    "Finance & Banking",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail & eCommerce",
    "Real Estate",
    "Energy & Utilities",
    "Government",
    "Automotive",
    "Telecom",
    "Other",
  ]),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]),
  serviceRequired: z.enum([
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "AI Agents",
    "Software Development",
    "Custom ERP",
    "CRM Development",
    "Mobile App Development",
    "Web Development",
    "UI/UX Design",
    "Cloud Infrastructure",
    "DevOps",
    "Cyber Security",
    "Data Analytics",
    "API Development",
    "Digital Transformation",
    "Automation",
    "IT Consulting",
    "Digital Marketing",
    "SEO",
    "Branding",
    "Other",
  ]),
  estimatedBudget: z.enum([
    "Under $5,000",
    "$5,000–20,000",
    "$20,000–50,000",
    "$50,000–100,000",
    "$100,000+",
  ]),
  preferredContactMethod: z.enum([
    "Email",
    "Phone",
    "WhatsApp",
    "Google Meet",
    "Microsoft Teams",
  ]),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().optional(),
  requirements: z.string().min(10, "Please provide at least 10 characters describing your requirements"),
  attachments: z
    .array(z.instanceof(File))
    .optional()
    .refine(
      (files) => !files || files.every((f) => f.size <= MAX_FILE_SIZE),
      "Each file must be under 10 MB"
    )
    .refine(
      (files) => !files || files.every((f) => ALLOWED_FILE_TYPES.includes(f.type)),
      "Only PDF, DOCX, ZIP, PNG, JPG files are allowed"
    ),
  privacyConsent: z.boolean().refine((val) => val === true, {
  message: "You must accept the Privacy Policy",
}),

termsConsent: z.boolean().refine((val) => val === true, {
  message: "You must accept the Terms & Conditions",
}),   // <-- should end here

});

type ConsultationFormData = z.infer<typeof consultationFormSchema>;

// ---------- Options ----------
const INDUSTRY_OPTIONS = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail & eCommerce",
  "Real Estate",
  "Energy & Utilities",
  "Government",
  "Automotive",
  "Telecom",
  "Other",
] as const;

const COMPANY_SIZE_OPTIONS = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"] as const;
const SERVICE_OPTIONS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "AI Agents",
  "Software Development",
  "Custom ERP",
  "CRM Development",
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Cloud Infrastructure",
  "DevOps",
  "Cyber Security",
  "Data Analytics",
  "API Development",
  "Digital Transformation",
  "Automation",
  "IT Consulting",
  "Digital Marketing",
  "SEO",
  "Branding",
  "Other",
] as const;
const BUDGET_OPTIONS = ["Under $5,000", "$5,000–20,000", "$20,000–50,000", "$50,000–100,000", "$100,000+"] as const;
const CONTACT_METHOD_OPTIONS = ["Email", "Phone", "WhatsApp", "Google Meet", "Microsoft Teams"] as const;

// Country list
const COUNTRY_LIST = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "India", "Australia",
  "Singapore", "United Arab Emirates", "Saudi Arabia", "Netherlands", "Switzerland",
  "Sweden", "Norway", "Denmark", "Finland", "Japan", "South Korea", "Brazil",
  "Mexico", "South Africa", "Nigeria", "Kenya", "Egypt", "Italy", "Spain",
  "Belgium", "Austria", "Ireland", "Portugal", "Poland", "Ukraine", "Turkey",
  "Israel", "Qatar", "Oman", "Kuwait", "Bahrain", "Malaysia", "Indonesia",
  "Philippines", "Vietnam", "Thailand", "New Zealand", "China", "Hong Kong",
  "Taiwan", "Argentina", "Chile", "Colombia", "Peru", "Czech Republic",
  "Romania", "Greece", "Pakistan", "Bangladesh", "Sri Lanka", "Morocco",
  "Algeria", "Tunisia", "Russia", "Kazakhstan", "Uzbekistan", "Ghana",
  "Tanzania", "Uganda", "Zambia", "Zimbabwe", "Costa Rica", "Panama",
  "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Venezuela", "Croatia",
  "Slovenia", "Slovakia", "Lithuania", "Latvia", "Estonia", "Iceland",
  "Malta", "Cyprus", "Luxembourg", "Monaco", "Liechtenstein",
];

// ---------- Reusable UI Components ----------

const FloatingInput: React.FC<{
  label: string;
  error?: string;
  type?: string;
  register: UseFormRegisterReturn;
  id: string;
  listId?: string;
}> = ({ label, error, type = "text", register, id, listId }) => (
  <div className="relative">
    <div className="relative">
      <input
        {...register}
        id={id}
        type={type}
        placeholder=" "
        list={listId}
        className={`
          peer w-full bg-slate-900/50 backdrop-blur-sm border rounded-xl px-4 pt-6 pb-2 text-white
          placeholder-transparent transition-all duration-300 outline-none
          ${error ? "border-red-500 focus:border-red-400" : "border-slate-700 hover:border-cyan-400/60 focus:border-cyan-400"}
          focus:ring-2 focus:ring-cyan-500/30
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-4 text-sm transition-all duration-300 pointer-events-none origin-left
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400
          peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs
          ${error ? "text-red-400" : "text-slate-300"}
        `}
      >
        {label}
      </label>
    </div>
    {error && (
      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5 ml-1">
        {error}
      </motion.p>
    )}
  </div>
);

const FloatingSelect: React.FC<{
  label: string;
  options: readonly string[];
  error?: string;
  register: UseFormRegisterReturn;
  id: string;
  control: Control<ConsultationFormData>;
  name: Path<ConsultationFormData>;
}> = ({ label, options, error, register, id, control, name }) => {
  const value = useWatch({ control, name });
  const filled = typeof value === "string"
    ? value.length > 0
    : Array.isArray(value)
      ? value.length > 0
      : typeof value === "boolean"
        ? value
        : value instanceof File
          ? true
          : false;
  return (
    <div className="relative">
      <div className="relative">
        <select
          {...register}
          id={id}
          defaultValue=""
          className={`
            peer w-full bg-slate-900/50 backdrop-blur-sm border rounded-xl px-4 pt-8 pb-2 text-white
            appearance-none cursor-pointer transition-all duration-300 outline-none
            ${error ? "border-red-500" : "border-slate-700 hover:border-cyan-400/60 focus:border-cyan-400"}
            focus:ring-2 focus:ring-cyan-500/30
          `}
        >
          <option value="" disabled className="bg-slate-900 text-slate-400">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`
            absolute left-4 pointer-events-none transition-all duration-300
            ${filled ? "top-1 text-xs text-cyan-400" : "top-3 text-sm text-slate-400"}
            ${error ? "text-red-400" : ""}
          `}
        >
          {label}
        </label>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5 ml-1">
          {error}
        </motion.p>
      )}
    </div>
  );
};

const FloatingTextarea: React.FC<{
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  id: string;
  rows?: number;
}> = ({ label, error, register, id, rows = 4 }) => (
  <div className="relative">
    <div className="relative">
      <textarea
        {...register}
        id={id}
        rows={rows}
        placeholder=" "
        className={`
          peer w-full bg-slate-900/50 backdrop-blur-sm border rounded-xl px-4 pt-6 pb-2 text-white
          placeholder-transparent resize-none transition-all duration-300 outline-none
          ${error ? "border-red-500 focus:border-red-400" : "border-slate-700 hover:border-cyan-400/60 focus:border-cyan-400"}
          focus:ring-2 focus:ring-cyan-500/30
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-4 text-sm transition-all duration-300 pointer-events-none origin-left
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400
          peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs
          ${error ? "text-red-400" : "text-slate-300"}
        `}
      >
        {label}
      </label>
    </div>
    {error && (
      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5 ml-1">
        {error}
      </motion.p>
    )}
  </div>
);

const DateInput: React.FC<{
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  id: string;
}> = ({ label, error, register, id }) => (
  <div className="relative">
    <div className="relative">
      <input
        {...register}
        id={id}
        type="date"
        className={`
          peer w-full bg-slate-900/50 backdrop-blur-sm border rounded-xl px-4 pt-6 pb-2 text-white
          placeholder-transparent transition-all duration-300 outline-none
          ${error ? "border-red-500 focus:border-red-400" : "border-slate-700 hover:border-cyan-400/60 focus:border-cyan-400"}
          focus:ring-2 focus:ring-cyan-500/30
          [color-scheme:dark]
        `}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-1 text-xs text-cyan-400 pointer-events-none transition-all duration-300"
      >
        {label}
      </label>
    </div>
    {error && (
      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5 ml-1">
        {error}
      </motion.p>
    )}
  </div>
);

const FileUpload: React.FC<{
  onFilesChange: (files: File[]) => void;
  error?: string;
}> = ({ onFilesChange, error }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      onFilesChange(fileArray);
    },
    [onFilesChange]
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  return (
    <div>
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300
          ${dragActive ? "border-cyan-400 bg-cyan-500/10 scale-[1.02]" : "border-slate-700 hover:border-cyan-400/50 bg-slate-900/30 backdrop-blur-sm"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        aria-label="Upload attachments"
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.docx,.zip,.png,.jpg,.jpeg"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <motion.div animate={{ scale: dragActive ? 1.05 : 1 }} className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-sm text-slate-300">
            <span className="text-cyan-400 font-medium">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-slate-500">PDF, DOCX, ZIP, PNG, JPG (max 10 MB)</p>
        </motion.div>
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-3 rounded-xl border border-green-500/30 bg-green-500/10 p-3">
          <p className="text-green-400 font-semibold mb-2 text-sm">
            ✓ {selectedFiles.length} file(s) selected
          </p>
          {selectedFiles.map((file, index) => (
            <div key={index} className="flex justify-between py-1 text-sm text-slate-300">
              <span>{file.name}</span>
              <span>{(file.size / 1024).toFixed(1)} KB</span>
            </div>
          ))}
        </div>
      )}
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-2 ml-1">
          {error}
        </motion.p>
      )}
    </div>
  );
};

// Toast notification
const Toast: React.FC<{ type: "success" | "error"; message: string; onClose: () => void }> = ({
  type,
  message,
  onClose,
}) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-xl border text-sm font-medium ${
        type === "success"
          ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
          : "bg-red-500/20 border-red-400/40 text-red-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 hover:text-white transition-colors">
          ✕
        </button>
      </div>
    </motion.div>
  );
};

// Security Panel
const SecurityPanel = () => (
  <div className="space-y-6">
    <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Why Book a Consultation?
      </h3>
      <ul className="space-y-3 text-slate-300 text-sm">
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Free 30-minute consultation
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Senior technology consultants
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Confidential discussion
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Cloudflare Protected
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          End-to-End Encryption
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Secure File Upload
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          GDPR-ready data handling
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Average response within 24 hours
        </li>
      </ul>
    </div>
  </div>
);

// ---------- Main Component ----------
const ConsultationForm: React.FC = () => {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [showTurnstile, setShowTurnstile] = useState(false);
  const turnstileRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      website_url: "",
      phoneNumber: "",
      companyName: "",
      country: "",
      industry: undefined,
      companySize: undefined,
      serviceRequired: undefined,
      estimatedBudget: undefined,
      preferredContactMethod: undefined,
      preferredDate: "",
      preferredTime: "",
      requirements: "",
      attachments: [],
      privacyConsent: false as any,
      termsConsent: false as any,
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    if (!turnstileToken) {
      setToast({ type: "error", message: "Please complete the security check." });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await submitConsultationForm({ ...data, turnstileToken });
      if (response.success) {
        setIsSuccess(true);
        setToast({ type: "success", message: "Thank you! We'll contact you to confirm the consultation." });
        reset();
        setTurnstileToken(null);
        turnstileRef.current?.reset();
      } else {
        throw new Error(response.message || "Submission failed");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setToast({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden pt-6 md:pt-10 pb-16 px-0 sm:px-6 lg:px-8" id="consultation-form">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/consultation/consultation-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/50" />
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <AnimatePresence>
        {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-2 bg-[#020617]/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30"
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Sent</h3>
                <p className="text-slate-400 max-w-md">We'll review your request and contact you shortly to confirm the meeting.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form
  onSubmit={handleSubmit(onSubmit)}
  onFocusCapture={() => setShowTurnstile(true)}
  noValidate
  className="space-y-10 pb-28"
>
                <input
  type="text"
  {...register("website_url")}
  autoComplete="off"
  tabIndex={-1}
  className="hidden"
  aria-hidden="true"
/>
                {/* ---- Personal Information ---- */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="Full Name *" id="fullName" register={register("fullName")} error={errors.fullName?.message} />
                    <FloatingInput label="Business Email *" id="businessEmail" type="email" register={register("businessEmail")} error={errors.businessEmail?.message} />
                    <FloatingInput label="Phone Number" id="phoneNumber" type="tel" register={register("phoneNumber")} error={errors.phoneNumber?.message} />
                    <FloatingInput label="Company Name" id="companyName" register={register("companyName")} error={errors.companyName?.message} />
                    <div>
                      <FloatingInput label="Country" id="country" register={register("country")} error={errors.country?.message} listId="country-list-cons" />
                      <datalist id="country-list-cons">
                        {COUNTRY_LIST.map((country, index) => (
                          <option key={`${country}-${index}`} value={country} />
                        ))}
                      </datalist>
                    </div>
                    <FloatingSelect
                      label="Industry *"
                      id="industry"
                      options={INDUSTRY_OPTIONS}
                      register={register("industry")}
                      error={errors.industry?.message}
                      control={control}
                      name="industry"
                    />
                  </div>
                </div>

                {/* ---- Business Information ---- */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FloatingSelect
                      label="Company Size *"
                      id="companySize"
                      options={COMPANY_SIZE_OPTIONS}
                      register={register("companySize")}
                      error={errors.companySize?.message}
                      control={control}
                      name="companySize"
                    />
                    <FloatingSelect
                      label="Service Required *"
                      id="serviceRequired"
                      options={SERVICE_OPTIONS}
                      register={register("serviceRequired")}
                      error={errors.serviceRequired?.message}
                      control={control}
                      name="serviceRequired"
                    />
                    <FloatingSelect
                      label="Estimated Budget *"
                      id="estimatedBudget"
                      options={BUDGET_OPTIONS}
                      register={register("estimatedBudget")}
                      error={errors.estimatedBudget?.message}
                      control={control}
                      name="estimatedBudget"
                    />
                    <FloatingSelect
                      label="Preferred Contact Method *"
                      id="preferredContactMethod"
                      options={CONTACT_METHOD_OPTIONS}
                      register={register("preferredContactMethod")}
                      error={errors.preferredContactMethod?.message}
                      control={control}
                      name="preferredContactMethod"
                    />
                    <DateInput label="Preferred Date *" id="preferredDate" register={register("preferredDate")} error={errors.preferredDate?.message} />
                    <FloatingInput label="Preferred Time" id="preferredTime" register={register("preferredTime")} error={errors.preferredTime?.message} />
                  </div>
                </div>

                {/* ---- Project Details ---- */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Project Details
                  </h3>
                  <div className="space-y-6">
                    <FloatingTextarea
                      label="Project Requirements *"
                      id="requirements"
                      rows={5}
                      register={register("requirements")}
                      error={errors.requirements?.message}
                    />
                    <p className="text-xs text-slate-500">
                      Describe your business objectives, technical challenges, expected outcomes, timeline, and any other relevant details.
                    </p>
                  </div>
                </div>

                {/* ---- Attachments ---- */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">Attachments (optional)</h3>
                  <Controller
                    name="attachments"
                    control={control}
                    render={({ field }) => (
                      <FileUpload onFilesChange={(files) => field.onChange(files)} error={errors.attachments?.message} />
                    )}
                  />
                </div>

                {/* ---- Consent ---- */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" {...register("privacyConsent")} className="mt-1 accent-cyan-400 h-4 w-4 rounded" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      I have read and agree to the{" "}
                      <a href="/privacy" className="text-cyan-400 underline hover:text-cyan-300">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs ml-7">
                      {errors.privacyConsent.message}
                    </motion.p>
                  )}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" {...register("termsConsent")} className="mt-1 accent-cyan-400 h-4 w-4 rounded" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      I agree to the{" "}
                      <a href="/terms" className="text-cyan-400 underline hover:text-cyan-300">Terms & Conditions</a>
                    </span>
                  </label>
                  {errors.termsConsent && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs ml-7">
                      {errors.termsConsent.message}
                    </motion.p>
                  )}
                </div>

                {/* ---- Cloudflare Turnstile ---- */}
                {showTurnstile && (
  <div className="flex justify-center mt-6">
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

                {/* ---- Submit Button ---- */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 25px rgba(34,211,238,0.4)" } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Request Free Consultation"
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Sidebar Column (Desktop) */}
          <div className="hidden lg:block">
            <SecurityPanel />
          </div>
        </div>

        {/* Mobile sidebar (below form on small screens) */}
        <div className="mt-8 lg:hidden">
          <SecurityPanel />
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultationForm;