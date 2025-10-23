import { Sparkles, Chrome, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/40 dark:via-zinc-900 dark:to-zinc-900" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 bg-white/60 dark:bg-zinc-900/60">
              <Sparkles size={16} />
              Build Chrome extensions faster
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Launch your Chrome extension with a beautiful starter
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              A polished template to showcase your extension, collect installs, and explain how it works. Fully responsive and ready to customize.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-500">
                <Chrome size={18} />
                Add to Chrome
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                <ShieldCheck size={18} />
                See how it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
              <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-px">
                  <div className="rounded-[11px] bg-white dark:bg-zinc-950 p-6">
                    <pre className="text-sm text-zinc-800 dark:text-zinc-100 overflow-auto"><code>{`// manifest.json
{
  "manifest_version": 3,
  "name": "My Awesome Extension",
  "version": "1.0.0",
  "action": { "default_popup": "index.html" },
  "permissions": ["storage", "activeTab"],
  "icons": { "128": "icon.png" }
}`}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-[0] inset-0 blur-3xl opacity-60 pointer-events-none" aria-hidden>
              <div className="h-64 w-64 bg-indigo-400/30 rounded-full absolute -top-6 -right-10" />
              <div className="h-64 w-64 bg-pink-400/20 rounded-full absolute bottom-0 -left-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
