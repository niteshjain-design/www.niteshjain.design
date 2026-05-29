import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Right — Portfolio CTA + Avatar */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Portfolio
          </Link>

          {/* Avatar Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
            >
              NJ
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/my-hub");
                  }}
                  className="flex w-full px-4 py-2.5 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  My Hub
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
