"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Search, Download, Newspaper, HelpCircle, MessagesSquare } from "lucide-react";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (href: string) => {
    onOpenChange(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px] flex items-start justify-center px-4 py-[12vh]"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.985 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl rounded-[var(--radius-lg)] overflow-hidden"
            style={{
              background: "var(--color-bg-inset)",
              boxShadow: "var(--shadow-hover)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Command label="Command palette" loop>
              <div
                className="flex items-center gap-3 px-4 h-12 border-b border-white/5"
                style={{ background: "var(--color-bg-nav)" }}
              >
                <Search size={14} className="text-[var(--color-accent)]" />
                <Command.Input
                  placeholder="Type a command, module name, or page"
                  className="flex-1 bg-transparent outline-none text-[13.5px] text-white placeholder:text-[var(--color-text-dim)]"
                />
                <kbd className="font-mono text-[10px] tracking-widest text-[var(--color-text-mute)]">ESC</kbd>
              </div>
              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-[12px] text-[var(--color-text-dim)] font-mono">
                  No matches.
                </Command.Empty>
                <Command.Group heading="Pages">
                  <Item icon={Download} label="Download" onSelect={() => go("/download")} />
                  <Item icon={Newspaper} label="Changelog" onSelect={() => go("/changelog")} />
                  <Item icon={HelpCircle} label="FAQ" onSelect={() => go("/faq")} />
                </Command.Group>
                <Command.Group heading="External">
                  <Item icon={MessagesSquare} label="Open Discord" onSelect={() => go("https://discord.gg/flarial")} />
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Item({
  icon: Icon,
  label,
  onSelect,
}: {
  icon: typeof Search;
  label: string;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[13px] text-white/90 cursor-pointer data-[selected=true]:bg-[var(--color-accent-dk)] data-[selected=true]:text-white"
    >
      <Icon size={14} className="text-[var(--color-text-mute)]" />
      <span>{label}</span>
    </Command.Item>
  );
}
