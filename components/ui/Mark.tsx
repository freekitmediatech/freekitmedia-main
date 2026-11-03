import { cn } from "@/lib/utils";

export function Mark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("rounded-md bg-brand px-2 box-decoration-clone", className)}>
      {children}
    </span>
  );
}
