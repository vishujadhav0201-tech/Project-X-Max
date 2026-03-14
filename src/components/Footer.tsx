import Link from 'next/link';
import { Download, Shield, Globe, Smartphone, Zap, Mail } from 'lucide-react';

export default function Footer() {
  const platforms = [
    'Terabox Downloader', 'Ullu Downloader', 'Alt Balaji Downloader',
    'MX Player Downloader'
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-[#001C55]/20 backdrop-blur-md mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A6E1FA] to-[#0E6BA8] flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#00072D] rounded-[7px] flex items-center justify-center">
                  <Download className="w-4 h-4 text-[#A6E1FA]" strokeWidth={2.5} />
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Link<span className="text-[#A6E1FA]">Flow</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 pr-4">
              Advanced file downloader supporting multiple platforms. Fast, secure, and modern.
            </p>
            <div className="flex gap-3">
              {[Shield, Globe, Smartphone, Zap].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-xl bg-[#0E6BA8]/20 flex items-center justify-center hover:bg-[#0E6BA8] hover:text-white text-[#A6E1FA] border border-[#0E6BA8]/30 transition-all duration-300 cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Platforms 1 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest opacity-80">Platforms</h4>
            <ul className="space-y-2.5">
              {platforms.slice(0, 5).map((p) => (
                <li key={p}>
                  <Link href="/" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest opacity-80">More Platforms</h4>
            <ul className="space-y-2.5">
              {platforms.slice(5).map((p) => (
                <li key={p}>
                  <Link href="/" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest opacity-80">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">Home</Link></li>
              <li><Link href="#platforms" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">Supported Platforms</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="text-sm text-gray-400 hover:text-[#A6E1FA] transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LinkFlow. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
