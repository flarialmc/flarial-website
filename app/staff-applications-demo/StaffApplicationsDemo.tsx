"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  UsersRound,
  XCircle,
} from "lucide-react";

const applicationQuestions = [
  {
    section: "Identity",
    questions: [
      "What name should staff call you?",
      "What timezone are you in?",
      "How old are you? Use an age range if you do not want exact age shown to reviewers.",
      "Which languages can you moderate/support in confidently?",
    ],
  },
  {
    section: "Experience",
    questions: [
      "Have you moderated or supported any Minecraft/Discord communities before? Tell us where and what you handled.",
      "What Flarial features or common support issues are you already familiar with?",
      "How many hours per week can you realistically help?",
    ],
  },
  {
    section: "Scenario questions",
    questions: [
      "A user is angry because Flarial crashes after injecting. What do you ask first, and how do you keep the conversation calm?",
      "Two users start arguing in a public support channel. What do you do before warning or muting anyone?",
      "Someone reports a suspected bypass/cheat issue but refuses to provide proof. How do you handle it?",
      "A friend asks you to skip the normal appeal process. What do you say?",
    ],
  },
  {
    section: "Motivation",
    questions: [
      "Why do you want to join Flarial staff specifically?",
      "What is one thing you think Flarial support/moderation could do better?",
      "Is there anything reviewers should know before deciding?",
    ],
  },
];

const sampleApps = [
  {
    name: "PixelNate",
    tag: "pixelnate",
    role: "Support Trial",
    status: "Under review",
    score: 84,
    submitted: "18 min ago",
    timezone: "EST",
    availability: "10 hrs/week",
    strengths: ["Good crash triage answers", "Knows Android beta", "Calm tone"],
    concerns: ["No prior moderation history"],
  },
  {
    name: "LunaBridge",
    tag: "lunabridge",
    role: "Moderator",
    status: "Interview",
    score: 92,
    submitted: "2 hrs ago",
    timezone: "GMT+1",
    availability: "16 hrs/week",
    strengths: ["Strong conflict scenario", "Prior 20k server experience", "Bilingual"],
    concerns: ["Needs policy onboarding"],
  },
  {
    name: "CraftedAsh",
    tag: "craftedash",
    role: "Support Trial",
    status: "Pending",
    score: 61,
    submitted: "Yesterday",
    timezone: "PST",
    availability: "4 hrs/week",
    strengths: ["Active community member"],
    concerns: ["Short answers", "Availability low"],
  },
];

const statusStyles: Record<string, string> = {
  Pending: "border-white/10 bg-white/5 text-white/80",
  "Under review": "border-sky-400/25 bg-sky-400/10 text-sky-200",
  Interview: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  Accepted: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Denied: "border-red-300/25 bg-red-300/10 text-red-100",
};

function FieldPreview({ label, value, tall = false }: { label: string; value: string; tall?: boolean }) {
  return (
    <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-mute)]">{label}</div>
      <div className={`${tall ? "min-h-20" : ""} mt-2 text-sm leading-relaxed text-white/90`}>{value}</div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, detail }: { icon: typeof ShieldCheck; label: string; value: string; detail: string }) {
  return (
    <div className="rounded-[24px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-5" style={{ boxShadow: "var(--shadow-rest)" }}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
        <Icon size={21} />
      </div>
      <div className="font-display text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 font-display text-base font-semibold text-white/90">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-mute)]">{detail}</p>
    </div>
  );
}

