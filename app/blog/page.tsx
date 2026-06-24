import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarDays, MessageCircle, Search } from "lucide-react";
import { BLOG_POSTS } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Flarial guides, Minecraft Bedrock client tips, install troubleshooting, settings guides, and update explainers.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <section className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="max-w-3xl">
          <div className="mb-4 font-mono text-[14px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[16px]">
            Flarial blog
          </div>
          <h1 className="font-display text-[52px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[88px]">
            Guides, updates, and useful Bedrock notes.
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            A clean chronological feed for official Flarial posts: setup help, release notes,
            troubleshooting, module spotlights, and technical writeups from the team.
          </p>
        </div>

        <aside className="rounded-[28px] border border-[rgba(255,35,58,0.16)] p-5" style={{ background: "rgba(255,35,58,0.055)", boxShadow: "var(--shadow-rest)" }}>
          <div className="font-mono text-[12px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Browse by topic
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Announcements", "Guides", "Troubleshooting", "Modules", "Android", "Windows"].map((topic) => (
              <span key={topic} className="rounded-[var(--radius-md)] bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-mute)]">
                {topic}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[28px] border border-white/[0.06]" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] p-5 sm:p-6">
            <div>
              <div className="font-mono text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[14px]">
                Latest posts
              </div>
              <p className="mt-1 text-[13px] text-[var(--color-text-mute)]">Newest official Flarial articles, newest first.</p>
            </div>
            <CalendarDays className="hidden text-[var(--color-accent)] sm:block" size={22} />
          </div>

          {BLOG_POSTS.length > 0 ? (
            <div className="divide-y divide-white/[0.06]">
              {BLOG_POSTS.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-5 transition-colors hover:bg-white/[0.025] sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-mute)]">
                    <span className="text-[var(--color-accent)]">{post.date}</span>
                    <span>{post.readTime}</span>
                    <span>Flarial team</span>
                  </div>
                  <h2 className="mt-3 font-display text-[28px] font-semibold leading-tight tracking-tight text-white group-hover:text-[var(--color-accent)] sm:text-[34px]">{post.title}</h2>
                  <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-[var(--color-text-mute)]">{post.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => <span key={tag} className="rounded-[var(--radius-md)] bg-black/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-mute)]">{tag}</span>)}
                    <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-white group-hover:text-[var(--color-accent)]">Read <ArrowRight size={13} /></span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              <div className="font-mono text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[14px]">
                Coming soon
              </div>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-white sm:text-[42px]">
                No posts yet.
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-text-mute)] sm:text-[15px]">
                The Flarial team will add official guides, release notes, and articles here when they&apos;re ready.
              </p>
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <BlogSideCard icon={<Search size={18} />} title="Search-ready structure" body="Posts can be listed by date with clear titles, excerpts, tags, and canonical links." />
          <BlogSideCard icon={<MessageCircle size={18} />} title="Discussion friendly" body="Each post layout leaves room for Discord discussion links, comments, or issue references later." />
          <BlogSideCard icon={<BookOpenText size={18} />} title="Archive ready" body="When the team adds more posts, this page can grow into monthly archives without changing the design." />
        </aside>
      </section>
    </div>
  );
}

function BlogSideCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-[24px] border border-white/[0.06] p-5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="flex items-center gap-2 text-[var(--color-accent)]">
        {icon}
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em]">{title}</span>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{body}</p>
    </div>
  );
}
