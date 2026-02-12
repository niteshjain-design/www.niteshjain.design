import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <Link to="/" className="text-lg font-bold tracking-tight text-neutral-900">
          niteshjain<span className="text-neutral-400">.design</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === to
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
