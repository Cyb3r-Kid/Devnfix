import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  ["01", "Business-First Approach", "We start with the business problem before choosing the technology."],
  ["02", "Complete Digital Team", "Development, design, content and digital strategy under one roof."],
  ["03", "Built to Scale", "Solutions designed to evolve as your business grows."],
  ["04", "Long-Term Partnership", "We focus on ongoing value rather than simply delivering a project and disappearing."],
] as const;
const flow = ["Business goal", "Strategy", "Design", "Build", "Launch", "Grow"];

export function WhyDevnfix() {
  return <section className="section-pad overflow-hidden bg-cloud"><Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]"><div><Reveal><SectionHeading eyebrow="Why Devnfix" title="More Than a Service Provider." text="We combine design, development, content and technology so businesses don't need to coordinate multiple teams." /></Reveal><div className="mt-10 grid gap-7 sm:grid-cols-2">{advantages.map(([n, title, text], i) => <Reveal key={n} delay={(i % 2) * .08}><div className="border-l-2 border-teal pl-5"><span className="text-xs font-extrabold tracking-[.15em] text-brand">{n}</span><h3 className="mt-2 font-extrabold text-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div></Reveal>)}</div></div><Reveal><div className="relative mx-auto max-w-[440px] rounded-[32px] bg-deep p-6 shadow-[0_28px_70px_rgba(3,31,75,.18)] sm:p-8"><div className="absolute -right-20 -top-20 size-48 rounded-full bg-teal/20 blur-3xl" /><p className="relative mb-7 text-xs font-bold uppercase tracking-[.2em] text-white/55">How we create momentum</p><div className="relative space-y-2">{flow.map((item, i) => <div key={item} className="relative flex items-center gap-4"><span className={`grid size-10 shrink-0 place-items-center rounded-full text-xs font-extrabold ${i === flow.length - 1 ? "bg-teal text-deep" : "border border-white/15 bg-white/5 text-white"}`}>{String(i + 1).padStart(2, "0")}</span><div className={`flex min-h-14 flex-1 items-center rounded-2xl border px-5 text-sm font-bold uppercase tracking-[.13em] ${i === flow.length - 1 ? "border-teal/40 bg-teal/10 text-teal" : "border-white/10 bg-white/[.04] text-white"}`}>{item}</div>{i < flow.length - 1 && <span className="absolute left-[19px] top-12 h-6 w-px bg-gradient-to-b from-brand to-teal" />}</div>)}</div></div></Reveal></Container></section>;
}
