"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import { contact, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Posts to `formEndpoint` from contact.json when one is set (Formspree,
 * Getform, Basin and friends all accept this shape). With no endpoint, it
 * falls back to opening the visitor's mail client with the message pre-filled,
 * so the form is never a dead end.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const endpoint = contact.formEndpoint.trim();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!endpoint) {
      const body = `${message}\n\n--\n${name}\n${email}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject || "Hello",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email me directly.",
      );
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-raised px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-accent/50 focus:outline-none";
  const labelClass =
    "mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-faint";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          What is this about?
        </label>
        <select id="subject" name="subject" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a subject
          </option>
          {contact.subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role, the team, and the problem you are solving."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot: bots fill this, humans never see it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <p aria-live="polite" className="text-sm">
          {status === "sent" ? (
            <span className="text-accent">
              {endpoint
                ? "Thanks, I will reply within one business day."
                : "Your email client should be open now."}
            </span>
          ) : null}
          {status === "error" ? <span className="text-red-400">{error}</span> : null}
        </p>
      </div>

      {!endpoint ? (
        <p className="text-xs leading-relaxed text-faint">{contact.formNote}</p>
      ) : null}
    </form>
  );
}
