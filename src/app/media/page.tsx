import Image from "next/image";
import { Download } from "lucide-react";

export const metadata = {
  title: "Media | Yachiga Tavershima",
  description: "Media gallery of Yachiga Tavershima.",
};

export default function MediaPage() {
  const images = [
    {
      src: "/images/black-and-white.jpg",
      title: "Tavershima YACHIGA",
    },
    {
      src: "/images/media-blue-suit.jpg",
      title: "Photography Makurdi 2022",
    },
    {
      src: "/images/media-two-men.jpg",
      title: "Bagauda",
    },
    {
      src: "/images/media-white-shirt.jpg",
      title: "BSU Days",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/black-and-white.jpg"
            alt="Media Background"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Media Gallery</h1>
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            A visual collection of moments and professional engagements.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-[28rem] w-full rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-heading font-semibold text-3xl mb-4 leading-tight">{image.title}</h3>
                  <a 
                    href={image.src} 
                    download 
                    className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-accent hover:text-white transition-colors w-fit"
                  >
                    Download Image <Download className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
