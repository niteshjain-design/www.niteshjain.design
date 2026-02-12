import {
  Sparkles,
  Heart,
  Lightbulb,
  Users,
  Eye,
  Pencil,
  Code,
  Figma,
  Layers,
  Search,
  Accessibility,
  LayoutGrid,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

const skills = [
  { label: "UI/UX Design", icon: <Pencil className="h-3.5 w-3.5" /> },
  { label: "Design Systems", icon: <LayoutGrid className="h-3.5 w-3.5" /> },
  { label: "React", icon: <Code className="h-3.5 w-3.5" /> },
  { label: "TypeScript", icon: <Code className="h-3.5 w-3.5" /> },
  { label: "Tailwind CSS", icon: <Layers className="h-3.5 w-3.5" /> },
  { label: "Figma", icon: <Figma className="h-3.5 w-3.5" /> },
  { label: "Prototyping", icon: <MonitorSmartphone className="h-3.5 w-3.5" /> },
  { label: "Frontend Architecture", icon: <Layers className="h-3.5 w-3.5" /> },
  { label: "User Research", icon: <Search className="h-3.5 w-3.5" /> },
  { label: "Accessibility", icon: <Accessibility className="h-3.5 w-3.5" /> },
];

const values = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Simplicity",
    description: "Strip away the unnecessary. The best solutions feel obvious in hindsight.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Accessibility",
    description: "A foundation, not an afterthought. Design for everyone from day one.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Craft",
    description: "Continuous learning, relentless attention to detail, and pride in the work.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Collaboration",
    description: "The best products emerge at the intersection of diverse perspectives.",
  },
];

const approach = [
  { step: "01", title: "Research", description: "Understand users, systems, and constraints deeply before designing." },
  { step: "02", title: "Design", description: "Iterate through concepts, wireframes, and high-fidelity prototypes." },
  { step: "03", title: "Build", description: "Write clean, maintainable code that brings designs to life faithfully." },
  { step: "04", title: "Refine", description: "Test, gather feedback, and polish until every detail feels right." },
];

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-24 pb-20 md:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-neutral-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-56 w-56 rounded-full bg-neutral-100/40 blur-3xl" />

        <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Designing at the intersection of{" "}
          <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">
            beauty & function
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
          I'm a multi-disciplinary designer and technologist with a passion for
          creating digital products that feel effortless. My work sits at the
          intersection of design, engineering, and strategy — bringing clarity to
          complex problems through thoughtful execution.
        </p>
      </section>

      {/* Experience — animated logo marquee */}
      <section className="border-t border-neutral-100 py-16">
        <p className="px-5 text-center text-sm font-medium tracking-widest text-neutral-400 uppercase md:px-8 lg:px-12">
          Experience
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
          Companies I've worked with
        </h2>
        <div className="mt-12">
          <LogoMarquee />
        </div>
      </section>

      {/* Approach — numbered steps */}
      <section className="border-t border-neutral-100 px-5 py-24 md:px-8 lg:px-12">
        <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Process</p>
        <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">How I work</h2>
        <p className="mt-3 max-w-xl text-neutral-500">
          Every decision is intentional, every detail matters. Here's the rhythm behind my process.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map(({ step, title, description }) => (
            <div key={step} className="flex flex-col gap-3 bg-white p-8">
              <span className="text-3xl font-bold text-neutral-200">{step}</span>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-neutral-100 bg-neutral-50/60 px-5 py-24 md:px-8 lg:px-12">
        <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Expertise</p>
        <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">Skills & tools</h2>
        <p className="mt-3 max-w-xl text-neutral-500">
          The craft I practice and the tools I reach for every day.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map(({ label, icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-neutral-400">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-neutral-100 px-5 py-24 md:px-8 lg:px-12">
        <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Principles</p>
        <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">What I believe in</h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                {icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-100 bg-neutral-50/60 px-5 py-24 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white">
            <Heart className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Let's build something great
          </h2>
          <p className="mt-3 max-w-md text-neutral-500">
            Interested in working together or just want to say hello? I'd love to connect.
          </p>
          <Link to="/contact" className="mt-8">
            <Button>
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
