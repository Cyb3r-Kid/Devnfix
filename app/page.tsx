import { About } from "@/components/About";
import { BentoCapabilities } from "@/components/BentoCapabilities";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { QlessSection } from "@/components/QlessSection";
import { Services } from "@/components/Services";
import { ValueStrip } from "@/components/ValueStrip";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyDevnfix } from "@/components/WhyDevnfix";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/devnfix-logo.jpg`,
    description: siteConfig.description,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
      <Navbar/>
      <main>
        <Hero/>
        <ValueStrip/>
        <Services/>
        <Portfolio/>
        <BentoCapabilities/>
        <WhyDevnfix/>
        <QlessSection/>
        <Process/>
        <Industries/>
        <About/>
        <Capabilities/>
        <CTA/>
        <Contact/>
      </main>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}
