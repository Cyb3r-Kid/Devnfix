import { ArrowUpRight, Gauge, MonitorSmartphone, Sparkles, WandSparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const supportingCard = "h-full min-h-[250px] overflow-hidden rounded-[28px] border border-line p-6 md:min-h-0";

export function BentoCapabilities() {
  return (
    <section id="design-system" className="section-pad scroll-mt-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Designed as a system"
            title="Creativity That Works Harder"
            text="Every touchpoint is considered together—so the brand looks consistent, the experience feels intuitive and the technology stays useful."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:auto-rows-[230px] md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="min-h-[480px] md:col-span-2 md:row-span-2 md:min-h-0">
            <article className="group relative h-full overflow-hidden rounded-[28px] bg-deep p-6 text-white sm:p-7">
              <div className="grid-fade absolute inset-0 opacity-25"/>
              <div className="relative flex h-full min-h-0 flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-teal"><MonitorSmartphone size={21}/></span>
                  <ArrowUpRight className="text-white/35 transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20}/>
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[.18em] text-teal">Web experiences</p>
                <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight tracking-[-.04em] sm:text-3xl">Designed to earn attention. Built to earn action.</h3>
                <div className="mt-auto overflow-hidden rounded-t-[18px] border border-white/15 bg-white p-3 shadow-2xl transition duration-500 group-hover:-translate-y-1 md:translate-y-5 md:group-hover:translate-y-3">
                  <div className="flex gap-1 border-b border-line pb-2"><i className="size-1.5 rounded-full bg-[#ff867d]"/><i className="size-1.5 rounded-full bg-[#ffd06e]"/><i className="size-1.5 rounded-full bg-teal"/></div>
                  <div className="grid grid-cols-2 gap-3 pt-3"><div><div className="h-2 w-10 rounded bg-brand/20"/><div className="mt-2 h-3 w-full rounded bg-deep"/><div className="mt-1 h-3 w-3/4 rounded bg-deep"/><div className="mt-3 h-5 w-16 rounded-full bg-brand"/></div><div className="h-20 rounded-lg bg-gradient-to-br from-skywash to-teal/20"/></div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal className="min-h-[250px] md:min-h-0" delay={.04}>
            <article className={`${supportingCard} relative bg-cloud`}>
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-teal/25"/>
              <Sparkles size={21} className="relative text-brand"/>
              <p className="relative mt-8 text-xs font-extrabold uppercase tracking-[.16em] text-brand">Creative branding</p>
              <h3 className="relative mt-2 text-xl font-extrabold text-deep">One clear identity across every channel.</h3>
              <div className="absolute bottom-5 right-5 flex gap-1.5"><i className="size-6 rounded-full bg-deep"/><i className="size-6 rounded-full bg-brand"/><i className="size-6 rounded-full bg-teal"/></div>
            </article>
          </Reveal>

          <Reveal className="min-h-[250px] md:min-h-0" delay={.08}>
            <article className={`${supportingCard} relative bg-gradient-to-br from-[#eef8ff] to-[#e7fbf8]`}>
              <WandSparkles size={21} className="text-teal"/>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[.16em] text-brand">AI-powered content</p>
              <h3 className="mt-2 max-w-[15rem] text-xl font-extrabold text-deep">Faster creative exploration, guided by people.</h3>
              <div className="absolute -bottom-5 -right-3 grid size-24 place-items-center rounded-full border border-brand/10 bg-white/60"><div className="size-10 rotate-12 rounded-xl bg-gradient-to-br from-brand to-teal"/></div>
            </article>
          </Reveal>

          <Reveal className="min-h-[250px] md:min-h-0" delay={.12}>
            <article className={`${supportingCard} relative bg-white`}>
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Social growth</p>
              <h3 className="mt-2 max-w-[15rem] text-xl font-extrabold text-deep">A more consistent digital presence.</h3>
              <div className="absolute bottom-5 left-6 right-6 flex h-16 items-end gap-2">{[28, 42, 35, 58, 51, 72, 66].map((height) => <i key={height} style={{ height }} className="flex-1 rounded-t bg-gradient-to-t from-brand/55 to-teal"/>)}</div>
            </article>
          </Reveal>

          <Reveal className="min-h-[250px] md:min-h-0" delay={.16}>
            <article className={`${supportingCard} relative bg-deep text-white`}>
              <Gauge size={22} className="text-teal"/>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[.16em] text-teal">Performance focus</p>
              <h3 className="mt-2 max-w-[15rem] text-xl font-extrabold">Fast by design, not as an afterthought.</h3>
              <div className="absolute bottom-0 right-0 size-24 rounded-tl-full border-l border-t border-white/10 bg-brand/20"/>
            </article>
          </Reveal>

          <Reveal className="min-h-[260px] md:col-span-2 md:min-h-0 lg:col-span-4" delay={.2}>
            <article className="relative h-full min-h-[260px] overflow-hidden rounded-[28px] border border-line bg-cloud p-6 md:min-h-0 sm:p-7">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Responsive everywhere</p>
              <h3 className="mt-2 max-w-sm pr-8 text-xl font-extrabold text-deep sm:pr-40">One polished experience, shaped for every screen.</h3>
              <div className="absolute bottom-4 right-5 flex items-end gap-3"><div className="h-20 w-32 rounded-lg border-4 border-deep bg-white p-2"><div className="h-full rounded bg-gradient-to-br from-skywash to-brand/15"/></div><div className="h-16 w-11 rounded-lg border-4 border-deep bg-white p-1"><div className="h-full rounded bg-gradient-to-b from-skywash to-teal/20"/></div></div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
