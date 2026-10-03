import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Discover", "We understand your business, audience and objectives."],
  ["Plan", "We define the strategy, scope and digital experience."],
  ["Design", "We create a modern interface aligned with your brand."],
  ["Build", "We develop, optimize and test the solution."],
  ["Launch", "We deploy the project and ensure everything works smoothly."],
  ["Grow", "We continue improving your digital presence as your business grows."],
] as const;

export function Process() {
  return <section id="process" className="section-pad bg-white"><Container><Reveal><SectionHeading eyebrow="Our process" title="From Idea to Launch" text="A practical, transparent path from the first conversation to continuous improvement." align="center" /></Reveal><div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3"><div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent lg:block" />{steps.map(([title, text], i) => <Reveal key={title} delay={(i % 3) * .07}><article className="relative h-full rounded-[24px] border border-line bg-white p-6 transition hover:border-brand/30 hover:shadow-[0_20px_45px_rgba(3,31,75,.07)]"><span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-deep text-sm font-extrabold text-white">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-6 text-xl font-extrabold text-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article></Reveal>)}</div></Container></section>;
}
