import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Insights | Yachiga Tavershima",
  description: "Essays and reflections on law, policy, communication, and the craft of writing.",
};

const ARTICLES = [
  {
    title: "Shaping the Future of Fintech in Nigeria",
    category: "Law",
    date: "May 1, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2560&auto=format&fit=crop",
    slug: "shaping-the-future-of-fintech-in-nigeria"
  },
  {
    title: "AI-Driven Errors in Nigerian Banking: Legal Accountability and Data Subject Rights",
    category: "Governance",
    date: "April 18, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop",
    slug: "ai-driven-errors-in-nigerian-banking"
  }
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-[#faf8f5] py-20 lg:py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h4 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Writing & Reflection</h4>
          <h1 className="text-primary font-heading font-bold text-5xl md:text-7xl mb-6">The Blog</h1>
          <p className="text-muted-foreground text-xl md:text-2xl font-serif italic">
            Essays and reflections on law, policy, communication, and the craft of writing published regularly.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group block">
                <div className="bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-transparent hover:border-accent/20 rounded-sm">
                  <div className="relative h-60 w-full mb-6 overflow-hidden rounded-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-heading font-semibold text-2xl text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
