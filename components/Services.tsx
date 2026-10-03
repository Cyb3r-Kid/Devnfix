import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute -right-40 top-36 size-96 rounded-full bg-skywash blur-3xl"/>
      <Container className="relative">
        <Reveal><SectionHeading eyebrow="What we do" title="One Team for Every Digital Touchpoint" text="Strategy, technology and creative execution—connected from the first idea to everyday growth." align="center"/></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => { const Icon = service.icon; return (
            <Reveal key={service.title} delay={(index % 4) * .05}>
              <article className="group relative flex min-h-[330px] h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[0_24px_65px_rgba(22,119,232,.12)]">
                <div className="absolute -right-12 -top-12 size-28 rounded-full bg-skywash opacity-0 blur-2xl transition group-hover:opacity-100"/>
                <div className="relative flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-cloud text-brand transition duration-300 group-hover:bg-brand group-hover:text-white"><Icon size={21}/></span><span className="text-[10px] font-extrabold tracking-[.18em] text-brand/45">{service.number}</span></div>
                <h3 className="relative mt-7 text-xl font-extrabold tracking-[-.03em] text-deep">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-muted">{service.description}</p>
                <div className="relative mt-5 flex flex-wrap gap-1.5">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-line bg-cloud px-2.5 py-1 text-[10px] font-bold text-muted">{tag}</span>)}</div>
                <a href="#contact" aria-label={`Learn more about ${service.title}`} className="relative mt-auto inline-flex items-center gap-2 pt-7 text-sm font-extrabold text-brand">Learn More <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></a>
              </article>
            </Reveal>
          ); })}
        </div>
      </Container>
    </section>
  );
}
