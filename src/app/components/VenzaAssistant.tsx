"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bot,
  CalendarDays,
  MessageCircle,
  PhoneCall,
  Send,
  User,
  X,
} from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

type KnowledgeItem = {
  keywords: string[];
  answer: string;
};

const quickQuestions = [
  "What services does VGS offer?",
  "Tell me about VGS",
  "Tell me about AI solutions",
  "I need a website or software",
  "Show VGS products",
  "Which industries does VGS support?",
  "How much does a project cost?",
  "Book a consultation",
];

const vgsKnowledge: KnowledgeItem[] = [
  /* ================= COMPANY / IDENTITY ================= */
  {
    keywords: [
      "what is vgs",
      "about vgs",
      "about venza",
      "about venza global services",
      "company information",
      "tell me about vgs",
      "who are you",
      "what do you do",
      "what is venza",
    ],
    answer:
      "Venza Global Services, also called VGS, is a technology-focused consulting brand delivering AI solutions, machine learning, software development, web development, mobile applications, cloud services, cyber security, IT consulting, digital marketing, and business transformation support.",
  },
  {
    keywords: [
      "vijlak",
      "vij lak",
      "vgs under",
      "parent company",
      "legal entity",
      "registered entity",
    ],
    answer:
      "Venza Global Services operates under VIJLAK, a legally registered entity. VIJLAK supports a broader ecosystem focused on consulting, innovation, business services, and technology-led growth.",
  },
  {
    keywords: [
      "owner",
      "who owns",
      "owner of vgs",
      "who is the owner",
      "founder",
      "who founded",
      "who started",
      "ceo",
      "director",
      "leadership",
      "who runs vgs",
      "who is behind vgs",
    ],
    answer:
      "VGS operates under VIJLAK. For official ownership, leadership, partnership, company verification, or legal information, please contact the VGS team through the Connect VGS page.",
  },
  {
    keywords: [
      "mission",
      "vgs mission",
      "your mission",
      "vision",
      "vgs vision",
      "your vision",
    ],
    answer:
      "VGS aims to provide reliable, scalable technology solutions that help businesses grow. Its vision is to become a globally trusted technology partner for practical digital transformation.",
  },
  {
    keywords: [
      "location",
      "where are you",
      "where is vgs",
      "office",
      "address",
      "head office",
      "country",
      "based in",
    ],
    answer:
      "VGS works with businesses through a digital-first consulting and technology delivery model. For official office, meeting, location, or company contact details, please use the Connect VGS page.",
  },
  {
    keywords: [
      "global",
      "international",
      "countries",
      "worldwide",
      "overseas",
      "remote",
      "outside india",
    ],
    answer:
      "VGS is positioned to support businesses across locations through remote collaboration, digital consulting, and scalable technology delivery. Contact the team to discuss your country, project needs, and preferred communication method.",
  },

  /* ================= SERVICES ================= */
  {
    keywords: [
      "service",
      "services",
      "what services",
      "what do you offer",
      "offerings",
      "solutions",
      "help with",
    ],
    answer:
      "VGS offers AI Solutions, Machine Learning, Software Development, Web Development, Mobile Applications, Cloud Solutions, Cyber Security, IT Consulting, Digital Marketing, and Business Transformation support.",
  },
  {
    keywords: [
      "ai",
      "artificial intelligence",
      "ai solution",
      "ai services",
      "ai automation",
      "automation",
      "chatbot",
      "ai agent",
      "virtual assistant",
    ],
    answer:
      "VGS can help businesses use AI for workflow automation, AI assistants, customer-support chatbots, lead handling, business analytics, content workflows, AI-enabled websites, and digital transformation planning.",
  },
  {
    keywords: [
      "machine learning",
      "ml",
      "prediction",
      "predictive",
      "data model",
      "data science",
      "classification",
      "recommendation system",
    ],
    answer:
      "VGS can support machine-learning projects such as data analysis, prediction models, recommendation systems, business intelligence, automation workflows, and practical AI integration. The correct approach depends on your available data and business objective.",
  },
  {
    keywords: [
      "software",
      "software development",
      "custom software",
      "application",
      "web application",
      "dashboard",
      "crm",
      "erp",
      "saas",
      "portal",
      "management system",
    ],
    answer:
      "VGS develops custom business software such as dashboards, CRM systems, portals, booking systems, inventory tools, internal workflow platforms, customer portals, and scalable web applications.",
  },
  {
    keywords: [
      "website",
      "web development",
      "web design",
      "corporate website",
      "business website",
      "landing page",
      "ecommerce",
      "e-commerce",
      "online store",
      "shop website",
    ],
    answer:
      "VGS can build corporate websites, business websites, landing pages, e-commerce platforms, portfolio websites, service websites, custom web applications, and growth-focused digital experiences.",
  },
  {
    keywords: [
      "mobile",
      "mobile app",
      "android",
      "ios",
      "iphone app",
      "app development",
      "application development",
    ],
    answer:
      "VGS can support mobile application planning and development for Android and iOS, including business apps, customer apps, booking platforms, service apps, internal tools, and mobile-connected software systems.",
  },
  {
    keywords: [
      "cloud",
      "cloud solution",
      "cloud services",
      "server",
      "hosting",
      "infrastructure",
      "migration",
      "deploy",
      "deployment",
      "aws",
      "vercel",
      "database",
    ],
    answer:
      "VGS can help with cloud infrastructure planning, hosting architecture, deployment, cloud migration, database setup, scalable server planning, monitoring, performance optimisation, and cloud security guidance.",
  },
  {
    keywords: [
      "cyber",
      "cyber security",
      "security",
      "website security",
      "hack",
      "hacked",
      "protection",
      "vulnerability",
      "security audit",
      "penetration test",
    ],
    answer:
      "VGS provides cyber security assessment and security guidance for websites, cloud systems, applications, access controls, security awareness, risk reduction, and vulnerability review. For urgent incidents, contact a qualified security response provider immediately.",
  },
  {
    keywords: [
      "consulting",
      "it consulting",
      "technology consulting",
      "digital transformation",
      "business transformation",
      "strategy",
      "technology strategy",
      "digital strategy",
    ],
    answer:
      "VGS provides technology and business transformation guidance to help organisations choose practical systems, improve workflows, reduce manual work, strengthen digital operations, and plan scalable growth.",
  },
  {
    keywords: [
      "marketing",
      "digital marketing",
      "seo",
      "social media",
      "google ads",
      "facebook ads",
      "lead generation",
      "branding",
      "content marketing",
    ],
    answer:
      "VGS can support digital marketing strategy, website growth, SEO foundations, lead-generation systems, campaign planning, analytics, content workflows, and digital brand presence.",
  },

  /* ================= PRODUCTS ================= */
  {
    keywords: ["product", "products", "vgs product", "what products"],
    answer:
      "VGS products include AI Business Automation, Business Management Platform, Cloud Infrastructure, Cyber Security Assessment, Digital Growth Toolkit, and Custom Website Package.",
  },
  {
    keywords: [
      "ai business automation",
      "automation product",
      "automate business",
    ],
    answer:
      "AI Business Automation is designed to reduce repetitive manual work using workflows, AI assistance, lead handling, customer communication, task routing, and business process automation.",
  },
  {
    keywords: [
      "business management platform",
      "management platform",
      "business platform",
    ],
    answer:
      "The Business Management Platform is intended for organisations that need structured workflows, business operations tracking, internal dashboards, customer management, reporting, and process control.",
  },
  {
    keywords: [
      "cloud infrastructure",
      "cloud product",
      "infrastructure product",
    ],
    answer:
      "Cloud Infrastructure support focuses on scalable hosting, deployment planning, database architecture, monitoring, performance, security, and reliable technology foundations for business systems.",
  },
  {
    keywords: [
      "cyber security assessment",
      "security assessment",
      "security product",
    ],
    answer:
      "Cyber Security Assessment helps businesses review website, application, cloud, access-control, and operational security risks, then receive practical improvement guidance.",
  },
  {
    keywords: [
      "digital growth toolkit",
      "growth toolkit",
      "digital toolkit",
    ],
    answer:
      "Digital Growth Toolkit is designed to help businesses strengthen their online presence through website foundations, marketing workflows, analytics, lead-generation systems, and growth planning.",
  },
  {
    keywords: [
      "custom website package",
      "website package",
      "custom website",
    ],
    answer:
      "Custom Website Package is for businesses that need a professional website tailored to their services, brand, target customers, content requirements, and future growth plans.",
  },

  /* ================= INDUSTRIES ================= */
  {
    keywords: [
      "industry",
      "industries",
      "sector",
      "sectors",
      "who do you help",
      "who are your clients",
      "business type",
    ],
    answer:
      "VGS can support startups, SMEs, enterprises, technology companies, retail, e-commerce, healthcare, education, finance, real estate, hospitality, logistics, manufacturing, and service businesses.",
  },
  {
    keywords: ["startup", "new business", "small business", "sme", "msme"],
    answer:
      "VGS can help startups and small businesses with websites, automation, customer systems, digital marketing foundations, cloud setup, business dashboards, and scalable technology planning.",
  },
  {
    keywords: ["ecommerce", "e-commerce", "online shop", "online store", "retail"],
    answer:
      "For e-commerce and retail businesses, VGS can support online stores, product catalogues, payment integrations, customer workflows, inventory-related systems, marketing foundations, analytics, and automation.",
  },
  {
    keywords: ["healthcare", "hospital", "clinic", "medical"],
    answer:
      "VGS can discuss technology support for healthcare organisations, such as websites, appointment workflows, secure information handling, operational dashboards, and digital service systems. Specific compliance requirements must be reviewed separately.",
  },
  {
    keywords: ["real estate", "property", "builder", "construction"],
    answer:
      "VGS can help real-estate and property businesses with lead-generation websites, property listing systems, enquiry workflows, CRM integration, marketing support, dashboards, and automation.",
  },
  {
    keywords: ["education", "school", "college", "training", "course"],
    answer:
      "VGS can support education and training businesses with websites, course platforms, student enquiry workflows, learning portals, automation, digital marketing, and operational tools.",
  },

  /* ================= PORTFOLIO / GALLERY ================= */
  {
    keywords: [
      "portfolio",
      "projects",
      "project",
      "case study",
      "case studies",
      "previous work",
      "work examples",
      "examples",
    ],
    answer:
      "You can explore VGS portfolio categories including AI Business Automation, Cloud Infrastructure Migration, Corporate Website Development, Mobile Application Platform, Digital Marketing Campaign, and Cyber Security Assessment. Visit the Portfolio page for available examples.",
  },
  {
    keywords: [
      "gallery",
      "photos",
      "presentation",
      "video",
      "documents",
      "docs",
      "sheets",
      "software screenshots",
    ],
    answer:
      "The VGS Gallery is designed to organise presentations, photos, videos, documents, sheets, websites, software work, and cover pages. Visit the Gallery page to explore available materials.",
  },

  /* ================= PRICING / PROCESS ================= */
  {
    keywords: [
      "price",
      "pricing",
      "cost",
      "budget",
      "quote",
      "quotation",
      "rate",
      "how much",
      "charges",
    ],
    answer:
      "VGS pricing depends on the project scope, features, technology, integrations, content, timeline, security needs, and support requirements. Share your requirement and budget range to receive the right proposal.",
  },
  {
    keywords: [
      "how do you work",
      "process",
      "workflow",
      "project process",
      "steps",
      "how to start",
    ],
    answer:
      "A typical VGS project starts with requirement discussion, scope review, solution planning, proposal confirmation, design and development, testing, launch, and support. The exact process depends on the project type.",
  },
  {
    keywords: [
      "time",
      "timeline",
      "how long",
      "delivery",
      "deadline",
      "when complete",
    ],
    answer:
      "Project timelines depend on the scope, number of features, integrations, content readiness, feedback speed, and testing needs. After understanding your requirement, VGS can provide a realistic delivery estimate.",
  },
  {
    keywords: [
      "maintenance",
      "support",
      "after support",
      "after launch",
      "update website",
      "software maintenance",
      "technical support",
    ],
    answer:
      "VGS can provide ongoing support based on the agreed scope, including website updates, software maintenance, cloud monitoring, security review, performance optimisation, technical guidance, and feature improvements.",
  },
  {
    keywords: [
      "payment",
      "pay",
      "invoice",
      "advance",
      "installment",
      "contract",
      "agreement",
    ],
    answer:
      "Payment structure, project agreement, milestones, and invoice terms depend on the approved proposal and project scope. Contact VGS for the correct commercial process for your requirement.",
  },

  /* ================= CONSULTATION / LEADS ================= */
  {
    keywords: [
      "consultation",
      "free consultation",
      "meeting",
      "book meeting",
      "book consultation",
      "schedule call",
      "talk to expert",
    ],
    answer:
      "You can request a free consultation with VGS. Please share your name, company or business type, requirement, preferred timeline, email, and phone number through the Consultation page.",
  },
  {
    keywords: [
      "contact",
      "contact vgs",
      "talk to team",
      "human",
      "person",
      "support team",
      "sales",
      "business enquiry",
      "enquiry",
    ],
    answer:
      "You can contact the VGS team through the Connect VGS or Contact page. For a faster project discussion, share your name, business name, email, phone number, requirement, budget range if comfortable, and expected timeline.",
  },
  {
    keywords: [
      "hire",
      "hire vgs",
      "work with vgs",
      "start project",
      "new project",
      "need a project",
      "need help",
    ],
    answer:
      "To start with VGS, describe your business, your main problem, the solution you need, expected timeline, and budget range if available. The team can then recommend the suitable service or product path.",
  },
  {
    keywords: [
      "career",
      "job",
      "jobs",
      "vacancy",
      "work for vgs",
      "internship",
      "join vgs",
    ],
    answer:
      "For careers, internships, collaboration, or work opportunities, please check the Careers page or contact the VGS team with your profile, skills, portfolio, and preferred role.",
  },
  {
    keywords: [
      "partner",
      "partnership",
      "collaboration",
      "reseller",
      "agency partner",
      "business partner",
    ],
    answer:
      "VGS welcomes relevant technology, business, service, and strategic partnership discussions. Please use the Partnerships or Connect VGS page and describe your organisation, proposal, and expected collaboration model.",
  },
  {
    keywords: [
      "media",
      "press",
      "news",
      "interview",
      "media enquiry",
    ],
    answer:
      "For media, press, interview, or public-information requests, please use the Media Enquiry page and provide your organisation name, topic, deadline, and contact details.",
  },

  /* ================= PRIVACY / SAFETY ================= */
  {
    keywords: [
      "privacy",
      "data privacy",
      "data security",
      "confidential",
      "confidentiality",
      "nda",
      "safe",
    ],
    answer:
      "VGS treats project information as confidential. Do not share passwords, card details, government IDs, private keys, or highly sensitive information in chat. For confidential project discussions, contact the VGS team directly.",
  },
  {
    keywords: [
      "refund",
      "cancel",
      "cancellation",
      "complaint",
      "issue",
      "problem",
      "dispute",
    ],
    answer:
      "For project, service, payment, cancellation, complaint, or support issues, please contact the VGS team through the official Contact or Connect VGS page with your project reference and clear details.",
  },

  /* ================= GREETING ================= */
  {
    keywords: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    answer:
      "Hello! I am Venza, the VGS virtual assistant. I can help with VGS services, products, AI, websites, software, cloud, cyber security, portfolio, consultation, and business enquiries.",
  },
];

