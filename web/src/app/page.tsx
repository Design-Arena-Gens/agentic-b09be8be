import IconShowcase from "@/components/icon-showcase";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#06081f] to-[#000] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_40%)]" />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-24">
        <header className="flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400/80">
            App Icon Concept
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Neon Cargo Treasury
          </h1>
          <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">
            Cyber-futuristic icon exploration featuring a dark glass shipping
            container with corrugated structure, neon numerics, and floating
            gold coins suspended in emerald energy.
          </p>
        </header>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <IconShowcase />
          <aside className="space-y-8 self-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(6,182,212,0.08)] backdrop-blur-xl">
            <div>
              <h2 className="text-xl font-medium text-emerald-300">
                Design Pillars
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                  Dark glass shipping container with layered corrugated panels.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  Glowing neon green numerics embedded within the chamber.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
                  Floating gold coins reflecting against dramatic edge lighting.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.85)]" />
                  High contrast, isometric composition for 3D depth.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-emerald-300">
                Usage Notes
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Optimized for dark UI shells. Works as an 8K render reference,
                adaptable to UI/UX splash screens and iconography. Toggle glass
                opacity or neon intensity to align with brand systems.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
