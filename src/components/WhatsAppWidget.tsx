"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Send, X } from "lucide-react";

import { WhatsappMark } from "@/components/ui/Icon";
import { contact, profile } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Floating WhatsApp launcher. Opens a small panel with one-tap replies and a
 * free-text box, then hands off to wa.me with the message pre-filled.
 *
 * Everything it renders comes from `contact.whatsapp`; set `enabled: false`
 * there and the widget disappears.
 */
export default function WhatsAppWidget() {
  const { whatsapp } = contact;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Escape closes, and so does a click anywhere outside the panel.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    inputRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  if (!whatsapp.enabled) return null;

  const send = (text: string) => {
    const body = text.trim();
    if (!body) return;
    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  };

  return (
    <div ref={panelRef} className="no-print fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Panel */}
      {open ? (
        <div
          id="whatsapp-panel"
          role="dialog"
          aria-label="Chat on WhatsApp"
          className="w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/60"
        >
          <div className="flex items-center gap-3 bg-[#075E54] p-4">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10">
              <Image
                src={profile.avatar}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-white">
                {whatsapp.displayName}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                {whatsapp.responseTime}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-4 p-4">
            <p className="max-w-[90%] rounded-2xl rounded-tl-sm bg-raised px-3.5 py-2.5 text-sm leading-relaxed text-muted">
              {whatsapp.greeting}
            </p>

            {whatsapp.quickReplies.length > 0 ? (
              <div className="flex flex-col items-end gap-2">
                {whatsapp.quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => send(reply)}
                    className="rounded-2xl rounded-br-sm border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-2 text-left text-sm text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            ) : null}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(message);
              }}
              className="flex items-center gap-2 border-t border-line-soft pt-3"
            >
              <label htmlFor="whatsapp-message" className="sr-only">
                Message
              </label>
              <input
                ref={inputRef}
                id="whatsapp-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={whatsapp.placeholder}
                className="min-w-0 flex-1 rounded-full border border-line bg-raised px-4 py-2.5 text-sm text-fg placeholder:text-faint focus:border-[#25D366]/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Open WhatsApp with this message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-4 pl-4 pr-5 font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-105"
      >
        {!open ? (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"
          />
        ) : null}
        <WhatsappMark className="relative h-6 w-6" />
        <span className="relative text-sm">{whatsapp.buttonLabel}</span>
      </button>
    </div>
  );
}
