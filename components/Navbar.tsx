"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-35% 0px -60%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className={`mt-3 flex h-[68px] items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${scrolled || open ? "border-line/80 bg-white/90 shadow-[0_12px_40px_rgba(6,27,59,.08)] backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur-md"}`}>
          <a href="#home" aria-label="Devnfix home" onClick={() => setOpen(false)}><Logo /></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${active === item.href ? "text-brand" : "text-ink/70 hover:text-deep"}`}>
                {item.label}
                {active === item.href && <motion.span layoutId="nav-active" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand" />}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden min-h-11 items-center gap-2 rounded-full bg-deep px-5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(6,27,59,.18)] transition hover:-translate-y-0.5 hover:bg-brand lg:inline-flex">Let&apos;s Talk <ArrowUpRight size={16}/></a>
          <button className="grid size-11 place-items-center rounded-full border border-line bg-white text-deep transition hover:border-brand/30 hover:text-brand lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
        </div>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .25 }} className="absolute inset-x-0 top-[88px] lg:hidden">
            <Container>
              <div className="overflow-hidden rounded-[26px] border border-line bg-white/95 p-3 shadow-[0_28px_80px_rgba(6,27,59,.15)] backdrop-blur-xl">
                {navigation.map((item, index) => (
                  <motion.a key={item.href} href={item.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }} className="flex min-h-14 items-center justify-between rounded-2xl px-4 text-base font-bold text-deep transition hover:bg-cloud hover:text-brand"><span>{item.label}</span><span className="text-xs font-extrabold text-brand/45">0{index + 1}</span></motion.a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-deep px-5 text-sm font-extrabold text-white">Start Your Project <ArrowUpRight size={16}/></a>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
