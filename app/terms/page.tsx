import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use | Devnfix",
  description: "General terms for using the Devnfix website.",
};

const sections = [
  ["Website use", "You may use this website to learn about Devnfix services and products and to make legitimate business enquiries. You must not misuse, disrupt or attempt unauthorized access to the website."],
  ["Information and availability", "Website content is provided for general information. Services, timelines, pricing and deliverables are confirmed only through a separate written proposal or agreement."],
  ["Intellectual property", "Unless stated otherwise, the website design, copy, branding and original materials belong to Devnfix or their respective licensors and may not be reproduced without permission."],
  ["External links", "Links to third-party services are provided for convenience. Devnfix does not control their availability, content or policies."],
  ["Changes", "Website content and these terms may change as the business evolves. Any project engagement will be governed by its own agreed terms."],
] as const;

export default function TermsPage() {
  return <><LegalHeader/><main className="section-pad bg-cloud"><Container className="max-w-3xl"><p className="eyebrow">Legal</p><h1 className="mt-4 text-4xl font-extrabold tracking-[-.04em] text-deep sm:text-5xl">Terms of Use</h1><div className="mt-10 space-y-7 rounded-[28px] border border-line bg-white p-6 text-sm leading-7 text-muted sm:p-10"><p>These general terms describe use of the Devnfix website. They are not a substitute for project-specific agreements and should be reviewed before public launch.</p>{sections.map(([title, text]) => <section key={title}><h2 className="text-lg font-extrabold text-deep">{title}</h2><p className="mt-2">{text}</p></section>)}</div></Container></main><Footer/></>;
}

function LegalHeader() { return <header className="border-b border-line bg-white"><Container className="flex h-[76px] items-center justify-between"><Link href="/"><Logo/></Link><Link href="/" className="text-sm font-bold text-brand">Back to home</Link></Container></header>; }
