import FaqAccordion from '@/components/sections/FaqAccordion'

export const metadata = {
  title: 'FAQ - Flarial Client | Frequently Asked Questions',
  description: 'Get answers to frequently asked questions about Flarial Client, the best utility client for Minecraft Windows 10 & 11 Edition. Download guides, troubleshooting, and more.',
  keywords: ['flarial faq', 'minecraft client questions', 'flarial help', 'minecraft utility client support'],
  openGraph: {
    title: 'FAQ - Flarial Client | Frequently Asked Questions',
    description: 'Get answers to frequently asked questions about Flarial Client, the best utility client for Minecraft Windows 10 & 11 Edition.',
    url: 'https://flarial.xyz/faq',
  },
  alternates: {
    canonical: 'https://flarial.xyz/faq',
  },
}

export default function FaqPage() {
  return (
    <section className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-16">
          <p className="text-red-500 text-sm font-medium tracking-wide uppercase mb-4">
            Support
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Everything you need to know about Flarial Client. Can&apos;t find what you&apos;re looking for? Reach out to our community.
          </p>
        </header>

        {/* FAQ List */}
        <div className="mb-20">
          <FaqAccordion />
        </div>

        {/* Help CTA */}
        <div className="border-t border-gray-800/50 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-white font-medium mb-1">Still have questions?</h3>
              <p className="text-gray-500 text-sm">
                Join our Discord for direct support from the community.
              </p>
            </div>
            <a
              href="https://flarial.xyz/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-gray-800 hover:border-gray-700 rounded-lg text-white text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}