import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="cta" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Ready to ship your extension?</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                    Use this polished landing to share your value, guide users, and collect installs. Customize colors, copy, and imagery in minutes.
                  </p>
                </div>
                <div className="flex gap-3 md:justify-end">
                  <a href="#" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-500">
                    Add to Chrome
                  </a>
                  <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