function getVenzaReply(question: string) {
  const normalizedQuestion = question
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalizedQuestion) {
    return "Please type a VGS-related question. For example: services, products, AI solutions, website development, cloud, cyber security, consultation, or contact.";
  }

  // STEP 1: Exact keyword match
  const exactMatch = vgsKnowledge.find((item) =>
    item.keywords.some(
      (keyword) => normalizedQuestion === keyword.toLowerCase()
    )
  );
  if (exactMatch) return exactMatch.answer;

  // STEP 2: Full phrase match
  const phraseMatch = vgsKnowledge.find((item) =>
    item.keywords.some((keyword) =>
      normalizedQuestion.includes(keyword.toLowerCase())
    )
  );
  if (phraseMatch) return phraseMatch.answer;

  // STEP 3: Meaningful individual word match
  const questionWords = normalizedQuestion
    .split(" ")
    .filter((word) => word.length >= 3);

  const wordMatch = vgsKnowledge.find((item) =>
    item.keywords.some((keyword) => {
      const keywordWords = keyword
        .toLowerCase()
        .split(" ")
        .filter((word) => word.length >= 3);
      return keywordWords.some((keywordWord) =>
        questionWords.includes(keywordWord)
      );
    })
  );
  if (wordMatch) return wordMatch.answer;

  return "I do not have a confirmed answer for that VGS question yet. I can help with VGS company information, services, products, AI solutions, websites, software, mobile apps, cloud, cyber security, industries, portfolio, pricing guidance, consultations, careers, partnerships, and business enquiries. For official detailed information, please contact the VGS team through the Connect VGS page.";
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "bot",
    text: "Hello! I am Venza, the VGS virtual assistant. I can help you understand VGS services, products, AI solutions, websites, software, cloud, cyber security, portfolio, consultations, and business enquiries.",
  },
];

