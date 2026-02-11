import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, icon, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
    </div>
  );
}
