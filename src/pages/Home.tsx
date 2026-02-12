import { ArrowRight, Palette, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const cards = [
  {
    title: "Design Systems",
    description:
      "Building scalable, consistent design systems that bridge the gap between design and engineering.",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    title: "Frontend Engineering",
    description:
      "Crafting performant, accessible interfaces with modern frameworks and best practices.",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Product Thinking",
    description:
      "Approaching problems holistically — from user research to pixel-perfect implementation.",
    icon: <Layers className="h-5 w-5" />,
  },
];

export function Home() {
  return (
    <div className="w-full px-5 md:px-8 lg:px-12">
      {/* Hero */}
      <section className="py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Design &amp; Technology
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
          Hi, I'm Nitesh Jain — a designer and technologist focused on building
          thoughtful digital experiences that are functional, beautiful, and
          human-centered.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/contact">
            <Button>
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">About me</Button>
          </Link>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
