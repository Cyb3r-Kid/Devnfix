import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig, whatsappUrl } from "@/config/site";

const company = [["About", "#about"], ["Process", "#process"], ["Contact", "#contact"]];
const serviceLinks = [["Web Development", "#services"], ["Social Media", "#services"], ["Branding", "#services"], ["Video Content", "#services"], ["Digital Marketing", "#services"]];
export function Footer() {
  const connect = [["Instagram", siteConfig.socialLinks.instagram], ["LinkedIn", siteConfig.socialLinks.linkedin], ["Email", siteConfig.email ? `mailto:${siteConfig.email}` : ""], ["WhatsApp", whatsappUrl]];
  return <footer className="border-t border-line bg-white pt-16"><Container><div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_.75fr_1fr_.65fr_.8fr]"><div><Logo/><p className="mt-5 max-w-xs text-sm leading-6 text-muted">Digital solutions built for businesses ready to grow.</p></div><FooterCol title="Company" links={company}/><FooterCol title="Services" links={serviceLinks}/><FooterCol title="Products" links={[["Qless", "#products"]]}/><FooterCol title="Connect" links={connect.filter((x): x is string[] => Boolean(x[1]))}/></div><div className="flex flex-col gap-4 border-t border-line py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Devnfix. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy" className="hover:text-brand">Privacy Policy</Link><Link href="/terms" className="hover:text-brand">Terms</Link></div></div></Container></footer>;
}
function FooterCol({ title, links }: { title: string; links: readonly (readonly string[])[] }) { return <div><h3 className="text-sm font-extrabold text-deep">{title}</h3><ul className="mt-4 space-y-3">{links.map(([label, href]) => <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-muted transition hover:text-brand">{label}</a></li>)}</ul></div>; }
