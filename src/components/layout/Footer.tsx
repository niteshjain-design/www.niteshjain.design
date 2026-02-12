import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "mailto:hello@niteshjain.design", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/in/jain17/", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row md:px-8 lg:px-12">
        <p className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Nitesh Jain. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-900"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
