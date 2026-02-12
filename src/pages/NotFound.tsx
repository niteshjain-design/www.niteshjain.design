import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-32 text-center md:px-8 lg:px-12">
      <p className="text-6xl font-bold text-neutral-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-neutral-900">
        Page not found
      </h1>
      <p className="mt-2 text-neutral-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
