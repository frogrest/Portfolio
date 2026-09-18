import React, { useState, useRef, useEffect, type FormEvent } from "react";
import {
  INITIAL_CHAT_STATE,
  handleMessage,
  greeting,
  RESTAURANT_NAME,
} from "../lib/chatbot";
import { X, Send, ShoppingBag, Utensils, Sparkles } from "lucide-react";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [state, setState] = useState(INITIAL_CHAT_STATE);
  const [draft, setDraft] = useState("");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const greeted = useRef(false);

  useEffect(() => {
    if (isOpen) {
      if (!greeted.current) {
        setState((curr) => ({ ...curr, messages: greeting() }));
        greeted.current = true;
      }
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [state.messages]);

  if (!isOpen) return null;

  const handleSend = (e?: FormEvent) => {
    e?.preventDefault();
    const val = draft.trim();
    if (!val) return;
    setDraft("");
    setState((curr) => handleMessage(curr, val));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const quickAction = (actionText: string) => {
    setState((curr) => handleMessage(curr, actionText));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Restaurant Food-Ordering Chatbot Prototype"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-[min(620px,90vh)] flex flex-col rounded-2xl bg-[#0d0f18] border border-amber-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 bg-neutral-900/90 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-sm tracking-tight">{RESTAURANT_NAME}</h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono">Zero-dependency State Machine</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {state.cart.length > 0 && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs">
                <ShoppingBag className="w-3 h-3" />
                <span>{state.cart.length}</span>
              </span>
            )}
            <button
              onClick={onClose}
              aria-label="Close Chatbot"
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-white/5 overflow-x-auto text-xs scrollbar-none">
          <span className="text-[10px] font-mono uppercase text-neutral-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            Quick:
          </span>
          <button
            onClick={() => quickAction("menu")}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 text-[11px] font-mono whitespace-nowrap transition-colors min-h-[32px]"
          >
            menu
          </button>
          <button
            onClick={() => quickAction("appetizers")}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 text-[11px] font-mono whitespace-nowrap transition-colors min-h-[32px]"
          >
            appetizers
          </button>
          <button
            onClick={() => quickAction("mains")}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 text-[11px] font-mono whitespace-nowrap transition-colors min-h-[32px]"
          >
            mains
          </button>
          <button
            onClick={() => quickAction("checkout")}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-300 text-[11px] font-mono whitespace-nowrap transition-colors min-h-[32px]"
          >
            checkout
          </button>
        </div>

        {/* Message Log */}
        <div
          ref={logRef}
          aria-live="polite"
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.04),transparent_50%)]"
        >
          {state.messages.map((m, idx) => {
            const isUser = m.role === "user";
            return (
              <div
                key={idx}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed ${
                    isUser
                      ? "bg-amber-500 text-black font-medium rounded-tr-sm shadow-md"
                      : "bg-white/[0.07] border border-white/10 text-neutral-200 rounded-tl-sm shadow"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-3 bg-neutral-900/95 border-t border-white/10 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type 'menu', an item name, or number..."
            className="flex-1 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all font-sans"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center font-bold"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotModal;
