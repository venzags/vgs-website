// src/components/contact/ContactForm.tsx
"use client";

import React, { useState, useCallback, useRef } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Turnstile from "react-turnstile";
import type { UseFormRegisterReturn, Control, Path } from "react-hook-form";

// ---------- Cloudflare Worker Integration ----------
async function submitContactForm(
  data: ContactFormData & { turnstileToken: string }
): Promise<{ success: boolean; message?: string }> {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
  if (key !== "attachments" && value !== undefined && value !== null) {
    formData.append(key, String(value));
  }
});
if (data.attachments && Array.isArray(data.attachments)) {
  data.attachments.forEach((file: File) => {
    formData.append("attachments", file);
  });
}
  const response = await fetch(
    "https://vgs-contact-api.venzags.workers.dev",
    {
      method: "POST",
      body: formData,
      
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit contact form.");
  }

  return result;
}

// ---------- Zod schema with file validation ----------
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "image/png",
  "image/jpeg",
];

const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  businessEmail: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  country: z.string().optional(),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]).optional(),
  projectBudget: z
    .enum(["Under $5,000", "$5,000–20,000", "$20,000–50,000", "$50,000–100,000", "$100,000+"])
    .optional(),
  preferredContactMethod: z.enum(["Email", "Phone", "WhatsApp", "Google Meet", "Microsoft Teams"]).optional(),
  inquiryType: z.enum([
    "General Enquiry",
    "Business Enquiry",
    "Services",
    "Products",
    "Partnerships",
    "Careers",
    "Investor Relations",
    "Media Enquiry",
    "Technical Support",
    "Billing",
    "Existing Client",
    "Other",
  ]),
  services: z.array(z.string()).optional(),
  products: z.array(z.string()).optional(),
  subject: z.string().min(1, "Subject is required"),
  requirements: z.string().min(1, "Please describe your requirements"),
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
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// ---------- Options ----------
const COMPANY_SIZE_OPTIONS = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"] as const;
const BUDGET_OPTIONS = ["Under $5,000", "$5,000–20,000", "$20,000–50,000", "$50,000–100,000", "$100,000+"] as const;
const CONTACT_METHOD_OPTIONS = ["Email", "Phone", "WhatsApp", "Google Meet", "Microsoft Teams"] as const;
const INQUIRY_TYPES = [
  "General Enquiry",
  "Business Enquiry",
  "Services",
  "Products",
  "Partnerships",
  "Careers",
  "Investor Relations",
  "Media Enquiry",
  "Technical Support",
  "Billing",
  "Existing Client",
  "Other",
] as const;

const SERVICES_LIST = [
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
];

const PRODUCTS_LIST = [
  "AI Solutions",
  "SaaS Products",
  "Enterprise Software",
  "Cloud Services",
  "Business Automation",
  "Security Products",
  "Other",
];

// ---------- Country list for datalist (searchable) ----------
const COUNTRY_LIST = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Bolivia", "Brazil",
  "Brunei", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "Egypt",
  "Estonia", "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece",
  "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Latvia",
  "Lebanon", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Malaysia", "Maldives",
  "Malta", "Mexico", "Monaco", "Mongolia", "Morocco", "Myanmar", "Nepal", "Netherlands",
  "New Zealand", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
  "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand",
  "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia",
  "Zimbabwe",
];

// ---------- Premium UI Sub‑components ----------