export default function VenzaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(2);

  const getNextMessageId = () => {
    const id = messageIdRef.current;
    messageIdRef.current += 1;
    return id;
  };

  useEffect(() => {
    if (!isOpen) return;

    const scrollTimer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [messages, isOpen]);

  const sendMessage = (text?: string) => {
    const finalMessage = (text ?? input).trim();
    if (!finalMessage) return;

    const userMessage: Message = {
      id: getNextMessageId(),
      role: "user",
      text: finalMessage,
    };

    const botMessage: Message = {
      id: getNextMessageId(),
      role: "bot",
      text: getVenzaReply(finalMessage),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
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

      {isOpen && (
        <div className="fixed inset-0 z-[500] flex items-end justify-center bg-slate-950/50 p-0 backdrop-blur-[2px] lg:pointer-events-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <section className="pointer-events-auto flex h-[calc(100dvh-18px)] w-full flex-col overflow-hidden rounded-t-[28px] border border-cyan-400/30 bg-[#03081a] shadow-2xl lg:absolute lg:bottom-6 lg:right-6 lg:h-[620px] lg:w-[420px] lg:rounded-[28px]">
            {/* Header */}
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
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Venza AI Assistant"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-slate-950 transition hover:bg-white/40"
              >
                <X size={31} strokeWidth={2.2} />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 pb-5 pt-5 lg:px-5">
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
                        <Bot size={18} /> Venza
                      </div>
                    )}
                    {message.role === "user" && (
                      <div className="mb-2 flex items-center justify-end gap-2 text-sm font-bold text-slate-800">
                        You <User size={17} />
                      </div>
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Quick questions */}
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

              {/* Action links */}
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

            {/* Input area */}
            <div className="sticky bottom-0 border-t border-slate-700 bg-[#071126] p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
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