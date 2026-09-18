import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  FileText,
  ExternalLink,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { asset } from "../utils/assets";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  action?: {
    label: string;
    href?: string;
    download?: string;
    onClick?: () => void;
  };
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hi there! I'm Gian's Portfolio Assistant. I can tell you about his background, production platforms (like FrogPOS), game engines, or get you his latest resume.",
    timestamp: "Just now",
  },
];

const SUGGESTED_QUESTIONS = [
  "Who is Gian?",
  "Tell me about FrogPOS",
  "Download Resume",
  "What is his tech stack?",
  "How can I contact him?",
];

export const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const generateAnswer = (question: string): { text: string; action?: ChatMessage["action"] } => {
    const q = question.toLowerCase();

    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return {
        text: "You can download Gian Carlo Noriega's latest verified resume right here. It highlights his full-stack software experience, education, and technical ventures.",
        action: {
          label: "Download ResumeLatest.pdf",
          href: asset("ResumeLatest.pdf"),
          download: "Gian_Carlo_Noriega_Resume.pdf",
        },
      };
    }

    if (q.includes("frogpos") || q.includes("pos") || q.includes("restaurant") || q.includes("venture")) {
      return {
        text: "FrogPOS is Gian's flagship production platform: a cloud-enabled, offline-first Point of Sale & Inventory Ledger engineered with React 19, TypeScript, PostgreSQL, and IndexedDB local replication. It guarantees zero data loss even during connectivity outages.",
        action: {
          label: "Open Live FrogPOS",
          href: "https://pos.frogrest.com",
        },
      };
    }

    if (q.includes("prepaview") || q.includes("game") || q.includes("unreal") || q.includes("3d")) {
      return {
        text: "Prepaview is a high-fidelity 3D simulation project created by Gian in Unreal Engine 5, featuring procedural motion logic and custom C++ performance components. It is playable and available on itch.io!",
        action: {
          label: "View on itch.io",
          href: "https://frogrest.itch.io/prepaview",
        },
      };
    }

    if (q.includes("stack") || q.includes("skills") || q.includes("tech") || q.includes("languages")) {
      return {
        text: "Gian's tech stack spans:\n• Frontend: React 19, TypeScript, Next.js, Tailwind CSS v4, Framer Motion\n• Backend & Database: Node.js, Hono, PostgreSQL, Supabase, Redis\n• Simulation & Creative: Unreal Engine 5, C++, After Effects, Premiere Pro",
        action: {
          label: "Explore Skills Grid",
          href: "#skills",
        },
      };
    }

    if (q.includes("who is") || q.includes("background") || q.includes("about") || q.includes("experience")) {
      return {
        text: "Gian Carlo Noriega is a Full-Stack Software Developer, Creative Technologist, and Video Editor based in the Philippines. He is pursuing a BS in Computer Science (graduating 2026) and specializes in multi-tenant web platforms, offline-first systems, and interactive simulations.",
        action: {
          label: "View About Section",
          href: "#about",
        },
      };
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
      return {
        text: "Gian is available for full-stack engineering roles and freelance software projects. You can email him directly at noriegagian01@gmail.com or connect via LinkedIn.",
        action: {
          label: "Send Gian an Email",
          href: "mailto:noriegagian01@gmail.com",
        },
      };
    }

    // General fallback answer
    return {
      text: "Thanks for asking! Gian is a versatile engineer building robust web architectures and creative tech. Would you like to inspect his production work, download his resume, or send him a message directly?",
      action: {
        label: "Contact Gian",
        href: "#contact",
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Natural delay before bot reply
    setTimeout(() => {
      const response = generateAnswer(text);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        timestamp: "Now",
        action: response.action,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close Portfolio Assistant" : "Open Portfolio Assistant"}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-black shadow-2xl shadow-amber-500/30 flex items-center justify-center min-w-[54px] min-h-[54px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-black fill-current" />
              {hasUnread && (
                <span className="absolute top-0 right-0 -mt-0.5 -mr-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-black" />
                </span>
              )}
            </>
          )}

          {/* Tooltip on hover when closed */}
          {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-neutral-900/90 text-amber-300 border border-white/10 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Ask Gian's AI Assistant
            </span>
          )}
        </motion.button>
      </div>

      {/* Assistant Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[580px] h-[520px] rounded-3xl bg-[#0e1018]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white tracking-wide">Gian's Assistant</h3>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-mono">Ask anything about my work & stack</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-2 text-neutral-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Assistant"
                  className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2`}>
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        m.sender === "user"
                          ? "bg-amber-500 text-black font-medium rounded-tr-sm"
                          : "bg-white/[0.05] border border-white/10 text-neutral-200 rounded-tl-sm whitespace-pre-line"
                      }`}
                    >
                      {m.text}
                    </div>

                    {/* Optional Interactive Action Link / Button */}
                    {m.action && (
                      <div className="pt-1">
                        <a
                          href={m.action.href}
                          download={m.action.download}
                          target={m.action.href?.startsWith("http") || m.action.download ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (m.action?.href?.startsWith("#")) {
                              setIsOpen(false);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono font-medium hover:bg-amber-500 hover:text-black transition-all shadow-sm"
                        >
                          {m.action.download ? (
                            <FileText className="w-3.5 h-3.5" />
                          ) : m.action.href?.startsWith("http") ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                          <span>{m.action.label}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {m.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono py-1 px-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  <span className="ml-1 text-[11px]">Assistant thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 text-[11px] font-mono whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white/[0.04] border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about projects, stack, resume..."
                maxLength={240}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 transition-all flex items-center justify-center min-w-[38px] min-h-[38px]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAssistant;