export default function StaffApplicationsDemo() {
  const [selected, setSelected] = useState(sampleApps[0]);
  const [view, setView] = useState<"apply" | "review">("apply");

  const totalQuestions = useMemo(
    () => applicationQuestions.reduce((total, section) => total + section.questions.length, 0),
    [],
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-nav)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            <Sparkles size={13} />
            Concept demo
          </div>
          <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:text-[72px]">
            Staff applications, but not cursed.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            A full example flow for Flarial staff applications: Discord-auth identity, structured questions, reviewer
            scoring, private staff notes, status changes, and Discord result DMs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setView("apply")}
              className={`rounded-[14px] px-4 py-3 font-display text-sm font-semibold transition ${view === "apply" ? "bg-[var(--color-accent)] text-white" : "bg-white/5 text-white/75 hover:bg-white/10"}`}
            >
              Applicant flow
            </button>
            <button
              onClick={() => setView("review")}
              className={`rounded-[14px] px-4 py-3 font-display text-sm font-semibold transition ${view === "review" ? "bg-[var(--color-accent)] text-white" : "bg-white/5 text-white/75 hover:bg-white/10"}`}
            >
              Staff dashboard
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-[rgba(255,35,58,0.24)] bg-[linear-gradient(135deg,rgba(255,35,58,0.18),rgba(255,255,255,0.04))] p-5" style={{ boxShadow: "var(--shadow-rest)" }}>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-black/25 text-[var(--color-accent)]">
              <LockKeyhole size={23} />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-white">Discord login required</div>
              <div className="text-sm text-[var(--color-text-mute)]">Stable user ID, not typed usernames.</div>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-white/85">
            {[
              "Applicants authenticate once with Discord before submitting.",
              "Results are sent by bot DM and visible if they return to the site.",
              "Staff reviewers get internal notes, scoring, history, and audit logs.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        <MetricCard icon={ClipboardList} value={`${totalQuestions}`} label="example questions" detail="Grouped so answers are easier to compare." />
        <MetricCard icon={UsersRound} value="4" label="review states" detail="Pending, review, interview, accepted/denied." />
        <MetricCard icon={MessageSquareText} value="DM" label="result delivery" detail="Bot sends outcome to the verified Discord user." />
        <MetricCard icon={CalendarClock} value="30d" label="cooldown example" detail="Denied applicants can reapply later." />
      </section>

      {view === "apply" ? (
        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <aside className="rounded-[28px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-5" style={{ boxShadow: "var(--shadow-rest)" }}>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <UserRoundCheck size={22} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-white">Applicant preview</h2>
                <p className="text-sm text-[var(--color-text-mute)]">What applicants would see before submitting.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <FieldPreview label="Discord identity" value="Goat#verified • ID: 773982259266846752" />
              <FieldPreview label="Applying for" value="Support Trial / Moderator" />
              <FieldPreview label="Availability" value="Weekdays after school + weekends, around 8–12 hrs/week" />
              <FieldPreview
                label="Example answer"
                tall
                value="If someone says the client crashes, I would first ask for version, device/platform, whether Minecraft launches cleanly without Flarial, and a crash log or screenshot. I’d avoid blaming them and keep the instructions short."
              />
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[var(--color-accent)] px-4 py-3 font-display text-sm font-semibold text-white" style={{ boxShadow: "var(--shadow-glow)" }}>
              Submit application
              <ArrowRight size={16} />
            </button>
          </aside>

          <div className="grid gap-4">
            {applicationQuestions.map((section, sectionIndex) => (
              <article key={section.section} className="rounded-[26px] border border-white/[0.07] bg-white/[0.035] p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Section {sectionIndex + 1}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{section.section}</h3>
                  </div>
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs text-white/70">{section.questions.length} questions</span>
                </div>
                <ol className="grid gap-3">
                  {section.questions.map((question, index) => (
                    <li key={question} className="flex gap-3 rounded-[18px] bg-black/18 p-4 text-sm leading-relaxed text-white/86">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)]/18 text-xs font-semibold text-[var(--color-accent)]">
                        {index + 1}
                      </span>
                      {question}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-10 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="grid gap-3">
            {sampleApps.map((app) => (
              <button
                key={app.tag}
                onClick={() => setSelected(app)}
                className={`rounded-[22px] border p-4 text-left transition ${selected.tag === app.tag ? "border-[var(--color-accent)] bg-[var(--color-accent)]/12" : "border-white/[0.07] bg-white/[0.035] hover:bg-white/[0.06]"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-semibold text-white">{app.name}</div>
                    <div className="text-xs text-[var(--color-text-mute)]">@{app.tag} • {app.submitted}</div>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] ${statusStyles[app.status]}`}>{app.status}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                  <Star size={15} className="text-amber-200" />
                  Reviewer score: {app.score}/100
                </div>
              </button>
            ))}
          </aside>

          <article className="rounded-[30px] border border-white/[0.07] bg-[var(--color-bg-nav)] p-5 sm:p-7" style={{ boxShadow: "var(--shadow-rest)" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Review dossier</div>
                <h2 className="mt-1 font-display text-3xl font-semibold text-white">{selected.name}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-mute)]">@{selected.tag} • {selected.role} • {selected.timezone}</p>
              </div>
              <span className={`w-fit rounded-full border px-3 py-1.5 text-xs ${statusStyles[selected.status]}`}>{selected.status}</span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <FieldPreview label="Availability" value={selected.availability} />
              <FieldPreview label="Score" value={`${selected.score}/100`} />
              <FieldPreview label="Submitted" value={selected.submitted} />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-[22px] border border-emerald-300/15 bg-emerald-300/5 p-5">
                <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-emerald-100">
                  <BadgeCheck size={19} /> Strengths
                </div>
                <ul className="grid gap-2 text-sm text-white/82">
                  {selected.strengths.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div className="rounded-[22px] border border-amber-300/15 bg-amber-300/5 p-5">
                <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-amber-100">
                  <Clock3 size={19} /> Reviewer notes
                </div>
                <ul className="grid gap-2 text-sm text-white/82">
                  {selected.concerns.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-[22px] border border-white/[0.07] bg-black/20 p-5">
              <div className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
                <FileText size={19} /> Staff-only decision panel
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-white/8 px-3 py-3 text-sm font-semibold text-white hover:bg-white/12">
                  <MessageSquareText size={16} /> Comment
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-amber-300/15 px-3 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-300/20">
                  <CalendarClock size={16} /> Interview
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-emerald-300/15 px-3 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-300/20">
                  <CheckCircle2 size={16} /> Accept
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-red-300/15 px-3 py-3 text-sm font-semibold text-red-100 hover:bg-red-300/20">
                  <XCircle size={16} /> Deny
                </button>
              </div>
            </div>
          </article>
        </section>
      )}
    </div>
  );
}
