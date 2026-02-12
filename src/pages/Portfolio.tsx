import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PASSWORD = "HappyDay";

export function Portfolio() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("portfolio_unlocked") === "true",
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("portfolio_unlocked", "true");
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
          This portfolio is password protected
        </h1>
        <p className="mt-2 text-neutral-500">
          Enter the password to view my work.
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

  return (
    <div className="w-full px-5 py-24 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Portfolio
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
        A selection of projects and work I've been involved in.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center text-neutral-400">
          Projects coming soon
        </div>
      </div>
    </div>
  );
}
