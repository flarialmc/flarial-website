import { format } from 'date-fns';
import { ChangelogEntry } from '@/lib/markdown';

interface ChangelogCardProps {
  entry: ChangelogEntry;
  isFirst?: boolean;
}

const tagColors: Record<string, string> = {
  Client: 'bg-red-500',
  Launcher: 'bg-blue-500',
  Website: 'bg-emerald-500',
  Both: 'bg-purple-500',
};

const tagTextColors: Record<string, string> = {
  Client: 'text-red-500',
  Launcher: 'text-blue-500',
  Website: 'text-emerald-500',
  Both: 'text-purple-500',
};

export function ChangelogCard({ entry, isFirst }: ChangelogCardProps) {
  const formattedDate = format(new Date(entry.date), 'MMM d, yyyy');
  const borderColor = tagColors[entry.tag] || 'bg-gray-500';
  const textColor = tagTextColors[entry.tag] || 'text-gray-500';

  return (
    <article className={`relative pl-6 pb-12 border-l border-gray-800/50 ${!isFirst ? '' : ''}`}>
      {/* Timeline dot */}
      <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${borderColor}`} />

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <time className="text-sm text-gray-500 tabular-nums">
          {formattedDate}
        </time>
        <span className="text-gray-700">·</span>
        <span className={`text-sm font-medium ${textColor}`}>
          {entry.tag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-medium text-white mb-4">
        {entry.title}
      </h2>

      {/* Content */}
      <div
        className="changelog-content text-sm text-gray-400 leading-relaxed
          [&>h1]:hidden [&>h2]:hidden
          [&>h3]:text-gray-300 [&>h3]:font-medium [&>h3]:text-sm [&>h3]:mt-4 [&>h3]:mb-2
          [&>p]:my-2 [&>p]:leading-relaxed
          [&_ul]:my-2 [&_ul]:list-disc [&_ul]:space-y-1.5
          [&>ul]:ml-4
          [&_ul_ul]:ml-5 [&_ul_ul]:mt-1.5 [&_ul_ul]:list-[circle] [&_ul_ul]:text-gray-500
          [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:space-y-1.5
          [&>ol]:ml-4
          [&_ol_ol]:ml-5 [&_ol_ol]:mt-1.5
          [&_li]:leading-relaxed
          [&>blockquote]:border-l-2 [&>blockquote]:border-gray-700 [&>blockquote]:pl-4 [&>blockquote]:my-3 [&>blockquote]:italic [&>blockquote]:text-gray-500
          [&_a]:text-red-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-300
          [&_strong]:text-gray-300 [&_strong]:font-medium
          [&_code]:text-red-400 [&_code]:bg-gray-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs"
        dangerouslySetInnerHTML={{ __html: entry.htmlContent }}
      />
    </article>
  );
}