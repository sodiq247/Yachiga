import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Briefcase, FileText, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Legal Services | Yachiga Tavershima",
  description: "Advocacy rooted in principle, preparation, and an unwavering belief that justice must be accessible to all.",
};

export default function LegalServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/lawyer-portrait.jpg"
            alt="Portrait in lawyer attire (wig and gown)"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">The Practice</h4>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Legal Services</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            Advocacy rooted in principle, preparation, and an unwavering belief that justice must be accessible to all not just those who can afford it.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-10 border border-transparent hover:border-accent/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Legal Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                One-on-one counsel across civil and commercial matters, providing clear, actionable guidance. We demystify the legal process so you can make informed decisions.
              </p>
            </div>

            <div className="bg-white p-10 border border-transparent hover:border-accent/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                <Scale className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Court Representation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advocacy before the courts, backed by meticulous preparation and a commitment to each client's case. We stand as a strong voice in litigation.
              </p>
            </div>

            <div className="bg-white p-10 border border-transparent hover:border-accent/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                <FileText className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Contract & Document Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thorough review and drafting of contracts, agreements, and legal documents with an eye for risk management and protecting your interests.
              </p>
            </div>

            <div className="bg-white p-10 border border-transparent hover:border-accent/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                <HeartHandshake className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Pro Bono Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to making legal support accessible through community pro bono clinics and outreach. Justice should not be a privilege.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-primary font-heading font-semibold text-4xl mb-6">Every case begins with a conversation.</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Reach out to discuss your situation and explore how I can help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold tracking-wide">
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
