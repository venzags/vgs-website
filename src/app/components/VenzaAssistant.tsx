"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronRight,
  MessageCircle,
  Send,
  User,
  X,
  CalendarDays,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const quickQuestions = [
  "What services does VGS offer?",
  "Tell me about AI solutions",
  "I need a website or software",
  "Show VGS products",
  "Book a consultation",
  "Talk to VGS team",
];

const vgsKnowledge = [
  {
    keywords: ["service", "services", "offer", "what do you do"],
    answer:
      "Venza Global Services provides AI Solutions, Machine Learning, Software Development, Web Development, Mobile Applications, Cloud Solutions, Cyber Security, IT Consulting, Digital Marketing, Business Transformation, and technology consulting.",
  },
  {
    keywords: ["ai", "artificial intelligence", "automation"],
    answer:
      "VGS helps businesses use AI for automation, customer support systems, workflow optimisation, AI-powered websites, business analytics, lead handling, and digital transformation.",
  },
  {
    keywords: ["website", "web", "software", "app", "mobile application"],
    answer:
      "VGS can help with business websites, e-commerce platforms, custom web applications, mobile applications, dashboards, CRM systems, booking systems, and scalable software solutions. Tell me what type of business you have and what you need.",
  },
  {
    keywords: ["cloud", "server", "hosting", "infrastructure"],
    answer:
      "VGS provides cloud infrastructure planning, cloud migration, scalable hosting architecture, server setup, security planning, monitoring, and cloud optimisation.",
  },
  {
    keywords: ["security", "cyber", "hack", "protection"],
    answer:
      "VGS provides cyber security assessments, website security review, cloud security planning, security best-practice guidance, vulnerability awareness, and business risk reduction support.",
  },
  {
    keywords: ["product", "products"],
    answer:
      "VGS products include AI Business Automation, Business Management Platform, Cloud Infrastructure, Cyber Security Assessment, Digital Growth Toolkit, and Custom Website Package.",
  },
  {
    keywords: ["consultation", "meeting", "call", "book"],
    answer:
      "You can book a free consultation with VGS. Please share your name, email, phone number, company name, and what you need help with. Our team can then contact you.",
  },
  {
    keywords: ["price", "cost", "pricing", "budget", "quote"],
    answer:
      "Pricing depends on your requirement, scope, technology, integrations, timeline, and support needs. Share your project details and budget range, and VGS can prepare the right proposal.",
  },
  {
    keywords: ["contact", "team", "human", "person", "support"],
    answer:
      "You can connect directly with the VGS team. Please share your name, email, phone number, company name, and requirement. I will guide you to the correct enquiry page.",
  },
  {
    keywords: ["vijlak", "vij lak"],
    answer:
      "Venza Global Services operates under VIJLAK, a legally registered entity. VIJLAK is a multi-sector consulting and innovation ecosystem supporting businesses, entrepreneurs, institutions, investors, and communities.",
  },
];

function getVenzaReply(question: string) {
  const normalizedQuestion = question.toLowerCase();

  for (const item of vgsKnowledge) {
    if (item.keywords.some((keyword) => normalizedQuestion.includes(keyword))) {
      return item.answer;
    }
  }

  return "I can help with Venza Global Services information, AI solutions, websites, software, cloud, cyber security, VGS products, consultations, and business enquiries. For other general questions, please contact the VGS team or ask a VGS-related question.";
}

export default function VenzaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "Hello! I am Venza, the VGS virtual assistant. I can help you understand our services, products, AI solutions, websites, software, cloud, cyber security, or connect you with the VGS team.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isOpen]);

  const sendMessage = (text?: string) => {
    const finalMessage = (text || input).trim();

    if (!finalMessage) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: finalMessage,
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      role: "bot",
      text: getVenzaReply(finalMessage),
    };

    setMessages((previous) => [...previous, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating assistant button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Venza AI Assistant"
          className="fixed bottom-5 right-5 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-2xl transition hover:scale-105 hover:bg-cyan-300 md:bottom-7 md:right-7"
        >
          <MessageCircle size={31} strokeWidth={2} />
        </button>
      )}

      {/* Assistant window */}
      {isOpen && (
        <div className="fixed inset-0 z-[500] flex items-end justify-center bg-slate-950/50 p-0 backdrop-blur-[2px] md:items-end md:justify-end md:p-6">
          <section className="flex h-[calc(100dvh-18px)] w-full flex-col overflow-hidden rounded-t-[28px] border border-cyan-400/30 bg-[#03081a] shadow-2xl md:h-[720px] md:w-[470px] md:rounded-[28px]">
            {/* Header - always visible */}
            <div className="sticky top-0 z-20 flex min-h-[94px] items-center justify-between bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-5 text-slate-950">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-cyan-300 shadow-lg">
                  <Bot size={29} />
                </div>

                <div>
                  <h2 className="text-[22px] font-extrabold leading-tight">
                    Venza AI Assistant
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Venza Global Services
                  </p>
                </div>
              </div>

              {/* Close button stays visible */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Venza AI Assistant"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-slate-950 transition hover:bg-white/40"
              >
                <X size={31} strokeWidth={2.2} />
              </button>
            </div>

            {/* Scrollable chat area */}
            <div className="flex-1 overflow-y-auto px-4 pb-5 pt-5">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-[24px] px-5 py-4 text-[17px] leading-8 ${
                      message.role === "user"
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-slate-700 bg-slate-900 text-slate-100"
                    }`}
                  >
                    {message.role === "bot" && (
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                        <Bot size={18} />
                        Venza
                      </div>
                    )}

                    {message.role === "user" && (
                      <div className="mb-2 flex items-center justify-end gap-2 text-sm font-bold text-slate-800">
                        You
                        <User size={17} />
                      </div>
                    )}

                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="mt-7">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                    Quick Questions
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => sendMessage(question)}
                        className="rounded-full border border-cyan-400/60 px-4 py-3 text-left text-[16px] font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href="/consultation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-4 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  Book Consultation
                  <CalendarDays size={19} />
                </Link>

                <Link
                  href="/connect-vgs"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Talk to VGS Team
                  <PhoneCall size={19} />
                </Link>
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Fixed input area */}
            <div className="sticky bottom-0 border-t border-slate-700 bg-[#071126] p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask Venza a question..."
                  className="h-14 min-w-0 flex-1 rounded-2xl border border-slate-700 bg-[#020617] px-5 text-[16px] text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  aria-label="Send message"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
                >
                  <Send size={25} />
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                Venza provides VGS website information and enquiry guidance.
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}