// Floating label input with pill shape and glass background
const FloatingInput: React.FC<{
  label: string;
  error?: string;
  type?: string;
  register: UseFormRegisterReturn;
  id: string;
  listId?: string; // optional datalist id
}> = ({ label, error, type = "text", register, id, listId }) => (
  <div className="relative">
    <div className="relative">
      <input
        {...register}
        id={id}
        type={type}
        placeholder=" " // required for :placeholder-shown
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

// Floating select (fixed overlap by increasing top padding and repositioning label)
const FloatingSelect: React.FC<{
  label: string;
  options: readonly string[];
  error?: string;
  register: UseFormRegisterReturn;
  id: string;
  control: Control<ContactFormData>;
  name: Path<ContactFormData>;
}> = ({ label, options, error, register, id, control, name }) => {
  const value = useWatch({ control, name });
  const filled =
  typeof value === "string"
    ? value.trim().length > 0
    : Array.isArray(value)
      ? value.length > 0
      : Boolean(value);

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

// Floating textarea
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

// Checkbox grid
const CheckboxGrid: React.FC<{
  options: readonly string[];
  fieldName: "services" | "products";
  control: Control<ContactFormData>;
  error?: string;
}> = ({ options, fieldName, control, error }) => (
  <div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer group">
          <Controller<ContactFormData, "services" | "products">
            name={fieldName}
            control={control}
            render={({ field }) => {
              const currentValue: string[] = Array.isArray(field.value)
  ? (field.value as string[])
  : [];

const checked = currentValue.includes(option);
              return (
                <>
                  <input
                    type="checkbox"
                    value={option}
                    checked={checked}
                    onChange={(e) => {
                      const newValue = e.target.checked
  ? [...currentValue, option]
  : currentValue.filter((v) => v !== option);
                      field.onChange(newValue);
                    }}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 border border-slate-600 rounded-md group-hover:border-cyan-400 transition-colors flex items-center justify-center">
                    {checked && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3.5 h-3.5 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                  </div>
                </>
              );
            }}
          />
          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{option}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
  </div>
);

// Drag & drop file upload (premium style)
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
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300
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
    onChange={(e) => {
        console.log("Files:", e.target.files);
        handleFiles(e.target.files);
    }}
/>
        <motion.div animate={{ scale: dragActive ? 1.05 : 1 }} className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
    <p className="text-green-400 font-semibold mb-3">
      ✓ {selectedFiles.length} file(s) selected
    </p>

    {selectedFiles.map((file, index) => (
      <div
        key={index}
        className="flex justify-between py-1 text-sm text-slate-300"
      >
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

// ---------- Main ContactForm Component ----------
const ContactForm: React.FC = () => {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      country: "",
      companySize: undefined,
      projectBudget: undefined,
      preferredContactMethod: undefined,
      inquiryType: undefined,
      services: [],
      products: [],
      subject: "",
      requirements: "",
      attachments: [],
      privacyConsent: false,
      termsConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setToast({ type: "error", message: "Please complete the security check." });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await submitContactForm({ ...data, turnstileToken });
      if (response.success) {
        setIsSuccess(true);
        setToast({ type: "success", message: "Thank you! We'll get back to you within 24 hours." });
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
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden pt-6 md:pt-10 pb-16 px-0 sm:px-6 lg:px-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/contact/contact-bg.webp')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/50" />

      {/* Cyan and blue glow blobs */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <AnimatePresence>
        {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
      </AnimatePresence>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 bg-[#020617]/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-shadow duration-500"
      >
        <div className="px-3 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          {/* In‑card hero / heading */}
          <div className="mb-8 text-center sm:text-left">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4"
            >
              💬 CONTACT VGS
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Let&apos;s Build Your Next Digital Solution
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Tell us about your business goals, project requirements, or technical challenges. Our experts will review
              your enquiry and respond with the right solution.
            </p>
          </div>

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
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h3>
              <p className="text-slate-400 max-w-md">Our team will review your enquiry and respond shortly.</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10 pb-28">
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
                  {/* Country with searchable datalist */}
                  <div>
                    <FloatingInput
                      label="Country"
                      id="country"
                      register={register("country")}
                      error={errors.country?.message}
                      listId="country-list"
                    />
                    <datalist id="country-list">
                      {COUNTRY_LIST.map((country) => (
                        <option key={country} value={country} />
                      ))}
                    </datalist>
                  </div>
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
                    label="Company Size"
                    id="companySize"
                    options={COMPANY_SIZE_OPTIONS}
                    register={register("companySize")}
                    error={errors.companySize?.message}
                    control={control}
                    name="companySize"
                  />
                  <FloatingSelect
                    label="Project Budget"
                    id="projectBudget"
                    options={BUDGET_OPTIONS}
                    register={register("projectBudget")}
                    error={errors.projectBudget?.message}
                    control={control}
                    name="projectBudget"
                  />
                  <FloatingSelect
                    label="Preferred Contact Method"
                    id="preferredContactMethod"
                    options={CONTACT_METHOD_OPTIONS}
                    register={register("preferredContactMethod")}
                    error={errors.preferredContactMethod?.message}
                    control={control}
                    name="preferredContactMethod"
                  />
                </div>
              </div>

              {/* ---- Inquiry Type ---- */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Inquiry Type</h3>
                <FloatingSelect
                  label="What best describes your enquiry? *"
                  id="inquiryType"
                  options={INQUIRY_TYPES}
                  register={register("inquiryType")}
                  error={errors.inquiryType?.message}
                  control={control}
                  name="inquiryType"
                />
              </div>

              {/* ---- Services Required ---- */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Services Required</h3>
                <CheckboxGrid options={SERVICES_LIST} fieldName="services" control={control} error={errors.services?.message} />
              </div>

              {/* ---- Products Interested In ---- */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Products Interested In</h3>
                <CheckboxGrid options={PRODUCTS_LIST} fieldName="products" control={control} error={errors.products?.message} />
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
                  <FloatingInput label="Subject *" id="subject" register={register("subject")} error={errors.subject?.message} />
                  <FloatingTextarea
                    label="Requirement Details *"
                    id="requirements"
                    rows={5}
                    register={register("requirements")}
                    error={errors.requirements?.message}
                  />
                  <p className="text-xs text-slate-500">
                    Describe your business challenge, objectives, expected features, preferred technologies, timeline, and any additional information.
                  </p>
                </div>
              </div>

              {/* ---- Attachments ---- */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Attachments</h3>
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
              <div className="flex justify-center py-2">
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADrReyVICiE2Fzct"}
                  onVerify={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                  theme="dark"
                />
              </div>

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
                  "Send Message"
                )}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;