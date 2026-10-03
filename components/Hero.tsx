"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Code2, Layers3, Megaphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const cards = [
  { label: "Website", note: "High-performance", icon: Code2, pos: "left-1 top-28 sm:left-0 sm:top-32" },
  { label: "Branding", note: "Clear identity", icon: Sparkles, pos: "right-1 top-12 sm:right-3 sm:top-10" },
  { label: "Social", note: "Stay consistent", icon: Megaphone, pos: "left-5 bottom-16 sm:left-10 sm:bottom-14" },
  { label: "SaaS", note: "Work smarter", icon: Layers3, pos: "right-0 bottom-24 sm:right-2 sm:bottom-28" },
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-[76px]">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="absolute -left-32 top-28 size-80 rounded-full bg-skywash blur-3xl" />
      <Container className="relative grid min-h-[800px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-cloud px-4 py-2 text-xs font-extrabold tracking-[.14em] text-brand"><span className="size-1.5 rounded-full bg-teal" /> DIGITAL SOLUTIONS BUILT FOR GROWTH</div>
          <h1 className="text-balance text-[clamp(2.8rem,6vw,4.65rem)] font-extrabold leading-[1.03] tracking-[-.055em] text-deep">We Build Digital Experiences That <span className="gradient-text">Move Businesses Forward.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">From high-performance websites and digital branding to social media and SaaS solutions, Devnfix helps businesses build a stronger digital presence and scale with confidence.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#contact">Get a Free Consultation <ArrowRight className="ml-2" size={17} /></Button><Button href="#services" variant="secondary">Explore Our Services</Button></div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.19em] text-muted">Web <span className="mx-2 text-teal">•</span> Design <span className="mx-2 text-teal">•</span> Marketing <span className="mx-2 text-teal">•</span> SaaS</p>
        </motion.div>
        <div className="relative mx-auto h-[480px] w-full max-w-[520px]" aria-label="Connected digital growth services illustration">
          <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/15 to-teal/20 blur-2xl" />
          <motion.div initial={reduce ? false : { opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .65 }} className="shine-border card-shadow absolute left-1/2 top-1/2 z-10 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-deep p-6 text-white sm:w-[270px]">
            <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.18em] text-white/55">Digital growth</span><span className="grid size-9 place-items-center rounded-full bg-teal/20"><BarChart3 size={18} className="text-teal" /></span></div>
            <div className="mt-10 flex h-28 items-end gap-2" aria-hidden="true">{[35, 48, 43, 68, 62, 88].map((h, i) => <motion.span key={h} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: .5 + i * .08, duration: .5 }} className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-teal" />)}</div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-sm font-bold">Built to scale</span><ArrowRight className="-rotate-45 text-teal" size={19} /></div>
          </motion.div>
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-brand/20" viewBox="0 0 520 480"><path d="M100 155 L260 240 L424 92 M110 392 L260 240 L435 345" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" /></svg>
          {cards.map((card, i) => { const Icon = card.icon; return <motion.div key={card.label} initial={reduce ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: reduce ? 0 : [0, -6, 0] }} transition={{ opacity: { delay: .45 + i * .08 }, y: { duration: 4 + i * .3, repeat: Infinity, ease: "easeInOut" } }} className={`card-shadow absolute z-20 flex w-[148px] items-center gap-3 rounded-2xl border border-line bg-white p-3.5 ${card.pos}`}><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-skywash text-brand"><Icon size={17} /></span><span><strong className="block text-xs text-deep">{card.label}</strong><small className="text-[10px] text-muted">{card.note}</small></span></motion.div>; })}
        </div>
      </Container>
    </section>
  );
}
