interface ChangelogFilterProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

const tags = [
  { value: 'all', label: 'All' },
  { value: 'Client', label: 'Client' },
  { value: 'Launcher', label: 'Launcher' },
  { value: 'Website', label: 'Website' },
];

export function ChangelogFilter({ selectedTag, onTagChange }: ChangelogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.value}
          onClick={() => onTagChange(tag.value)}
          className={`
            px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
            ${selectedTag === tag.value
              ? 'bg-white text-black'
              : 'text-gray-400 hover:text-white hover:bg-gray-900'
            }
          `}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}