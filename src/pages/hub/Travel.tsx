import { MapPin, Calendar, Clock, Sun } from "lucide-react";

export function Travel() {
  return (
    <div className="w-full px-5 py-24 md:px-8 lg:px-12">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">
          <MapPin className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Travel Plans
        </h1>
      </div>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
        Upcoming trips and travel ideas.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg">
          {/* Banner — top 25% (aspect 4:1) */}
          <div
            className="relative aspect-[4/1] w-full overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 140% at 80% 20%, #fde68a 0%, #fb923c 25%, #0ea5e9 55%, #1e3a8a 100%)",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute right-3 top-3 rounded-full bg-emerald-50/95 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
              Upcoming
            </span>
          </div>

          <div className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Sun className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-xl font-semibold tracking-tight text-neutral-900">
              Summer Vacation
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-500">
              West Yellowstone National Park
            </p>

            <dl className="mt-6 space-y-3 border-t border-neutral-100 pt-5">
              <div className="flex items-center gap-2.5 text-sm text-neutral-600">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <dt className="sr-only">Dates</dt>
                <dd>Aug 8 – 15, 2026</dd>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-600">
                <Clock className="h-4 w-4 text-neutral-400" />
                <dt className="sr-only">Duration</dt>
                <dd>7 nights · 8 days</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
}
