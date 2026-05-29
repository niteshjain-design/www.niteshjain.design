import { MapPin } from "lucide-react";

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

      <div className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center text-neutral-400">
        Travel plans coming soon
      </div>
    </div>
  );
}
