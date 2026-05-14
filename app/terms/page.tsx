import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of flarial.xyz and the Flarial client.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "May 14, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          Last updated · {UPDATED}
        </div>
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          Terms of Service.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          By using flarial.xyz or the Flarial client, you agree to these terms.
        </p>
      </header>

      <div className="space-y-10 text-[14.5px] leading-relaxed text-[var(--color-text)]">
        <Section title="Use of the Site">
          <p>
            You may use the Site for personal, non-commercial purposes. Do not
            attempt to disrupt the Site, scrape it at scale, or use it to
            distribute malware.
          </p>
        </Section>

        <Section title="The Flarial client">
          <p>
            The Flarial client is provided as-is. It modifies the behavior of
            Minecraft Bedrock Edition; you use it at your own risk. Server
            operators may forbid or detect client mods — respect their rules.
          </p>
          <p>
            Flarial is not affiliated with, endorsed by, or sponsored by Mojang
            Studios or Microsoft. &quot;Minecraft&quot; is a trademark of Mojang.
          </p>
        </Section>

        <Section title="User-generated content">
          <p>
            Scripts and modules contributed by community members are licensed
            individually by their authors. You are responsible for what you
            install and run.
          </p>
        </Section>

        <Section title="Disclaimer of warranties">
          <p>
            The Site and client are provided &quot;as is&quot; without warranty of any kind.
            We don&apos;t guarantee they will be uninterrupted, secure, or error-free.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Flarial is not liable for
            indirect, incidental, or consequential damages arising from your use
            of the Site or client.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update these terms. Continued use of the Site after changes
            constitutes acceptance. See the{" "}
            <Link
              href="/privacy"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for how we handle your data.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions? Reach us on{" "}
            <a
              href="https://discord.gg/flarial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              Discord
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[20px] sm:text-[22px] font-semibold text-white tracking-tight mb-3">
        {title}
      </h2>
      <div className="text-[var(--color-text-mute)] space-y-3">{children}</div>
    </section>
  );
}
