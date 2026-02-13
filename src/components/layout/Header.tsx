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
      <div className="grid w-full grid-cols-3 items-center px-5 py-4 md:px-8 lg:px-12">
        {/* Left — Logo */}
        <Link to="/" className="text-lg font-bold tracking-tight text-neutral-900">
          Nitesh Jain
        </Link>

        {/* Center — Nav */}
        <nav className="flex items-center justify-center gap-1">
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

        {/* Right — Portfolio CTA */}
        <div className="flex justify-end">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}
