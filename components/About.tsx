import { ArrowRight, Layers3, Lightbulb, Waypoints } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  ["Technology", "Reliable foundations for useful digital products.", Layers3],
  ["Creativity", "Distinctive design that makes businesses memorable.", Lightbulb],
  ["Strategy", "Clear decisions tied back to real business goals.", Waypoints],
] as const;

export function About() {
  return <section id="about" className="section-pad relative overflow-hidden bg-white"><div className="grid-fade absolute inset-0 opacity-50"/><Container className="relative"><Reveal><div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="eyebrow">About Devnfix</p><h2 className="text-balance mt-4 max-w-4xl text-[clamp(2.5rem,5.6vw,5rem)] font-extrabold leading-[1.02] tracking-[-.055em] text-deep">We Combine <span className="gradient-text">Technology, Creativity and Strategy.</span></h2></div><div><p className="text-base leading-8 text-muted sm:text-lg">Devnfix is a digital solutions company helping businesses establish, improve and grow their online presence through connected design, development, content and software.</p><div className="mt-7"><Button href="#contact" variant="secondary">Talk to Our Team <ArrowRight className="ml-2" size={16}/></Button></div></div></div></Reveal><div className="mt-16 grid gap-4 md:grid-cols-3">{pillars.map(([title, text, Icon], index) => <Reveal key={title} delay={index * .06}><article className="group h-full rounded-[28px] border border-line bg-white/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_55px_rgba(6,27,59,.08)]"><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-cloud text-brand group-hover:bg-brand group-hover:text-white"><Icon size={21}/></span><span className="text-xs font-extrabold tracking-[.18em] text-brand/35">0{index + 1}</span></div><h3 className="mt-10 text-2xl font-extrabold text-deep">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article></Reveal>)}</div></Container></section>;
}
