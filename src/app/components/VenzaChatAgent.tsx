"use client";

import { Bot, MessageCircle, Send, UserRound, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  from: "agent" | "visitor";
  text: string;
};

const quickQuestions = [
  "What services does VGS offer?",
  "Tell me about AI solutions",
  "I need a website or software",
  "Book a consultation",
];

function getAgentReply(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("service") ||
    text.includes("what do you do") ||
    text.includes("offer")
  ) {
    return "Venza Global Services provides AI Solutions, Machine Learning, Software Development, Web Development, Mobile Applications, Cloud Solutions, Cyber Security, IT Consulting, and Digital Transformation support.";
  }

  if (
    text.includes("ai") ||
    text.includes("artificial intelligence") ||
    text.includes("machine learning")
  ) {
    return "VGS helps businesses explore practical AI and Machine Learning solutions such as workflow automation, customer support systems, data analysis, intelligent dashboards, and business process improvement.";
  }

  if (
    text.includes("website") ||
    text.includes("web") ||
    text.includes("software") ||
    text.includes("app") ||
    text.includes("mobile")
  ) {
    return "VGS can support website development, web applications, software platforms, mobile applications, and scalable digital products. Please share your project requirement and we can guide you to the right service.";
  }

  if (
    text.includes("cloud") ||
    text.includes("hosting") ||
    text.includes("server")
  ) {
    return "VGS provides Cloud Solutions for scalable infrastructure, cloud migration, application deployment, digital operations, and business continuity planning.";
  }

  if (
    text.includes("cyber") ||
    text.includes("security") ||
    text.includes("hack")
  ) {
    return "VGS can support cybersecurity planning, security reviews, safer digital operations, and risk-focused technology guidance. For an urgent security incident, contact a qualified incident-response provider immediately.";
  }

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("quotation") ||
    text.includes("quote")
  ) {
    return "Pricing depends on the scope, timeline, integrations, and support requirements. Share your contact details and project summary below, and the VGS team can prepare the right consultation or quotation.";
  }

  if (
    text.includes("consult") ||
    text.includes("meeting") ||
    text.includes("call") ||
    text.includes("book")
  ) {
    return "You can request a free consultation. Please complete the short form below and the VGS team can contact you.";
  }

  if (
    text.includes("vijlak") ||
    text.includes("vij lak")
  ) {
    return "Venza Global Services operates under VIJLAK, a broader consulting, technology, innovation, and business ecosystem.";
  }

  return "I can help with VGS services, AI solutions, software development, cloud services, cybersecurity, consultations, and project enquiries. What would you like to know?";
}

export default function VenzaChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      from: "agent",
      text: "Hello! I am Venza, the VGS virtual assistant. I can help you understand our services or connect you with the VGS team.",
    },
  ]);

  const greetingText = useMemo(() => {
    return "Venza AI Assistant";
  }, []);

  const sendMessage = (event?: FormEvent) => {
    event?.preventDefault();

    const cleanMessage = message.trim();

    if (!cleanMessage) return;

    const visitorMessage: Message = {
      from: "visitor",
      text: cleanMessage,
    };

    const agentMessage: Message = {
      from: "agent",
      text: getAgentReply(cleanMessage),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      visitorMessage,
      agentMessage,
    ]);

    if (
      cleanMessage.toLowerCase().includes("consult") ||
      cleanMessage.toLowerCase().includes("quote") ||
      cleanMessage.toLowerCase().includes("price") ||
      cleanMessage.toLowerCase().includes("project")
    ) {
      setShowLeadForm(true);
    }

    setMessage("");
  };

  const chooseQuickQuestion = (question: string) => {
    const visitorMessage: Message = {
      from: "visitor",
      text: question,
    };

    const agentMessage: Message = {
      from: "agent",
      text: getAgentReply(question),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      visitorMessage,
      agentMessage,
    ]);

    if (question === "Book a consultation") {
      setShowLeadForm(true);
    }
  };

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Later: send this data to Supabase / Brevo / API route.
    setLeadSubmitted(true);

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        from: "agent",
        text: "Thank you. Your enquiry has been recorded. The VGS team will review your requirement and contact you soon.",
      },
    ]);
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Venza chat assistant"
        className="fixed bottom-5 right-5 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-500/40 transition hover:scale-105 hover:bg-cyan-300"
      >
        <MessageCircle size={30} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-[110] flex h-[min(720px,calc(100vh-40px))] w-[calc(100vw-24px)] max-w-[410px] flex-col overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-950 shadow-2xl shadow-black/50">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 text-slate-950">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-cyan-300">
                <Bot size={23} />
              </div>

              <div>
                <p className="font-bold">{greetingText}</p>
                <p className="text-xs font-medium text-slate-900">
                  Venza Global Services
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat assistant"
              className="rounded-lg p-2 transition hover:bg-white/25"
            >
              <X size={23} />
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 overflow-y-auto bg-slate-950 px-4 py-5">
            <div className="space-y-4">
              {messages.map((chatMessage, index) => (
                <div
                  key={`${chatMessage.from}-${index}`}
                  className={`flex ${
                    chatMessage.from === "visitor"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      chatMessage.from === "visitor"
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-white/10 bg-slate-900 text-slate-100"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-xs font-bold opacity-80">
                      {chatMessage.from === "agent" ? (
                        <>
                          <Bot size={14} />
                          Venza
                        </>
                      ) : (
                        <>
                          <UserRound size={14} />
                          You
                        </>
                      )}
                    </div>

                    {chatMessage.text}
                  </div>
                </div>
              ))}
            </div>

            {!leadSubmitted && (
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Quick questions
                </p>

                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => chooseQuickQuestion(question)}
                      className="rounded-full border border-cyan-400/40 px-3 py-2 text-left text-xs font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lead form */}
            {showLeadForm && !leadSubmitted && (
              <form
                onSubmit={submitLead}
                className="mt-6 rounded-2xl border border-cyan-400/25 bg-slate-900 p-4"
              >
                <p className="text-base font-bold text-white">
                  Request a VGS Consultation
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Share your details. The VGS team can contact you about your
                  requirement.
                </p>

                <div className="mt-4 space-y-3">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />

                  <input
                    name="phone"
                    placeholder="Phone / WhatsApp number"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />

                  <input
                    name="company"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />

                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                  >
                    <option value="" disabled>
                      Select service interest
                    </option>
                    <option>AI Solutions</option>
                    <option>Machine Learning</option>
                    <option>Software Development</option>
                    <option>Web Development</option>
                    <option>Mobile Applications</option>
                    <option>Cloud Solutions</option>
                    <option>Cyber Security</option>
                    <option>IT Consulting</option>
                    <option>Digital Transformation</option>
                    <option>Other</option>
                  </select>

                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your requirement"
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Submit Enquiry
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Message input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-white/10 bg-slate-900 p-3"
          >
            <div className="flex gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask Venza a question..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}