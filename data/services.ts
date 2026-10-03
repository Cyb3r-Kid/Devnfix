import type { LucideIcon } from "lucide-react";
import { Bot, ChartNoAxesCombined, Clapperboard, Code2, Palette, Share2 } from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description: "Fast, responsive and conversion-focused websites built around your business goals.",
    features: ["Business Websites", "Landing Pages", "E-commerce", "Responsive Development"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Social Media Management",
    description: "Consistent, professional social media management designed to strengthen your online presence.",
    features: ["Content Planning", "Post Design", "Account Management", "Performance Tracking"],
    icon: Share2,
  },
  {
    number: "03",
    title: "Graphic & Brand Design",
    description: "Professional visual identities that make businesses recognizable and consistent.",
    features: ["Logo Design", "Brand Identity", "Marketing Creatives", "Social Media Designs"],
    icon: Palette,
  },
  {
    number: "04",
    title: "Video & AI Content",
    description: "Modern video content designed for social media and digital marketing.",
    features: ["Video Editing", "Short-Form Content", "AI-Assisted Videos", "Promotional Creatives"],
    icon: Clapperboard,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description: "Digital campaigns focused on reaching the right audience and generating business opportunities.",
    features: ["Campaign Strategy", "Audience Targeting", "Content Distribution", "Performance Insights"],
    icon: ChartNoAxesCombined,
  },
  {
    number: "06",
    title: "SaaS Solutions",
    description: "Purpose-built software products that simplify operations and solve real-world problems.",
    features: ["Product Strategy", "Custom Software", "Workflow Automation", "Scalable Platforms"],
    icon: Bot,
  },
];
