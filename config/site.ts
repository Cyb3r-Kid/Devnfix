const clean = (value?: string) => value?.trim() || "";

export const siteConfig = {
  companyName: "Devnfix",
  url: clean(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000",
  email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  address: "",
  socialLinks: {
    instagram: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: clean(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  },
  description:
    "Devnfix helps businesses grow through modern websites, branding, social media, digital content and SaaS solutions.",
} as const;

export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hi Devnfix, I'm interested in your digital services and would like to discuss a project.",
    )}`
  : "";
