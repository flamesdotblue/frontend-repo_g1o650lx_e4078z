import { Rocket, Puzzle, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white grid place-items-center shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Extenso</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-zinc-900 dark:hover:text-white transition">How it works</a>
          <a href="#cta" className="hover:text-zinc-900 dark:hover:text-white transition inline-flex items-center gap-1">
            <Puzzle size={16} />
            Install
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-200"
          >
            <Github size={16} />
            Star
          </a>
          <a
            href="#cta"
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
          >
            Get the Extension
          </a>
        </div>
      </div>
    </header>
  );
}
