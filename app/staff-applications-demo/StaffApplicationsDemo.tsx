"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

const steps = ["Basics", "Experience", "Scenarios", "Review"] as const;

const sections = [
  {
    title: "Basics",
    eyebrow: "Step 1",
    description: "Tell us who you are and when you can help.",
    fields: [
      { label: "Preferred name", placeholder: "What should staff call you?", type: "input" },
      { label: "Discord username", placeholder: "Example: zgqat", type: "input" },
      { label: "Timezone", placeholder: "Example: EST, GMT+1, IST", type: "input" },
      { label: "Age range", placeholder: "Example: 13–15, 16–18, 18+", type: "input" },
      { label: "Languages", placeholder: "English, Spanish, Hindi, etc.", type: "input" },
      { label: "Weekly availability", placeholder: "Example: 8–12 hours/week, mostly weekends", type: "textarea" },
    ],
  },
  {
    title: "Experience",
    eyebrow: "Step 2",
    description: "Show us what you already know about support, moderation, and Flarial.",
    fields: [
      {
        label: "Why do you want to become Flarial staff?",
        placeholder: "Be specific. What do you want to help improve?",
        type: "textarea",
      },
      {
        label: "Do you have moderation/support experience?",
        placeholder: "Mention Discord servers, Minecraft communities, ticket support, or any relevant work.",
        type: "textarea",
      },
      {
        label: "What Flarial topics can you already help with?",
        placeholder: "Examples: crashes, injection issues, Android beta, modules, configs, Discord support.",
        type: "textarea",
      },
      {
        label: "What makes you reliable?",
        placeholder: "Tell us about consistency, patience, communication, and how you handle pressure.",
        type: "textarea",
      },
    ],
  },
  {
    title: "Scenarios",
    eyebrow: "Step 3",
    description: "Answer real situations staff may run into.",
    fields: [
      {
        label: "A user says Flarial keeps crashing and is getting angry. What do you do?",
        placeholder: "Explain what you ask for first and how you keep the user calm.",
        type: "textarea",
      },
      {
        label: "Two users start arguing in a public channel. How do you handle it?",
        placeholder: "Explain how you de-escalate before punishments.",
        type: "textarea",
      },
      {
        label: "A friend asks you to skip the appeal/application process for them. What do you say?",
        placeholder: "We want to see fairness and boundaries.",
        type: "textarea",
      },
      {
        label: "Someone reports a serious bug but provides almost no info. What do you ask for?",
        placeholder: "Mention logs, version, steps to reproduce, device/platform, screenshots, etc.",
        type: "textarea",
      },
    ],
  },
];

const reviewItems = [
  "Your application is submitted to a private staff review queue.",
  "Staff can leave internal notes, request an interview, accept, or deny.",
  "You get the result through Discord once a decision is made.",
  "If denied, you may be given a cooldown before applying again.",
];

function FieldMock({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <label className="block rounded-[22px] border border-white/[0.07] bg-black/20 p-4 transition hover:border-[var(--color-accent)]/35 hover:bg-black/25">
      <span className="font-display text-[15px] font-semibold text-white">{label}</span>
      {type === "textarea" ? (
        <textarea
          className="mt-3 h-28 w-full resize-none rounded-[16px] border border-white/[0.07] bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-white/85 outline-none placeholder:text-white/30 focus:border-[var(--color-accent)]/60"
          placeholder={placeholder}
          readOnly
        />
      ) : (
        <input
          className="mt-3 h-12 w-full rounded-[16px] border border-white/[0.07] bg-white/[0.04] px-4 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-[var(--color-accent)]/60"
          placeholder={placeholder}
          readOnly
        />
      )}
    </label>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-5" style={{ boxShadow: "var(--shadow-rest)" }}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
        <Icon size={21} />
      </div>
      <div className="font-display text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-mute)]">{text}</p>
    </div>
  );
}

