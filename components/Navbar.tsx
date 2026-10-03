"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? "border-line/80 bg-white/92 shadow-[0_8px_30px_rgba(3,31,75,.06)] backdrop-blur-xl" : "border-transparent bg-white/60"}`}>
      <Container className="flex h-[76px] items-center justify-between">
        <a href="#home" aria-label="Devnfix home"><Logo /></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-ink/75 transition hover:text-brand">{item.label}</a>)}
        </nav>
        <div className="hidden lg:block"><Button href="#contact">Get a Free Consultation</Button></div>
        <button className="grid size-11 place-items-center rounded-full border border-line bg-white text-deep lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-line bg-white lg:hidden">
            <Container className="flex flex-col gap-1 py-5">
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-ink hover:bg-cloud">{item.label}</a>)}
              <Button href="#contact" className="mt-3 w-full" >Get a Free Consultation</Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
