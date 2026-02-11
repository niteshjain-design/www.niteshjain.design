export function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        About
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
        A brief look at who I am, what I do, and what drives my work.
      </p>

      <div className="mt-16 space-y-12">
        {/* Background */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Background</h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            I'm a multi-disciplinary designer and technologist with a passion for
            creating digital products that are both beautiful and functional. My
            work sits at the intersection of design, engineering, and strategy —
            bringing clarity to complex problems through thoughtful execution.
          </p>
        </section>

        {/* Approach */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Approach</h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            I believe great products come from deep understanding — of users,
            systems, and constraints. I start with research, move through
            iterative design, and build with clean, maintainable code. Every
            decision is intentional, every detail matters.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "UI/UX Design",
              "Design Systems",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Figma",
              "Prototyping",
              "Frontend Architecture",
              "User Research",
              "Accessibility",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Values</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-neutral-600">
            <li>Simplicity over complexity</li>
            <li>Accessibility as a foundation, not an afterthought</li>
            <li>Continuous learning and craft improvement</li>
            <li>Collaboration across disciplines</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
