import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 py-24">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="text-2xl font-semibold text-primary">Project not found</h1>
      <p className="text-base text-muted-foreground leading-7">
        This project doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>
    </div>
  );
}
