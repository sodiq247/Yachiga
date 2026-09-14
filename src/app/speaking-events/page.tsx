import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic2, Users, Lightbulb, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Speaking & Events | Yachiga Tavershima",
  description: "Turning stages into stories. Holding rooms together with presence and wit.",
};

export default function SpeakingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/corporate-portrait.jpg"
            alt="Portrait in a grey suit"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Corporate Hosting</h4>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">The Event Host</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            Turning stages into stories. Holding rooms together with presence, wit, and the ability to make every moment count.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">More Than a Microphone</h4>
            <h2 className="text-primary font-heading font-semibold text-4xl md:text-5xl">What I Host</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="group border border-border p-10 hover:border-accent transition-colors duration-300">
              <Users className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Conference Moderation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guiding panels of experts through complex discussions with clarity, pace, and purpose. Ensuring the audience receives maximum value from every session.
              </p>
            </div>

            <div className="group border border-border p-10 hover:border-accent transition-colors duration-300">
              <Mic2 className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Summits & Galas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hosting high-profile corporate events, award ceremonies, and industry gatherings with poise, professionalism, and appropriate humor.
              </p>
            </div>

            <div className="group border border-border p-10 hover:border-accent transition-colors duration-300">
              <Lightbulb className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Workshops & Seminars</h3>
              <p className="text-muted-foreground leading-relaxed">
                Facilitating interactive sessions that move beyond lectures into genuine engagement, ensuring participants leave with actionable insights.
              </p>
            </div>

            <div className="group border border-border p-10 hover:border-accent transition-colors duration-300">
              <Presentation className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Keynote Addresses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering compelling opening and closing remarks that set the tone, align with the event's theme, and leave a lasting impression.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2560&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <h2 className="text-white font-heading font-semibold text-4xl mb-6">Planning an Event?</h2>
          <p className="text-white/80 text-lg mb-10">
            Let's discuss your event, your audience, and how a host who understands your content can elevate the entire experience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold tracking-wide">
              Book a Host <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
