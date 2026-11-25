"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  CircleCheck,
  AlertCircle,
  MessageCircle,
  CalendarCheck,
  Info,
} from "lucide-react";
import { zodResolver } from "@/lib/zod-resolver";
import { Confetti } from "@/components/ui/confetti";
import { bookingSchema, type BookingInput } from "@/lib/validation";
import { services } from "@/data/services";
import { plans } from "@/data/pricing";
import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const slots = [
  { value: "", label: "Any time (we'll confirm)" },
  { value: "Morning (8 AM – 12 PM)", label: "Morning (8 AM – 12 PM)" },
  { value: "Afternoon (12 PM – 4 PM)", label: "Afternoon (12 PM – 4 PM)" },
  { value: "Evening (4 PM – 8 PM)", label: "Evening (4 PM – 8 PM)" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-red-600">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

type Props = {
  preselectedService?: string | null;
  preselectedPlan?: string | null;
};

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

/** Booking form → validates, then opens a pre-filled WhatsApp pickup request. */
export function BookingForm({ preselectedService, preselectedPlan }: Props) {
  const [sentLink, setSentLink] = useState<string | null>(null);

  const initialService =
    services.find((s) => s.slug === preselectedService)?.name ?? "";
  const initialPlan = plans.find((p) => p.slug === preselectedPlan);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      service: initialService,
      pickupDate: todayISO(),
      slot: "",
      notes: "",
      website: "",
    },
  });

  const onValid = (data: BookingInput) => {
    // Honeypot — bots fill this in; silently drop them.
    if (data.website) return;

    const body = [
      `Hello ${site.name}, I'd like to book a pickup.`,
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pickup address: ${data.address}`,
      `Service: ${data.service}`,
      initialPlan ? `Plan: ${initialPlan.name} (${initialPlan.slug})` : null,
      `Pickup date: ${data.pickupDate}`,
      data.slot ? `Preferred time: ${data.slot}` : "Preferred time: Any time",
      data.notes ? `Notes: ${data.notes}` : null,
      "",
      "Please confirm the slot and the final quote.",
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
          Your pickup request is ready!
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
          We&apos;ve opened WhatsApp with your details pre-filled. Press send
          there and our team will confirm your pickup — usually within minutes,
          {site.hoursLabel.toLowerCase()}.
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
            Edit my request
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
      aria-labelledby="booking-form-title"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2
            id="booking-form-title"
            className="font-heading text-2xl font-extrabold tracking-tight text-ink"
          >
            Book a pickup
          </h2>
          <p className="mt-1 text-sm text-muted">
            Fill this in and we&apos;ll open WhatsApp with your request ready
            to send.
          </p>
        </div>
      </div>

      {initialPlan ? (
        <p className="mt-5 flex items-center gap-2 rounded-2xl border border-tang-200 bg-tang-50 px-4 py-3 text-sm font-semibold text-tang-800">
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          Booking the <strong>{initialPlan.name}</strong> plan.
        </p>
      ) : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-name"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="booking-name"
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
            htmlFor="booking-phone"
          >
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            autoComplete="tel"
            placeholder="0802 755 6093"
            className="input-base"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-address"
          >
            Pickup address <span className="text-red-600">*</span>
          </label>
          <input
            id="booking-address"
            type="text"
            autoComplete="street-address"
            placeholder="House number, street, area"
            className="input-base"
            aria-invalid={Boolean(errors.address)}
            {...register("address")}
          />
          <FieldError message={errors.address?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-service"
          >
            Service <span className="text-red-600">*</span>
          </label>
          <select
            id="booking-service"
            className="input-base"
            aria-invalid={Boolean(errors.service)}
            {...register("service")}
          >
            <option value="">Choose a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure — please advise">Not sure — please advise</option>
          </select>
          <FieldError message={errors.service?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-date"
          >
            Pickup date <span className="text-red-600">*</span>
          </label>
          <input
            id="booking-date"
            type="date"
            min={todayISO()}
            className="input-base"
            aria-invalid={Boolean(errors.pickupDate)}
            {...register("pickupDate")}
          />
          <FieldError message={errors.pickupDate?.message} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-slot"
          >
            Preferred time <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="booking-slot" className="input-base" {...register("slot")}>
            {slots.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            className="text-xs font-bold uppercase tracking-wider text-muted"
            htmlFor="booking-notes"
          >
            Notes <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="booking-notes"
            rows={4}
            placeholder="Stains to pre-treat, fragile items, gate codes…"
            className="input-base resize-y"
            {...register("notes")}
          />
        </div>

        {/* Honeypot — hidden from humans */}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="booking-website">Website</label>
          <input
            id="booking-website"
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
        className={cn(
          "mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A] disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Continue to WhatsApp
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        No payment online — your quote is confirmed on WhatsApp before we start.
      </p>
    </form>
  );
}
