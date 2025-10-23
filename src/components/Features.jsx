import { Shield, Zap, Puzzle, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: 'MV3 Ready',
    desc: 'Built around the latest Chrome Manifest V3 guidelines and patterns.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Secure by default',
    desc: 'Follow best practices for permissions, storage, and content scripts.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Lightning fast',
    desc: 'Lean, optimized UI powered by React and Tailwind CSS.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Polished design',
    desc: 'A modern, elegant aesthetic that looks great out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-900/20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">The perfect starting point to design, describe, and promote your Chrome extension.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
