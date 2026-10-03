import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const styles = {
    primary: "bg-gradient-to-r from-brand to-bright text-white shadow-[0_12px_30px_rgba(22,119,232,.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(22,119,232,.3)]",
    secondary: "border border-line bg-white text-deep hover:-translate-y-0.5 hover:border-brand/40 hover:bg-cloud",
    light: "bg-white text-deep hover:-translate-y-0.5 hover:bg-skywash",
  };
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-300 ${styles[variant]} ${className}`}>{children}</Link>;
}
