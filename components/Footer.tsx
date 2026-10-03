import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig, whatsappUrl } from "@/config/site";

const company = [["About", "#about"], ["Process", "#process"], ["Work", "#work"], ["Contact", "#contact"]] as const;
const serviceLinks = [["Web Development", "#services"], ["Social Media", "#services"], ["Brand Identity", "#services"], ["Video & AI Content", "#services"], ["Digital Marketing", "#services"]] as const;

export function Footer() {
  const connect = [["Instagram", siteConfig.socialLinks.instagram], ["LinkedIn", siteConfig.socialLinks.linkedin], ["Email", siteConfig.email ? `mailto:${siteConfig.email}` : ""], ["WhatsApp", whatsappUrl]].filter((item): item is string[] => Boolean(item[1]));
  return <footer className="relative overflow-hidden bg-deep pt-16 text-white"><div className="grid-fade absolute inset-0 opacity-15"/><Container className="relative"><div className="grid gap-12 pb-14 lg:grid-cols-[1.5fr_.7fr_1fr_.7fr]"><div><Logo light/><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Digital solutions built for businesses ready to look sharper, work smarter and grow with confidence.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-teal">Start a conversation <ArrowUpRight size={16}/></a></div><FooterCol title="Company" links={company}/><FooterCol title="Services" links={serviceLinks}/><div><FooterCol title="Connect" links={connect}/><div className="mt-8"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-white/35">Product</p><a href="#products" className="mt-3 inline-flex text-sm text-white/60 hover:text-teal">Qless</a></div></div></div><div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Devnfix. All rights reserved.</p><p>Built by Devnfix</p><div className="flex gap-5"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div></div></Container></footer>;
}

function FooterCol({ title, links }: { title: string; links: readonly (readonly string[])[] }) { return <div><h3 className="text-xs font-extrabold uppercase tracking-[.16em] text-white/35">{title}</h3><ul className="mt-5 space-y-3.5">{links.map(([label, href]) => <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-white/60 transition hover:text-teal">{label}</a></li>)}</ul></div>; }
