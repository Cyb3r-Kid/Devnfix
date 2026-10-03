import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Devnfix",
  description: "How Devnfix handles information submitted through this website.",
};

const sections = [
  ["Information you provide", "When you contact Devnfix, you may provide details such as your name, business name, email address, phone number and project information. The current website form does not transmit submissions until a form delivery service is configured."],
  ["How information may be used", "Submitted information may be used to respond to enquiries, understand project requirements, improve services and maintain business communications."],
  ["Third-party services", "If analytics, hosting, form delivery or other third-party services are enabled, their own privacy terms may apply. This policy should be updated to name those services."],
  ["Your choices", "You may request access, correction or deletion of personal information held by Devnfix using the configured contact details on this website."],
  ["Updates", "This policy may be revised when the website or business practices change. The published page should display an effective date once reviewed for launch."],
] as const;

export default function PrivacyPage() {
  return <><LegalHeader/><main className="section-pad bg-cloud"><Container className="max-w-3xl"><p className="eyebrow">Legal</p><h1 className="mt-4 text-4xl font-extrabold tracking-[-.04em] text-deep sm:text-5xl">Privacy Policy</h1><div className="mt-10 space-y-7 rounded-[28px] border border-line bg-white p-6 text-sm leading-7 text-muted sm:p-10"><p>This general policy explains how information may be handled through the Devnfix website. It should be reviewed and adapted to the actual tools and services used before the site is published.</p>{sections.map(([title, text]) => <section key={title}><h2 className="text-lg font-extrabold text-deep">{title}</h2><p className="mt-2">{text}</p></section>)}</div></Container></main><Footer/></>;
}

function LegalHeader() { return <header className="border-b border-line bg-white"><Container className="flex h-[76px] items-center justify-between"><Link href="/"><Logo/></Link><Link href="/" className="text-sm font-bold text-brand">Back to home</Link></Container></header>; }
