import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Mic, PenTool, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Kohol Reference: Massive bold text, full screen, dark overlay) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/black-and-white.jpg"
            alt="Black and white, wearing sunglasses with city reflection"
            fill
            className="object-cover object-center grayscale opacity-650"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Lawyer • Public Policy Analyst • Corporate Event Host • Author
          </h2>
          <h1 className="text-white font-heading font-bold text-5xl md:text-7xl lg:text-[100px] leading-[1.1] uppercase tracking-tight mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            PROVEN <span className="text-accent">LEADERSHIP</span> EXPERIENCE
          </h1>
          <p className="text-white/90 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            A multidisciplinary professional working at the intersection of law, policy, communication, and literature.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto h-14 px-8 text-base font-semibold tracking-wide">
              About Me <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white w-full sm:w-auto h-14 px-8 text-base font-semibold tracking-wide bg-transparent">
              Mentorship Programme
            </Button>
          </div>
        </div>
      </section>

      {/* 2. A Portfolio of Disciplines (Kohol Reference: Clean white section with grid) */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Areas of Expertise</h4>
            <h2 className="text-primary font-heading font-semibold text-4xl md:text-5xl mb-6">
              A Portfolio of Disciplines
            </h2>
            <p className="text-muted-foreground text-lg">
              Each field informs the others legal rigour strengthens policy analysis, hosting sharpens communication, and writing gives all of it a voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lawyer */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#faf8f5] flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Scale className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Lawyer</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Legal practice rooted in justice, advocacy, and accessible counsel.
                </p>
                <Link href="/legal-services" className="inline-flex items-center text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Policy Analyst */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#faf8f5] flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Public Policy</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Analyzing and shaping policy at the intersection of law and governance.
                </p>
                <Link href="/public-policy" className="inline-flex items-center text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Event Host */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#faf8f5] flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Mic className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Event Host</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Moderating and hosting conferences, summits, and high-profile events.
                </p>
                <Link href="/speaking-events" className="inline-flex items-center text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Author */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#faf8f5] flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <PenTool className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Author</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Words that advocate, inform, and inspire across genres and audiences.
                </p>
                <Link href="/publications" className="inline-flex items-center text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Quote / Standout Section (Kohol Reference: Full width text block) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <Quote className="w-16 h-16 text-accent/20 mx-auto mb-8" />
          <h2 className="text-primary font-heading italic font-light text-3xl md:text-5xl leading-relaxed">
            "Justice is not just a courtroom word. It is the standard by which we should measure every policy we write, every word we publish, and every life we touch."
          </h2>
          <div className="mt-8">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">Yachiga Tavershima</span>
          </div>
        </div>
      </section>

      {/* 4. Latest Writing (Kohol Reference: Latest Projects/Blog row) */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-6">
            <div>
              <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Latest Writing</h4>
              <h2 className="text-primary font-heading font-semibold text-4xl md:text-5xl">
                From the Blog
              </h2>
            </div>
            <Link href="/insights" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors border border-primary hover:border-accent px-6 py-3">
              All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <Link href="/" className="group block">
              <div className="bg-white p-4 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-transparent hover:border-accent/20">
                <div className="relative h-64 md:h-72 mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2560&auto=format&fit=crop"
                    alt="CBN Building"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">Law</span>
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    Shaping the Future of Fintech in Nigeria
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-auto">
                    <span>May 1, 2026</span>
                    <span className="mx-2">•</span>
                    <span>9 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/" className="group block">
              <div className="bg-white p-4 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-transparent hover:border-accent/20">
                <div className="relative h-64 md:h-72 mb-6 overflow-hidden bg-primary/5 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop"
                    alt="AI Technology"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">Governance</span>
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    AI-Driven Errors in Nigerian Banking: Legal Accountability and Data Subject Rights
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-auto">
                    <span>April 18, 2026</span>
                    <span className="mx-2">•</span>
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/insights" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors border border-primary hover:border-accent px-6 py-3 w-full justify-center">
              All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA Section (Kohol Reference: Solid contact block) */}
      <section className="relative py-24 lg:py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop"
            alt="Office"
            fill
            className="object-cover grayscale opacity-10"
          />
          <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Let's Work Together</h4>
          <h2 className="text-white font-heading font-semibold text-5xl lg:text-6xl mb-8">
            Ready to Connect?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Whether you need legal counsel, policy analysis, a compelling host for your next event, or guidance through mentorship let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto h-14 px-8 text-base font-semibold tracking-wide">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white w-full sm:w-auto h-14 px-8 text-base font-semibold tracking-wide bg-transparent">
              Apply for Mentorship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
