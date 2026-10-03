import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-cloud p-5"><div className="w-full max-w-xl rounded-[32px] border border-line bg-white p-8 text-center shadow-[0_24px_65px_rgba(3,31,75,.09)] sm:p-12"><div className="flex justify-center"><Logo/></div><p className="mt-10 text-sm font-extrabold tracking-[.18em] text-teal">404</p><h1 className="mt-3 text-4xl font-extrabold tracking-[-.04em] text-deep">This page moved off the map.</h1><p className="mt-4 text-muted">The link may be outdated, but the rest of the Devnfix experience is one click away.</p><div className="mt-8"><Button href="/"><ArrowLeft className="mr-2" size={17}/>Back to home</Button></div></div></main>; }
