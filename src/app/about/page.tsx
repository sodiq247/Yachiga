import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Me | Yachiga Tavershima",
  description: "Lawyer. Public Policy Analyst. Corporate Event Host. Author and Writer.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/black-and-white.jpg"
            alt="Black and white, wearing sunglasses with city reflection"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">About Me</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            A life built at the crossroads of justice, ideas, and communication.
          </p>
        </div>
      </section>

      {/* Professional Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/corporate-portrait.jpg"
                  alt="Portrait in a grey suit - Yachiga Tavershima"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div>
                <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">My Story</h4>
                <h2 className="text-primary font-heading font-semibold text-4xl mb-6">
                  Lawyer. Public Policy Analyst. Corporate Event Host. Author and Writer.
                </h2>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Every professional stands on the shoulders of those who guided them. Mentorship is not extra work; it is the completion of the circle.
                </p>
                <p>
                  The law is only just if people can reach it. I am committed to making legal knowledge and support available beyond those who can afford the premium.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <h4 className="text-primary font-heading font-bold text-xl mb-2">Legal Practice</h4>
                  <p className="text-muted-foreground text-sm">Years of advocacy</p>
                </div>
                <div>
                  <h4 className="text-primary font-heading font-bold text-xl mb-2">Policy Analysis</h4>
                  <p className="text-muted-foreground text-sm">Cross-sector research</p>
                </div>
                <div>
                  <h4 className="text-primary font-heading font-bold text-xl mb-2">Event Hosting</h4>
                  <p className="text-muted-foreground text-sm">Conferences & summits</p>
                </div>
                <div>
                  <h4 className="text-primary font-heading font-bold text-xl mb-2">Mentorship</h4>
                  <p className="text-muted-foreground text-sm">Guiding the next generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Core Principles</h4>
            <h2 className="text-primary font-heading font-semibold text-4xl md:text-5xl">
              My Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <CheckCircle2 className="text-accent w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Justice Must Be Accessible</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The law is only just if people can reach it. I am committed to making legal knowledge and support available beyond those who can afford the premium.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-accent w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Policy Without Implementation Is Aspiration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A policy that cannot be enforced is a wish, not a rule. Good policy analysis considers the full path from idea to impact.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-accent w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Communication Is a Form of Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether on stage or on the page, the goal is never to impress but to illuminate to make complex ideas accessible and to give voice to what matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-accent w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Mentorship Is How We Pay It Forward</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every professional stands on the shoulders of those who guided them. Mentorship is not extra work; it is the completion of the circle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-semibold text-4xl mb-8">Work with Yachiga</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold tracking-wide">
              Contact <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
