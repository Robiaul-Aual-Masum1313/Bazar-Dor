import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-6 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <section className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
          Error 404
        </div>

        {/* 404 */}
        <h1 className="select-none text-[clamp(7rem,25vw,14rem)] font-black leading-[0.75] tracking-[-0.08em]">
          <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
            4
          </span>
          <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            0
          </span>
          <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
            4
          </span>
        </h1>

        {/* Message */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Lost in the void?
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or
            somehow escaped into another dimension.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
          >
            Back to home
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Tiny footer */}
        <p className="mt-12 text-xs text-zinc-600">
          There&apos;s nothing here... yet.
        </p>
      </section>
    </main>
  );
}
