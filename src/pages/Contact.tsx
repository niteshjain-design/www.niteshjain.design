import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
        Have a project in mind, want to collaborate, or just want to say hello?
        I'd love to hear from you.
      </p>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              Send me an email
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Best way to reach me for inquiries and collaborations.
            </p>
            <a href="mailto:hello@niteshjain.design" className="mt-4 inline-block">
              <Button>
                hello@niteshjain.design
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
