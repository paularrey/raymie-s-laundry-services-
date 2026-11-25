"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CircleCheck, AlertCircle, MessageCircle } from "lucide-react";
import { zodResolver } from "@/lib/zod-resolver";
import { Confetti } from "@/components/ui/confetti";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { site, whatsappHref } from "@/lib/site";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-red-600">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

/** Contact form → validates, then opens a pre-filled WhatsApp thread. */
export function ContactForm() {
  const [sentLink, setSentLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onValid = (data: ContactInput) => {
    // Honeypot — bots fill this in; silently drop them.
    if (data.website) return;

    const body = [
      `Hello ${site.name}, I have a question.`,
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Subject: ${data.subject}`,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const link = whatsappHref(body);
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  if (sentLink) {
    return (
      <div
        role="status"
        className="relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-lime-200 bg-lime-50 px-6 py-16 text-center"
      >
        <Confetti />
        <CircleCheck className="h-12 w-12 text-lime-700" aria-hidden="true" />
        <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-ink">
          WhatsApp is open — thank you!
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
          Your message has been pre-filled in WhatsApp. Press send there and
          our team will reply — usually within minutes, {site.hoursLabel}.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={sentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-ink transition hover:bg-[#1FBE5A]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={() => setSentLink(null)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-lime-200 px-7 py-3 text-sm font-bold text-ink transition hover:border-lime-500 hover:text-lime-700"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      noValidate
      className="rounded-[2rem] border border-warm-200 bg-white p-6 shadow-card sm:p-8"
      aria-labelledby="contact-form-title"
    >
      <h2
        id="contact-form-title"
        className="font-heading text-2xl font-extrabold tracking-tight text-ink"
      >
        Send us a message
      </h2>
      <p className="mt-1.5 text-sm text-muted">
        Fill in the form — we&apos;ll open WhatsApp with your message ready to
        send.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="contact-name"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className="input-base"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="contact-phone"
          >
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="0802 755 6093"
            className="input-base"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="contact-email"
          >
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="input-base"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="contact-subject"
          >
            Subject <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="e.g. Question about the Family Bundle"
            className="input-base"
            aria-invalid={Boolean(errors.subject)}
            {...register("subject")}
          />
          <FieldError message={errors.subject?.message} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="contact-message"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="How can we help?"
            className="input-base resize-y"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        {/* Honeypot — hidden from humans */}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-tang-400 to-lemon-300 px-8 py-4 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:shadow-card-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Continue to WhatsApp
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Nothing is sent to a server — your message opens in WhatsApp. See our{" "}
        <a href="/privacy" className="font-semibold text-lime-700 underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
