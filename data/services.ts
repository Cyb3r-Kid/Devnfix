import type { LucideIcon } from "lucide-react";
import {
  Bot,
  ChartNoAxesCombined,
  Clapperboard,
  Code2,
  Palette,
  PenTool,
  Share2,
  Sparkles,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description: "Fast, responsive websites engineered around clarity, trust and measurable business action.",
    tags: ["Business websites", "Landing pages", "E-commerce"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Social Media Management",
    description: "A consistent digital presence shaped by thoughtful planning, design and ongoing management.",
    tags: ["Content planning", "Account management", "Insights"],
    icon: Share2,
  },
  {
    number: "03",
    title: "Brand Identity",
    description: "Distinctive visual systems that help growing businesses look credible and stay recognizable.",
    tags: ["Logo systems", "Brand direction", "Guidelines"],
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Graphic Design",
    description: "Sharp, on-brand creative for campaigns, social channels and everyday business communication.",
    tags: ["Campaign creative", "Social design", "Print-ready assets"],
    icon: PenTool,
  },
  {
    number: "05",
    title: "Video Production",
    description: "Polished short-form and promotional edits designed for modern digital channels.",
    tags: ["Video editing", "Short-form", "Promotional content"],
    icon: Clapperboard,
  },
  {
    number: "06",
    title: "AI Content Creation",
    description: "AI-assisted content workflows that expand creative possibilities while keeping human direction.",
    tags: ["AI video", "Content concepts", "Creative workflows"],
    icon: Bot,
  },
  {
    number: "07",
    title: "Digital Marketing",
    description: "Focused digital strategies that connect the right message with the right audience.",
    tags: ["Campaign strategy", "Audience targeting", "Optimization"],
    icon: ChartNoAxesCombined,
  },
  {
    number: "08",
    title: "Custom Digital Solutions",
    description: "Purpose-built software and automation for business needs that off-the-shelf tools cannot solve.",
    tags: ["SaaS", "Automation", "Custom software"],
    icon: Palette,
  },
];
