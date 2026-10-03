import { AppWindow, Boxes, Megaphone, Palette, PlaySquare } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [["Web Development", AppWindow], ["Branding", Palette], ["Social Media", Megaphone], ["Content", PlaySquare], ["SaaS Solutions", Boxes]] as const;
export function ValueStrip() {
  return <section aria-label="Capabilities" className="border-y border-line bg-cloud"><Container className="py-8"><p className="mb-6 text-center text-sm font-bold text-deep">Everything your business needs to grow digitally.</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{items.map(([name, Icon], i) => <div key={name} className={`flex min-h-11 items-center justify-center gap-2 text-center text-xs font-semibold text-muted sm:text-sm ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}><Icon size={17} className="text-teal" />{name}</div>)}</div></Container></section>;
}
