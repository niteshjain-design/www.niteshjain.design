import { cn } from "@/lib/cn";

const companies = [
  { name: "Parle Agro", style: "font-black tracking-tight" },
  { name: "Accenture", style: "font-semibold tracking-wide" },
  { name: "TIBCO", style: "font-black tracking-[0.2em] uppercase" },
  { name: "Sumo Logic", style: "font-bold tracking-tight" },
  { name: "RingCentral", style: "font-bold tracking-tight" },
  { name: "Zerowall", style: "font-black tracking-tight lowercase" },
  { name: "Zoom", style: "font-black tracking-tight" },
  { name: "AirMDR", style: "font-black tracking-wide uppercase" },
];

function LogoSet() {
  return (
    <>
      {companies.map(({ name, style }) => (
        <div
          key={name}
          className="flex shrink-0 items-center px-8 md:px-12"
        >
          <span
            className={cn(
              "select-none whitespace-nowrap text-2xl text-neutral-900 md:text-3xl",
              style,
            )}
          >
            {name}
          </span>
        </div>
      ))}
    </>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex animate-marquee">
        <div className="flex shrink-0">
          <LogoSet />
        </div>
        <div className="flex shrink-0">
          <LogoSet />
        </div>
      </div>
    </div>
  );
}
