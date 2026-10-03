import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() { if (!whatsappUrl) return null; return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Devnfix on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#16a867] text-white shadow-[0_12px_30px_rgba(22,168,103,.3)] transition hover:-translate-y-1 hover:bg-[#118b55]"><MessageCircle size={25}/></a>; }
