import { ArrowRight, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return <section className="bg-white py-16 sm:py-24"><Container><Reveal><div className="relative overflow-hidden rounded-[36px] border border-brand/10 bg-gradient-to-br from-[#edf8ff] via-white to-[#e9fbf8] px-6 py-14 sm:px-12 sm:py-20"><div className="grid-fade absolute inset-0 opacity-55"/><div className="absolute -left-24 -top-24 size-64 rounded-full bg-brand/20 blur-3xl"/><div className="absolute -bottom-28 -right-16 size-72 rounded-full bg-teal/20 blur-3xl"/><div className="relative mx-auto max-w-4xl text-center"><span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-brand shadow-lg"><MessageCircleMore size={22}/></span><p className="eyebrow mt-6">Your next move</p><h2 className="text-balance mt-4 text-[clamp(2.35rem,5.5vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-.055em] text-deep">Have an idea? Let&apos;s build something great.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">Tell us what you&apos;re planning and we&apos;ll help turn it into a focused, polished digital experience.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button href="#contact">Start a Project <ArrowRight className="ml-2" size={17}/></Button><Button href="#contact" variant="secondary">Contact Us</Button></div></div></div></Reveal></Container></section>;
}
