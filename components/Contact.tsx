"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MessageSquareText, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormData = { name: string; business: string; email: string; phone: string; service: string; budget: string; description: string };
const initial: FormData = { name: "", business: "", email: "", phone: "", service: "", budget: "", description: "" };
const services = ["Website Development", "Social Media Management", "Brand Identity", "Graphic Design", "Video Production", "AI Content Creation", "Digital Marketing", "Custom Digital Solutions", "Other"];
const budgets = ["Below ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+", "Let's Discuss"];

export function Contact() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const set = (key: keyof FormData, value: string) => { setData((old) => ({ ...old, [key]: value })); setErrors((old) => ({ ...old, [key]: undefined })); setSubmitted(false); };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: typeof errors = {};
    if (data.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Please enter a valid email address.";
    if (!data.service) next.service = "Please select a service.";
    if (data.description.trim().length < 20) next.description = "Please share at least 20 characters about your project.";
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  };
  const field = "min-h-13 w-full rounded-2xl border border-line bg-white px-4 text-sm text-deep outline-none transition placeholder:text-muted/55 focus:border-brand focus:ring-4 focus:ring-brand/10";
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute -bottom-48 -left-32 size-96 rounded-full bg-brand/10 blur-3xl"/>
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div><SectionHeading eyebrow="Get in touch" title="Let&apos;s Make the Next Step Clear." text="Share what you're planning. We'll use the details to understand the right direction for your project."/><div className="mt-9 space-y-3">{siteConfig.email && <ContactLink href={`mailto:${siteConfig.email}`} icon={Mail} label={siteConfig.email}/>} {siteConfig.phone && <ContactLink href={`tel:${siteConfig.phone}`} icon={Phone} label={siteConfig.phone}/>} {whatsappUrl && <ContactLink href={whatsappUrl} icon={MessageSquareText} label="Chat on WhatsApp" external/>}</div><div className="mt-8 rounded-2xl border border-line bg-white p-5"><p className="text-xs font-extrabold uppercase tracking-[.15em] text-brand">What happens next</p><ul className="mt-4 space-y-3 text-sm text-muted">{["We review your goals and requirements", "We clarify the best next step", "You receive a practical project direction"].map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal"/>{item}</li>)}</ul></div></div>
          <form onSubmit={submit} noValidate className="rounded-[30px] border border-line bg-white p-5 shadow-[0_24px_70px_rgba(6,27,59,.08)] sm:p-8"><div className="mb-7 flex items-center justify-between border-b border-line pb-5"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Project enquiry</p><p className="mt-1 text-sm text-muted">Required fields are marked by validation.</p></div><span className="hidden rounded-full bg-cloud px-3 py-1.5 text-[10px] font-bold text-muted sm:block">No obligation</span></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" error={errors.name}><input value={data.name} onChange={(e)=>set("name",e.target.value)} className={field} autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name}/></Field><Field label="Business Name"><input value={data.business} onChange={(e)=>set("business",e.target.value)} className={field} autoComplete="organization" placeholder="Your business"/></Field><Field label="Email" error={errors.email}><input type="email" value={data.email} onChange={(e)=>set("email",e.target.value)} className={field} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email}/></Field><Field label="Phone"><input type="tel" value={data.phone} onChange={(e)=>set("phone",e.target.value)} className={field} autoComplete="tel" placeholder="Your phone number"/></Field><Field label="Service Required" error={errors.service}><select value={data.service} onChange={(e)=>set("service",e.target.value)} className={field} aria-invalid={!!errors.service}><option value="">Select a service</option>{services.map((service)=><option key={service}>{service}</option>)}</select></Field><Field label="Budget Range"><select value={data.budget} onChange={(e)=>set("budget",e.target.value)} className={field}><option value="">Select a range</option>{budgets.map((budget)=><option key={budget}>{budget}</option>)}</select></Field><Field label="Project Details" error={errors.description} className="sm:col-span-2"><textarea value={data.description} onChange={(e)=>set("description",e.target.value)} className={`${field} min-h-40 resize-y py-3`} placeholder="Tell us about your goals, audience and timeline…" aria-invalid={!!errors.description}/></Field></div>{submitted && <div role="status" className="mt-5 rounded-2xl border border-brand/15 bg-skywash p-4 text-sm leading-6 text-deep"><strong>Your details are ready.</strong> Online delivery is not connected yet, so this message has not been sent. Configure a form provider or contact email before launch.</div>}<button type="submit" className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand to-bright px-7 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(22,119,232,.2)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(22,119,232,.3)] sm:w-auto">Send Project Enquiry <ArrowRight className="ml-2" size={17}/></button></form>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) { return <label className={`block ${className}`}><span className="mb-2 block text-sm font-extrabold text-deep">{label}</span>{children}{error && <span className="mt-1.5 block text-xs font-semibold text-red-600">{error}</span>}</label>; }
function ContactLink({ href, label, icon: Icon, external = false }: { href: string; label: string; icon: typeof Mail; external?: boolean }) { return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-sm font-bold text-deep transition hover:-translate-y-0.5 hover:border-brand/30"><Icon size={18} className="text-brand"/>{label}</a>; }
