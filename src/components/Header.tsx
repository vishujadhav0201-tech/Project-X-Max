'use client';

import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FEFAE0]/90 backdrop-blur-lg border-b border-[#E9EDC9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#D4A373] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
            <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-[#3d3929] tracking-tight">
            Link<span className="text-[#D4A373]">Flow</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-5">
          <Link href="/" className="text-sm text-[#8a8270] hover:text-[#D4A373] transition-colors font-medium">Home</Link>
          <Link href="#platforms" className="text-sm text-[#8a8270] hover:text-[#D4A373] transition-colors font-medium">Platforms</Link>
          <Link href="#how-it-works" className="text-sm text-[#8a8270] hover:text-[#D4A373] transition-colors font-medium">How It Works</Link>
          <Link href="#faq" className="text-sm text-[#8a8270] hover:text-[#D4A373] transition-colors font-medium">FAQ</Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#3d3929] bg-[#CCD5AE] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Online
          </span>
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden p-2 text-[#3d3929]">
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="sm:hidden bg-[#FEFAE0] border-t border-[#E9EDC9] px-4 py-4 space-y-3 animate-fade-in">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm text-[#5a5443] font-medium py-2">Home</Link>
          <Link href="#platforms" onClick={() => setMenuOpen(false)} className="block text-sm text-[#5a5443] font-medium py-2">Platforms</Link>
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-sm text-[#5a5443] font-medium py-2">How It Works</Link>
          <Link href="#faq" onClick={() => setMenuOpen(false)} className="block text-sm text-[#5a5443] font-medium py-2">FAQ</Link>
        </div>
      )}
    </header>
  );
}
