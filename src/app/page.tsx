const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Vitest",
  "Playwright",
  "Docker",
  "GitHub Actions",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
            Project Foundation
          </p>
          <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl">QAFlow</h1>
          <p className="mt-5 text-2xl font-medium text-sky-200">
            Modern QA Test Management Platform
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A professional SaaS foundation for managing requirements, test suites, test cases,
            execution results, bugs, evidence, reports, and team quality workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Tech stack">
          {technologies.map((technology) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100"
              key={technology}
            >
              {technology}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
