import { useState } from "react";
import { Lock, BookOpen, MapPin, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const PASSWORD = "Happy";

export function MyHub() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("myhub_unlocked") === "true",
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("myhub_unlocked", "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!unlocked) {
    return (
      <div className="flex w-full flex-col items-center justify-center px-5 py-32 text-center md:px-8 lg:px-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-neutral-900">
          Enter password to access My Hub
        </h1>
        <p className="mt-2 text-neutral-500">
          This area is private and password protected.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-xs flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-400"
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-500">Incorrect password. Try again.</p>
          )}
          <Button type="submit">Unlock</Button>
        </form>
      </div>
    );
  }

  const cards = [
    {
      to: "/my-hub/journal",
      label: "My Journal",
      description: "Thoughts, reflections, and daily notes.",
      icon: BookOpen,
    },
    {
      to: "/my-hub/travel",
      label: "Travel Plans",
      description: "Upcoming trips and travel ideas.",
      icon: MapPin,
    },
    {
      to: "/my-hub/goals",
      label: "My Goals",
      description: "Track personal and professional goals.",
      icon: Target,
    },
  ];

  return (
    <div className="w-full px-5 py-24 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        My Hub
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
        Welcome to your personal hub, Nitesh.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ to, label, description, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-neutral-900">
              {label}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
