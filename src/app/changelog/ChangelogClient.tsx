'use client';

import { useState } from 'react';
import { ChangelogEntry } from '@/lib/markdown';
import { ChangelogCard } from '@/components/changelog/ChangelogCard';
import { ChangelogFilter } from '@/components/changelog/ChangelogFilter';

interface ChangelogClientProps {
  changelogs: ChangelogEntry[];
}

export default function ChangelogClient({ changelogs }: ChangelogClientProps) {
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredChangelogs = selectedTag === 'all'
    ? changelogs
    : changelogs.filter(entry => entry.tag === selectedTag);

  return (
    <section className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-12">
          <p className="text-red-500 text-sm font-medium tracking-wide uppercase mb-4">
            Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Changelog
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Latest updates to Flarial Client, Launcher, and Website.
          </p>
        </header>

        {/* Filter */}
        <div className="mb-10">
          <ChangelogFilter
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
          />
        </div>

        {/* Content */}
        {filteredChangelogs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              No updates found for this filter.
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {filteredChangelogs.map((entry, index) => (
              <ChangelogCard
                key={entry.id}
                entry={entry}
                isFirst={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}