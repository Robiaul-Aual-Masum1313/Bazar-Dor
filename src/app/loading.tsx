
export default function Loading() {
  const productGroups = [1, 2, 3, 4, 5, 6];

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="skeleton h-12 w-12 shrink-0 rounded-xl" />
          <div className="space-y-2">
            <div className="skeleton h-6 w-28" />
            <div className="skeleton h-3 w-44 max-w-full" />
          </div>
        </div>
        <div className="skeleton h-10 w-24 rounded-lg" />
      </header>

      {/* Hero section */}
      <section className="mb-10 grid gap-6 overflow-hidden rounded-2xl border border-base-300 p-5 sm:p-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="skeleton h-5 w-32 rounded-full" />
          <div className="skeleton h-9 w-full max-w-md" />
          <div className="skeleton h-9 w-4/5 max-w-sm" />
          <div className="space-y-2">
            <div className="skeleton h-4 w-full max-w-md" />
            <div className="skeleton h-4 w-5/6 max-w-sm" />
          </div>
          <div className="skeleton h-12 w-36 rounded-xl" />
        </div>

        <div className="skeleton min-h-52 w-full rounded-xl md:min-h-64" />
      </section>

      {/* Price increase / decrease */}
      <section className="mb-10 space-y-4">
        <div className="skeleton h-7 w-44" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.slice(0, 3).map((item) => (
            <div
              key={`up-${item}`}
              className="flex items-center gap-4 rounded-xl border border-base-300 p-4"
            >
              <div className="skeleton h-12 w-12 shrink-0 rounded-xl" />
              <div className="min-w-0 flex-1 space-y-2">
                <div className="skeleton h-4 w-2/3" />
                <div className="skeleton h-5 w-1/2" />
              </div>
              <div className="skeleton h-5 w-12 shrink-0" />
            </div>
          ))}
        </div>

        <div className="skeleton h-7 w-44" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.slice(0, 3).map((item) => (
            <div
              key={`down-${item}`}
              className="flex items-center gap-4 rounded-xl border border-base-300 p-4"
            >
              <div className="skeleton h-12 w-12 shrink-0 rounded-xl" />
              <div className="min-w-0 flex-1 space-y-2">
                <div className="skeleton h-4 w-2/3" />
                <div className="skeleton h-5 w-1/2" />
              </div>
              <div className="skeleton h-5 w-12 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* All products */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="skeleton h-7 w-36" />
          <div className="skeleton h-4 w-full max-w-md" />
        </div>

        {/* Category tabs */}
        <div className="flex gap-3 overflow-hidden">
          {productGroups.map((item) => (
            <div
              key={`tab-${item}`}
              className="skeleton h-10 w-24 shrink-0 rounded-full"
            />
          ))}
        </div>

        {/* Product category sections */}
        {productGroups.map((group) => (
          <div key={group} className="space-y-4">
            <div className="skeleton h-6 w-32" />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {productGroups.slice(0, 5).map((item) => (
                <article
                  key={`${group}-${item}`}
                  className="rounded-xl border border-base-300 p-3 sm:p-4"
                >
                  <div className="skeleton mb-4 aspect-square w-full rounded-lg" />
                  <div className="skeleton mb-2 h-4 w-4/5" />
                  <div className="skeleton mb-3 h-3 w-1/2" />
                  <div className="skeleton mb-2 h-6 w-2/3" />
                  <div className="skeleton h-3 w-1/3" />
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
