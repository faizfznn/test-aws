export default function Home() {
  const features = [
    {
      title: "Fast to Launch",
      description:
        "Ship new pages and updates in minutes with a clean workflow and reusable UI blocks.",
    },
    {
      title: "Built to Scale",
      description:
        "Grow from your first users to thousands with performance-first architecture.",
    },
    {
      title: "Easy to Customize",
      description:
        "Adjust content, branding, and layout without touching complex infrastructure.",
    },
  ];

  const stats = [
    { label: "Active Teams", value: "10K+" },
    { label: "Avg. Speed Gain", value: "38%" },
    { label: "Customer Satisfaction", value: "99.9%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <header className="flex items-center justify-between">
          <p className="text-lg font-bold tracking-tight">NovaFlow</p>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
            <a href="#features" className="transition hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-foreground">
              Pricing
            </a>
            <a href="#about" className="transition hover:text-foreground">
              About
            </a>
          </nav>
          <a
            href="#"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Get Started
          </a>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
              Launch smarter
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build a beautiful product website that converts.
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              NovaFlow helps teams create high-performing landing pages with
              clear messaging, modern design, and seamless user journeys.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-foreground px-6 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                Weekly Performance Snapshot
              </p>
              <div className="space-y-3">
                <div className="rounded-2xl bg-background p-4 dark:bg-black">
                  <p className="text-xs text-zinc-500">Conversion Rate</p>
                  <p className="text-2xl font-bold">+24.8%</p>
                </div>
                <div className="rounded-2xl bg-background p-4 dark:bg-black">
                  <p className="text-xs text-zinc-500">Engagement</p>
                  <p className="text-2xl font-bold">4m 12s</p>
                </div>
                <div className="rounded-2xl bg-background p-4 dark:bg-black">
                  <p className="text-xs text-zinc-500">Bounce Rate</p>
                  <p className="text-2xl font-bold">-18.2%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-900">
          {stats.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-2xl font-bold sm:text-3xl">{item.value}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <section id="features" className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-300">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need in one place.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800"
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-300">
                Pricing
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Simple pricing that grows with your team.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                Start free and upgrade only when you need advanced analytics,
                team seats, and priority support.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Pro Plan
              </p>
              <p className="mt-2 text-4xl font-bold">
                $29<span className="text-base font-medium">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Unlimited pages and projects</li>
                <li>Advanced performance insights</li>
                <li>Priority email support</li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build your next winning landing page?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
            Join teams already improving conversions with a cleaner workflow and
            better design system.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Get Started Today
          </a>
        </section>

        <footer className="border-t border-zinc-200 py-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          <p>© 2026 NovaFlow. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
