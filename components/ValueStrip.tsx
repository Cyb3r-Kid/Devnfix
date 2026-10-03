import { Asterisk } from "lucide-react";

const skills = ["Web Development", "Branding", "Digital Marketing", "AI Content", "UI/UX", "Social Media", "Automation"];

function SkillGroup({ hidden = false }: { hidden?: boolean }) {
  return <div className="flex shrink-0 items-center" aria-hidden={hidden}>{skills.map((skill) => <div key={skill} className="flex items-center gap-6 px-5 sm:px-8"><span className="whitespace-nowrap text-xs font-extrabold uppercase tracking-[.17em] text-deep/70 sm:text-sm">{skill}</span><Asterisk size={15} className="text-brand/50"/></div>)}</div>;
}

export function ValueStrip() {
  return <section aria-label="Devnfix capabilities" className="overflow-hidden border-y border-line bg-cloud py-6"><div className="marquee-track flex"><SkillGroup/><SkillGroup hidden/></div></section>;
}
