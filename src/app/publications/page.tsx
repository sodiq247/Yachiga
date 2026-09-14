import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Author & Writer | Yachiga Tavershima",
  description: "Words that advocate, inform, and inspire across genres and audiences.",
};

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/brown-suit.png"
            alt="Sitting in a chair in a brown suit"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Author & Writer</h4>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Publications</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            Words that advocate, inform, and inspire across genres and audiences.
          </p>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl bg-[#faf8f5] flex items-center justify-center p-12">
                 <div className="w-full h-full relative">
                    <Image
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop"
                      alt="Featured Book"
                      fill
                      className="object-contain"
                    />
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Featured Work</h4>
                <h2 className="text-primary font-heading font-semibold text-4xl mb-6">
                  The intersection of law, policy, and society.
                </h2>
              </div>
              
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Writing is the most powerful tool for shaping policy and documenting thought leadership. My work spans academic journals, policy briefs, and long-form essays aimed at demystifying complex legal and societal issues.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-base font-semibold tracking-wide">
                    Request a Copy <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
