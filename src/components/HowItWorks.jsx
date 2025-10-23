import { Download, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download & unzip',
    desc: 'Grab the starter and extract it to a folder on your computer.'
  },
  {
    icon: Settings,
    title: 'Customize manifest',
    desc: 'Edit name, permissions, and icons to fit your extension.'
  },
  {
    icon: Rocket,
    title: 'Load in Chrome',
    desc: 'Open chrome://extensions, enable Developer mode, and Load unpacked.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Get up and running in minutes</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              Whether you’re building a simple toolbar button or a full-featured product, this starter gives you a clean, professional landing to launch from.
            </p>
            <ul className="mt-8 space-y-5">
              {steps.map((s, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center shrink-0">
                    <s.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <h4 className="font-semibold text-zinc-900 dark:text-white">Quick tip</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Keep permissions minimal. Only request what you need, and consider using optional permissions for extra safety.
              </p>
              <div className="mt-6 rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4 text-xs text-zinc-700 dark:text-zinc-200 overflow-auto">
                <pre><code>{`// Load your unpacked extension
1. Navigate to chrome://extensions
2. Toggle Developer mode (top right)
3. Click "Load unpacked"
4. Select your extension folder`}</code></pre>
              </div>
            </div>
            <div className="absolute -z-[0] inset-0 blur-3xl opacity-60 pointer-events-none" aria-hidden>
              <div className="h-56 w-56 bg-purple-400/20 rounded-full absolute -top-4 -left-6" />
              <div className="h-56 w-56 bg-blue-400/20 rounded-full absolute bottom-0 -right-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
