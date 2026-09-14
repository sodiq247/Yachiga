import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#050b14] pt-20 pb-10 text-white/80 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-accent text-primary w-10 h-10 flex items-center justify-center font-heading font-bold text-lg">
                YT
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-white text-lg font-semibold leading-tight tracking-wide">
                  Yachiga Tavershima
                </span>
                <span className="text-accent text-[10px] font-medium tracking-[0.2em] uppercase mt-0.5">
                  Lawyer • Policy • Host • Author
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Bridging the worlds of law, policy, communication, and literature with a
              commitment to justice, clarity, and the power of the written word.
            </p>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-accent transition-colors text-sm">About Me</Link></li>
              <li><Link href="/legal-services" className="hover:text-accent transition-colors text-sm">Legal Practice</Link></li>
              <li><Link href="/public-policy" className="hover:text-accent transition-colors text-sm">Public Policy</Link></li>
              <li><Link href="/speaking-events" className="hover:text-accent transition-colors text-sm">Event Hosting</Link></li>
              <li><Link href="/publications" className="hover:text-accent transition-colors text-sm">Author & Writer</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors text-sm">Mentorship</Link></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/insights" className="hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors text-sm">Media Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors text-sm">Apply for Mentorship</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://linkedin.com/in/yachtwilson" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <FaLinkedin size={18} className="group-hover:text-white" />
              </a>
              <a href="https://x.com/yachtwilson" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <FaTwitter size={18} className="group-hover:text-white" />
              </a>
              <a href="https://instagram.com/yachtwilson" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <FaInstagram size={18} className="group-hover:text-white" />
              </a>
              <a href="https://facebook.com/yachtwilson" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <FaFacebook size={18} className="group-hover:text-white" />
              </a>
              <a href="https://youtube.com/yachtwilson" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <FaYoutube size={18} className="group-hover:text-white" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="mailto:info@yachiga.com" className="block hover:text-accent transition-colors text-sm">info@yachiga.com</a>
              <a href="tel:+2348030742373" className="block hover:text-accent transition-colors text-sm">+234 (0) 803 074 2373</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Yachiga Tavershima. All rights reserved.</p>
          <p>Designed with intention. Built for impact.</p>
        </div>
      </div>
    </footer>
  );
}
