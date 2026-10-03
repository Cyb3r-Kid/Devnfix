import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const styles = {
    primary: "bg-deep text-white shadow-[0_12px_30px_rgba(3,31,75,.18)] hover:-translate-y-0.5 hover:bg-navy",
    secondary: "border border-line bg-white text-deep hover:-translate-y-0.5 hover:border-brand/40 hover:bg-cloud",
    light: "bg-white text-deep hover:-translate-y-0.5 hover:bg-skywash",
  };
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`}>{children}</Link>;
}
