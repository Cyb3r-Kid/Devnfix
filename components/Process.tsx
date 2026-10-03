import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Discover", "Understand the business, customers and goals."],
  ["Strategy", "Plan the solution, direction and technical approach."],
  ["Design", "Create interfaces and visual experiences."],
  ["Build", "Develop, optimize and test the solution."],
  ["Launch", "Deploy carefully and verify every detail."],
  ["Grow", "Support improvements, content and digital growth."],
] as const;

export function Process() {
  return (
    <section id="process" className="section-pad overflow-hidden bg-deep text-white">
      <Container>
        <Reveal><SectionHeading eyebrow="How we work" title="A Clear Route From Idea to Impact" text="A practical process keeps decisions focused, progress visible and every deliverable connected to the goal." align="center" tone="dark"/></Reveal>
        <div className="relative mt-16">
          <div className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand via-teal to-brand lg:block"/>
          <div className="grid gap-3 lg:grid-cols-6">
            {steps.map(([title, text], index) => <Reveal key={title} delay={index * .05}><article className="group relative h-full rounded-[22px] border border-white/10 bg-white/[.045] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-teal/35 hover:bg-white/[.07]"><div className="relative z-10 flex items-center justify-between"><span className={`grid size-16 place-items-center rounded-2xl text-sm font-extrabold ${index === 5 ? "bg-teal text-deep" : "border border-white/15 bg-deep text-white"}`}>{String(index + 1).padStart(2, "0")}</span>{index < steps.length - 1 && <ArrowRight size={15} className="hidden text-white/25 lg:block"/>}</div><h3 className="mt-8 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p></article></Reveal>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
