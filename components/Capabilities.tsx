import { Braces, Cloud, Component, Cpu, LayoutTemplate, ServerCog, Sparkles, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  ["Next.js", "Modern web foundations", LayoutTemplate],
  ["React", "Interactive interfaces", Component],
  ["TypeScript", "Reliable application code", Braces],
  ["Node.js", "Server-side solutions", ServerCog],
  ["Cloud delivery", "Deployment-ready builds", Cloud],
  ["UI/UX systems", "Consistent product design", Workflow],
  ["Automation", "Smarter digital workflows", Cpu],
  ["AI tools", "Human-led creative support", Sparkles],
] as const;

export function Capabilities() {
  return <section className="border-y border-line bg-cloud py-16 sm:py-20"><Container><Reveal><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">Capabilities</p><h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-[-.04em] text-deep sm:text-4xl">Modern tools. Clear purpose.</h2><p className="mt-4 text-sm leading-7 text-muted">We use relevant technology to build maintainable digital experiences—not complexity for its own sake.</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{capabilities.map(([name, text, Icon]) => <div key={name} className="rounded-2xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-brand/25"><Icon size={18} className="text-brand"/><h3 className="mt-4 text-sm font-extrabold text-deep">{name}</h3><p className="mt-1 text-[11px] leading-4 text-muted">{text}</p></div>)}</div></div></Reveal></Container></section>;
}
