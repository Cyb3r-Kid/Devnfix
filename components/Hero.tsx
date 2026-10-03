"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import { ArrowRight, Bot, Code2, Megaphone, Palette, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const floaters = [
  { label: "Web Development", icon: Code2, className: "-left-2 top-20 sm:-left-8 sm:top-24" },
  { label: "Brand Identity", icon: Palette, className: "right-0 top-2 sm:-right-6 sm:top-8" },
  { label: "Social Growth", icon: Megaphone, className: "-left-1 bottom-10 sm:-left-10 sm:bottom-14" },
  { label: "AI Content", icon: Bot, className: "right-0 bottom-20 sm:-right-5 sm:bottom-16" },
] as const;

const subscribe = () => () => {};

export function Hero() {
  const prefersReduced = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const reduce = hydrated && Boolean(prefersReduced);
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-80"/>
      <div className="pointer-events-none absolute -left-32 top-12 size-[430px] rounded-full bg-[#dff2ff] opacity-80 blur-3xl"/>
      <div className="pointer-events-none absolute -right-28 top-48 size-[390px] rounded-full bg-teal/10 blur-3xl"/>
      <Container className="relative grid min-h-[830px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:py-20">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-brand/15 bg-white/85 px-4 py-2 text-[11px] font-extrabold tracking-[.18em] text-brand shadow-sm backdrop-blur"><span className="size-1.5 rounded-full bg-teal"/> DIGITAL <span className="text-brand/35">•</span> CREATIVE <span className="text-brand/35">•</span> TECHNOLOGY</div>
          <h1 className="text-balance max-w-3xl text-[clamp(2.75rem,6.2vw,5.25rem)] font-extrabold leading-[.98] tracking-[-.06em] text-deep">Building Digital Experiences That <span className="gradient-text">Move Businesses Forward.</span></h1>
          <p className="mt-7 max-w-[640px] text-base leading-8 text-muted sm:text-lg">Devnfix brings strategy, design, development and content together to help growing businesses look credible, work smarter and compete confidently online.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#contact">Start Your Project <ArrowRight className="ml-2" size={17}/></Button><Button href="#work" variant="secondary">Explore Our Work <Play className="ml-2" size={15} fill="currentColor"/></Button></div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-xs font-bold uppercase tracking-[.14em] text-muted"><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-teal"/>Business-first thinking</span><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-brand"/>One connected team</span><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-bright"/>Built to scale</span></div>
        </motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, scale: .95, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .75, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto h-[510px] w-full max-w-[560px] sm:h-[570px]">
          <div className="absolute inset-x-10 top-16 h-96 rounded-full bg-brand/15 blur-3xl"/>
          <div className="blue-glow absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-white/80 bg-white">
            <div className="flex h-10 items-center justify-between border-b border-line bg-[#f8fbff] px-4"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-[#ff7f73]"/><i className="size-2 rounded-full bg-[#ffc85c]"/><i className="size-2 rounded-full bg-[#4ed6a8]"/></div><div className="flex h-5 w-2/5 items-center justify-center rounded-full border border-line bg-white text-[7px] font-bold text-muted">devnfix.com</div><span className="size-4"/></div>
            <div className="grid min-h-[330px] grid-cols-[1.08fr_.92fr] overflow-hidden bg-white sm:min-h-[375px]">
              <div className="flex flex-col justify-center p-6 sm:p-9"><div className="h-2 w-16 rounded-full bg-brand/20"/><div className="mt-5 h-5 w-[92%] rounded-md bg-deep"/><div className="mt-2 h-5 w-4/5 rounded-md bg-deep"/><div className="mt-2 h-5 w-3/5 rounded-md bg-gradient-to-r from-brand to-bright"/><div className="mt-6 space-y-2"><div className="h-2 w-full rounded-full bg-line"/><div className="h-2 w-4/5 rounded-full bg-line"/></div><div className="mt-7 flex gap-2"><div className="h-8 w-24 rounded-full bg-brand"/><div className="h-8 w-20 rounded-full border border-line bg-white"/></div><div className="mt-8 grid grid-cols-3 gap-2">{["01", "02", "03"].map((item) => <div key={item} className="rounded-lg bg-cloud p-2"><span className="text-[8px] font-extrabold text-brand">{item}</span><div className="mt-2 h-1.5 rounded bg-deep/70"/><div className="mt-1 h-1.5 w-2/3 rounded bg-line"/></div>)}</div></div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#eef8ff] to-[#dff7f5]"><div className="soft-noise absolute inset-0 opacity-30"/><div className="absolute -right-12 -top-12 size-40 rounded-full bg-brand/25"/><div className="absolute bottom-8 left-5 right-5 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl backdrop-blur"><div className="flex items-end gap-2">{[35, 55, 45, 76, 62, 92].map((height, index) => <motion.i key={height} initial={reduce ? false : { height: 0 }} animate={{ height }} transition={{ delay: .5 + index * .06, duration: .45 }} className="flex-1 rounded-t bg-gradient-to-t from-brand to-teal"/> )}</div><div className="mt-3 flex items-center justify-between"><span className="text-[8px] font-extrabold uppercase tracking-wider text-deep">Digital momentum</span><ArrowRight size={12} className="-rotate-45 text-teal"/></div></div></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-[14%] z-20 w-[118px] rounded-[24px] border-[6px] border-deep bg-white p-3 shadow-2xl sm:left-[18%] sm:w-[140px]"><div className="mx-auto h-1 w-8 rounded-full bg-line"/><div className="mt-4 rounded-xl bg-cloud p-3"><div className="h-1.5 w-10 rounded bg-brand/25"/><div className="mt-2 h-3 w-full rounded bg-deep"/><div className="mt-1 h-3 w-3/4 rounded bg-deep"/><div className="mt-5 h-20 rounded-lg bg-gradient-to-br from-brand/15 to-teal/30"/></div></div>
          {floaters.map((item, index) => { const Icon = item.icon; return <motion.div key={item.label} animate={reduce ? undefined : { y: [0, -6, 0] }} transition={{ duration: 4 + index * .35, repeat: Infinity, ease: "easeInOut" }} className={`card-shadow absolute z-30 flex items-center gap-2 rounded-2xl border border-line bg-white/95 p-2.5 pr-3 backdrop-blur ${item.className}`}><span className="grid size-8 place-items-center rounded-xl bg-skywash text-brand"><Icon size={15}/></span><strong className="text-[10px] text-deep sm:text-xs">{item.label}</strong></motion.div>; })}
        </motion.div>
      </Container>
    </section>
  );
}
