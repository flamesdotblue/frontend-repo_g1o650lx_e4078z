import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
          Built with <Heart size={14} className="text-rose-500" /> for Chrome extension makers
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-200"
        >
          <Coffee size={16} />
          Buy me a coffee
        </a>
      </div>
    </footer>
  );
}
