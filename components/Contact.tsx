"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageSquareText, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormData = { name: string; business: string; email: string; phone: string; service: string; budget: string; description: string };
const initial: FormData = { name: "", business: "", email: "", phone: "", service: "", budget: "", description: "" };
const services = ["Website Development", "Social Media Management", "Branding & Graphic Design", "Video Content", "Digital Marketing", "SaaS / Custom Software", "Other"];
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
  const field = "min-h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-deep outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/10";
  return <section id="contact" className="section-pad bg-cloud"><Container><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-16"><div><SectionHeading eyebrow="Get in touch" title="Let's Build Something Together." text="Tell us what your business needs. We'll use the details to understand the right next step for your project."/><div className="mt-9 space-y-3">{siteConfig.email && <a href={`mailto:${siteConfig.email}`} className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-sm font-bold text-deep hover:border-brand/30"><Mail size={18} className="text-brand"/>{siteConfig.email}</a>}{siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-sm font-bold text-deep hover:border-brand/30"><Phone size={18} className="text-brand"/>{siteConfig.phone}</a>}{whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-sm font-bold text-deep hover:border-brand/30"><MessageSquareText size={18} className="text-teal"/>Chat on WhatsApp</a>}</div><p className="mt-6 text-xs leading-5 text-muted">No contact details are displayed until they are configured, so the site never publishes placeholder information.</p></div><form onSubmit={submit} noValidate className="rounded-[28px] border border-line bg-white p-5 shadow-[0_20px_55px_rgba(3,31,75,.07)] sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" error={errors.name}><input value={data.name} onChange={(e)=>set("name",e.target.value)} className={field} autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name}/></Field><Field label="Business Name"><input value={data.business} onChange={(e)=>set("business",e.target.value)} className={field} autoComplete="organization" placeholder="Your business"/></Field><Field label="Email" error={errors.email}><input type="email" value={data.email} onChange={(e)=>set("email",e.target.value)} className={field} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email}/></Field><Field label="Phone"><input type="tel" value={data.phone} onChange={(e)=>set("phone",e.target.value)} className={field} autoComplete="tel" placeholder="Your phone number"/></Field><Field label="Service Interested In" error={errors.service}><select value={data.service} onChange={(e)=>set("service",e.target.value)} className={field} aria-invalid={!!errors.service}><option value="">Select a service</option>{services.map((s)=><option key={s}>{s}</option>)}</select></Field><Field label="Budget Range"><select value={data.budget} onChange={(e)=>set("budget",e.target.value)} className={field}><option value="">Select a range</option>{budgets.map((b)=><option key={b}>{b}</option>)}</select></Field><Field label="Project Description" error={errors.description} className="sm:col-span-2"><textarea value={data.description} onChange={(e)=>set("description",e.target.value)} className={`${field} min-h-36 resize-y py-3`} placeholder="Tell us about your goals, audience and timeline…" aria-invalid={!!errors.description}/></Field></div>{submitted && <div role="status" className="mt-5 rounded-xl border border-brand/15 bg-skywash p-4 text-sm leading-6 text-deep"><strong>Your details are ready.</strong> Online delivery is not connected yet, so this message has not been sent. Configure a form provider or contact email before launch.</div>}<button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-deep px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-navy sm:w-auto">Request a Quote <ArrowRight className="ml-2" size={17}/></button></form></div></Container></section>;
}

function Field({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) { return <label className={`block ${className}`}><span className="mb-2 block text-sm font-bold text-deep">{label}</span>{children}{error && <span className="mt-1.5 block text-xs font-semibold text-red-600">{error}</span>}</label>; }