export default function StaffApplicationsDemo() {
  const [step, setStep] = useState(0);
  const activeSection = sections[step];
  const progress = useMemo(() => Math.round(((step + 1) / (sections.length + 1)) * 100), [step]);
  const isReview = step === sections.length;

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-64 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" aria-hidden />

      <header className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            <Sparkles size={13} />
            Flarial staff applications
          </div>
          <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:text-[72px]">
            Apply to help the Flarial community.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            This demo shows the actual application process a player would see: a clean multi-step form, Flarial-styled
            questions, review expectations, and a final submit screen. Discord login is skipped here for preview.
          </p>
        </div>

        <aside className="rounded-[30px] border border-[rgba(255,35,58,0.28)] bg-[linear-gradient(135deg,rgba(255,35,58,0.18),rgba(255,255,255,0.04)_48%,rgba(0,0,0,0.22))] p-5" style={{ boxShadow: "var(--shadow-rest)" }}>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-black/25 text-[var(--color-accent)]">
              <ShieldCheck size={23} />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-white">Application preview</div>
              <div className="text-sm text-[var(--color-text-mute)]">No login needed in this demo.</div>
            </div>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/30">
            <div className="h-full rounded-full bg-[var(--color-accent)] transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
        </aside>
      </header>

      <section className="relative mt-10 grid gap-4 md:grid-cols-4">
        <InfoCard icon={UserRound} title="Player-facing" text="The demo is only the applicant experience, not staff admin tools." />
        <InfoCard icon={FileText} title="Structured answers" text="Questions are grouped so staff can compare applications fairly." />
        <InfoCard icon={MessageCircle} title="Discord result" text="In production, results would be sent to the applicant on Discord." />
        <InfoCard icon={Clock3} title="Review queue" text="Applicants know what happens after they click submit." />
      </section>

      <main className="relative mt-10 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav className="h-fit rounded-[28px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-4" style={{ boxShadow: "var(--shadow-rest)" }}>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">Application steps</div>
          <div className="grid gap-2">
            {steps.map((label, index) => {
              const active = index === step;
              const done = index < step;
              return (
                <button
                  key={label}
                  onClick={() => setStep(index)}
                  className={`flex items-center gap-3 rounded-[18px] px-3 py-3 text-left transition ${active ? "bg-[var(--color-accent)] text-white" : "bg-white/[0.035] text-white/70 hover:bg-white/[0.07]"}`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${active ? "bg-white/18" : done ? "bg-emerald-400/18 text-emerald-200" : "bg-black/25"}`}>
                    {done ? <CheckCircle2 size={15} /> : index + 1}
                  </span>
                  <span className="font-display text-sm font-semibold">{label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <section className="rounded-[32px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-5 sm:p-7" style={{ boxShadow: "var(--shadow-rest)" }}>
          {!isReview ? (
            <>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">{activeSection.eyebrow}</div>
                  <h2 className="mt-1 font-display text-3xl font-semibold text-white">{activeSection.title}</h2>
                  <p className="mt-2 text-sm text-[var(--color-text-mute)]">{activeSection.description}</p>
                </div>
                <span className="w-fit rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-white/60">
                  {activeSection.fields.length} fields
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {activeSection.fields.map((field) => (
                  <FieldMock key={field.label} {...field} />
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">Final step</div>
              <h2 className="mt-1 font-display text-3xl font-semibold text-white">Review & submit</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-mute)]">
                Before submitting, applicants would see a clean summary of their answers and confirm everything is true.
                This avoids accidental low-effort submissions and makes expectations clear.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {reviewItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[20px] border border-white/[0.07] bg-black/20 p-4 text-sm text-white/82">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 p-5">
                <div className="flex items-start gap-3">
                  <UsersRound className="mt-1 shrink-0 text-[var(--color-accent)]" size={22} />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">Ready to submit?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      In the real version, this button would submit the application to the staff review queue. For this
                      demo it is intentionally disabled so nobody accidentally sends test data.
                    </p>
                  </div>
                </div>
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[var(--color-accent)] px-4 py-3 font-display text-sm font-semibold text-white opacity-90" disabled>
                  Submit staff application
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
            <button
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-[15px] bg-white/[0.06] px-4 py-3 font-display text-sm font-semibold text-white/80 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={16} />
              Back
            </button>
            <button
              onClick={() => setStep((current) => Math.min(sections.length, current + 1))}
              disabled={isReview}
              className="inline-flex items-center gap-2 rounded-[15px] bg-[var(--color-accent)] px-4 py-3 font-display text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
              style={{ boxShadow: isReview ? undefined : "var(--shadow-glow)" }}
            >
              Continue
              <ChevronRight size={16} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
