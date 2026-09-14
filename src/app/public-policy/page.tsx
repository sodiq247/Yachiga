import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Public Policy | Yachiga Tavershima",
  description: "Turning data into direction. Translating legal frameworks into living policy.",
};

export default function PublicPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/plane-window.jpg"
            alt="Looking out a plane window"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">The Approach</h4>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Public Policy</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            Turning data into direction. Translating legal frameworks into living policy that serves people, not just paper.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-primary font-heading font-semibold text-4xl md:text-5xl">Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center shrink-0">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Legislative Reform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyzing draft legislation for feasibility, gaps, and unintended consequences before it becomes law. Ensuring legal texts align with societal needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Policy Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-based research that combines quantitative data with the qualitative reality of affected communities to drive informed decision-making.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Regulatory Frameworks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designing and evaluating regulatory structures that balance innovation with public protection, specifically in emerging technologies and finance.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-[#faf8f5] flex items-center justify-center shrink-0">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Strategic Advisory</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advising organisations and government bodies on navigating complex policy landscapes and anticipating regulatory shifts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#faf8f5] text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-primary font-heading font-semibold text-4xl mb-6">Rigorous analysis strengthens work.</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you are drafting legislation, evaluating a programme, or navigating a regulatory landscape, let's discuss how we can assist.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold tracking-wide">
              Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
