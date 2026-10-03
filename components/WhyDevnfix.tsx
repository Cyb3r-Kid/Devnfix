import { Blocks, MessagesSquare, PanelsTopLeft, Scale, Sparkles, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  ["Business-first", "We start with the business challenge, not a fashionable tool.", Scale],
  ["Modern technology", "Reliable foundations selected for performance and maintainability.", Blocks],
  ["Creative clarity", "Design that feels distinctive without sacrificing usability.", Sparkles],
  ["Clear communication", "Direct, useful conversations throughout the project.", MessagesSquare],
  ["Scalable thinking", "Systems designed to evolve as your digital needs grow.", Workflow],
  ["End-to-end delivery", "Strategy, design, content and development connected in one team.", PanelsTopLeft],
] as const;

export function WhyDevnfix() {
  return <section className="section-pad relative overflow-hidden bg-white"><div className="pointer-events-none absolute -left-44 top-24 size-96 rounded-full bg-skywash blur-3xl"/><Container className="relative grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start"><Reveal><div className="lg:sticky lg:top-32"><SectionHeading eyebrow="Why Devnfix" title="Good Digital Work Starts With Better Thinking." text="We bring the commercial, creative and technical decisions into one focused process."/><div className="mt-8 rounded-[24px] border border-brand/10 bg-gradient-to-br from-cloud to-skywash p-6"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">The Devnfix difference</p><p className="mt-3 text-lg font-extrabold leading-7 text-deep">A connected team that sees the whole digital experience—not isolated deliverables.</p></div></div></Reveal><div className="grid gap-4 sm:grid-cols-2">{reasons.map(([title, text, Icon], index) => <Reveal key={title} delay={(index % 2) * .06}><article className="group h-full rounded-[26px] border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_50px_rgba(6,27,59,.07)]"><span className="grid size-11 place-items-center rounded-2xl bg-cloud text-brand transition group-hover:bg-brand group-hover:text-white"><Icon size={20}/></span><h3 className="mt-7 text-lg font-extrabold text-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article></Reveal>)}</div></Container></section>;
}
