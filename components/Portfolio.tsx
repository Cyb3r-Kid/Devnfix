import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function QlessVisual() {
  return <div className="relative h-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0a3470] via-[#0c5aa5] to-[#16a7ad] p-5 sm:p-8"><div className="soft-noise absolute inset-0 opacity-20"/><div className="absolute -right-12 -top-12 size-52 rounded-full bg-white/10"/><div className="relative grid h-full place-items-center"><div className="w-[75%] max-w-[360px] overflow-hidden rounded-[20px] border border-white/20 bg-white shadow-2xl"><div className="flex h-9 items-center justify-between border-b border-line bg-cloud px-3"><span className="text-[8px] font-extrabold tracking-wider text-brand">QLESS</span><div className="flex gap-1"><i className="size-1.5 rounded-full bg-line"/><i className="size-1.5 rounded-full bg-line"/></div></div><div className="grid grid-cols-[.75fr_1.25fr] p-4"><div className="border-r border-line pr-3"><div className="h-2 w-12 rounded bg-brand/20"/><div className="mt-4 space-y-2">{[1,2,3,4].map((n) => <div key={n} className={`h-5 rounded-lg ${n === 1 ? "bg-brand" : "bg-cloud"}`}/>)}</div></div><div className="pl-4"><p className="text-[8px] font-bold text-muted">Live queue</p><p className="mt-1 text-4xl font-extrabold tracking-[-.06em] text-deep">04</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full w-2/3 rounded-full bg-teal"/></div><div className="mt-4 grid grid-cols-2 gap-2"><div className="h-10 rounded-lg bg-cloud"/><div className="h-10 rounded-lg bg-skywash"/></div></div></div></div><div className="absolute bottom-4 right-[4%] w-[95px] rounded-[18px] border-4 border-deep bg-white p-2 shadow-xl sm:right-[10%] sm:w-[112px]"><div className="mx-auto h-1 w-6 rounded bg-line"/><p className="mt-3 text-[6px] font-bold uppercase text-brand">Your position</p><p className="text-center text-3xl font-extrabold text-deep">04</p><div className="mt-2 rounded-md bg-[#e5fbf7] p-1.5 text-center text-[6px] font-bold text-teal">Queue updated</div></div></div></div>;
}

function WebsiteVisual() {
  return <div className="h-full rounded-[22px] bg-[#edf7ff] p-5"><div className="mx-auto h-full max-w-sm overflow-hidden rounded-xl border border-white bg-white shadow-xl"><div className="flex h-8 items-center gap-1.5 border-b border-line bg-cloud px-3"><i className="size-1.5 rounded-full bg-[#ff867d]"/><i className="size-1.5 rounded-full bg-[#ffd06e]"/><i className="size-1.5 rounded-full bg-[#5cd7aa]"/></div><div className="grid h-[calc(100%-2rem)] grid-cols-2 items-center gap-4 p-5"><div><div className="h-2 w-12 rounded bg-brand/20"/><div className="mt-3 h-4 w-full rounded bg-deep"/><div className="mt-2 h-4 w-4/5 rounded bg-deep"/><div className="mt-2 h-4 w-3/5 rounded bg-brand"/><div className="mt-5 h-7 w-20 rounded-full bg-deep"/></div><div className="relative h-4/5 overflow-hidden rounded-xl bg-gradient-to-br from-brand/15 to-teal/25"><div className="soft-noise absolute inset-0 opacity-30"/><div className="absolute bottom-3 left-3 right-3 h-10 rounded-lg bg-white/80"/></div></div></div></div>;
}

function BrandVisual() {
  return <div className="relative h-full overflow-hidden rounded-[22px] bg-deep"><div className="absolute -right-10 -top-10 size-36 rounded-full bg-teal"/><div className="absolute right-16 top-7 size-12 rotate-12 rounded-xl border border-white/30"/><div className="absolute bottom-6 left-6"><div className="grid size-12 place-items-center rounded-xl bg-white text-xl font-black text-deep">D</div><p className="mt-6 text-[9px] font-extrabold uppercase tracking-[.22em] text-teal">Visual direction</p><p className="mt-2 text-2xl font-extrabold leading-tight text-white">Recognizable.<br/>Everywhere.</p><div className="mt-5 flex gap-2"><i className="size-6 rounded-full bg-white"/><i className="size-6 rounded-full bg-brand"/><i className="size-6 rounded-full bg-teal"/></div></div></div>;
}

export function Portfolio() {
  const [qless, website, brand] = projects;
  return (
    <section id="work" className="section-pad bg-cloud">
      <Container>
        <Reveal><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="Selected work" title="Digital Thinking, Made Visible" text="Our product work and clearly labelled concepts show how we approach useful, polished digital experiences."/><p className="max-w-sm text-sm leading-6 text-muted">No invented client stories—just an honest view of our product direction and design capability.</p></div></Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="lg:row-span-2"><article className="group flex h-full min-h-[620px] flex-col overflow-hidden rounded-[30px] border border-line bg-white p-3 transition hover:border-brand/25 hover:shadow-[0_28px_75px_rgba(6,27,59,.1)]"><div className="min-h-[390px] flex-1 overflow-hidden rounded-[22px]"><QlessVisual/></div><ProjectCopy project={qless} services={["Product design", "Web application", "SaaS experience"]}/></article></Reveal>
          <Reveal delay={.06}><article className="group grid overflow-hidden rounded-[30px] border border-line bg-white p-3 transition hover:border-brand/25 hover:shadow-[0_28px_75px_rgba(6,27,59,.1)] sm:grid-cols-[1.08fr_.92fr]"><div className="min-h-[260px] overflow-hidden rounded-[22px]"><WebsiteVisual/></div><ProjectCopy project={website} services={["UI/UX", "Responsive design"]} compact/></article></Reveal>
          <Reveal delay={.12}><article className="group grid overflow-hidden rounded-[30px] border border-line bg-white p-3 transition hover:border-brand/25 hover:shadow-[0_28px_75px_rgba(6,27,59,.1)] sm:grid-cols-[1.08fr_.92fr]"><div className="min-h-[260px] overflow-hidden rounded-[22px]"><BrandVisual/></div><ProjectCopy project={brand} services={["Identity", "Social system"]} compact/></article></Reveal>
        </div>
      </Container>
    </section>
  );
}

function ProjectCopy({ project, services, compact = false }: { project: (typeof projects)[number]; services: string[]; compact?: boolean }) {
  return <div className={`${compact ? "p-5 sm:p-6" : "p-5 sm:p-7"} flex flex-col justify-center`}><span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand">{project.tag}</span><div className="mt-3 flex items-start justify-between gap-4"><div><h3 className={`${compact ? "text-xl" : "text-2xl"} font-extrabold tracking-[-.03em] text-deep`}>{project.title}</h3><p className="mt-1 text-sm font-semibold text-muted">{project.type}</p></div><ArrowUpRight className="shrink-0 text-brand transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20}/></div><p className="mt-4 text-sm leading-6 text-muted">{project.description}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{services.map((service) => <span key={service} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-deep/65"><CheckCircle2 size={12} className="text-teal"/>{service}</span>)}</div></div>;
}
