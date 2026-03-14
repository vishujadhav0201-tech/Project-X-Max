'use client';

import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LiquidGlassAdvanced from './LiquidGlassAdvanced';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 py-4 flex justify-center pointer-events-none">
      <LiquidGlassAdvanced
        as="nav"
        intensity={scrolled ? "heavy" : "medium"}
        className={`w-full max-w-5xl rounded-[1.5rem] pointer-events-auto transition-[padding,box-shadow,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden ${
          scrolled ? 'mt-0 shadow-2xl py-1' : 'mt-2 shadow-lg py-2'
        }`}
      >
        <div className="px-5 sm:px-6 h-14 flex items-center justify-between relative z-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A6E1FA] to-[#0E6BA8] flex items-center justify-center p-[1px] shadow-lg"
            >
              <div className="w-full h-full bg-[#00072D] rounded-[11px] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0E6BA8]/20 to-transparent"></div>
                <Download className="w-5 h-5 text-[#A6E1FA]" strokeWidth={2.5} />
              </div>
            </motion.div>
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-md">
              Link<span className="text-[#A6E1FA]">Flow</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">Home</Link>
            <Link href="#platforms" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">Platforms</Link>
            <Link href="#how-it-works" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">How It Works</Link>
            <Link href="#faq" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">FAQ</Link>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-[#0E6BA8]/30 border border-[#0E6BA8]/50 rounded-full shadow-[0_0_15px_rgba(14,107,168,0.4)] relative overflow-hidden">
              <span className="absolute inset-0 bg-white/10 mix-blend-overlay"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6E1FA] shadow-[0_0_8px_#A6E1FA] animate-pulse relative z-10" />
              <span className="relative z-10 drop-shadow-sm">Online</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="sm:hidden p-2 text-white hover:text-[#A6E1FA] transition-colors relative z-20"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6 drop-shadow-md" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6 drop-shadow-md" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile nav dropdown - Fluid height transition */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="sm:hidden overflow-hidden relative z-10"
            >
              <div className="px-5 py-5 flex flex-col gap-4 border-t border-white/5 mt-2 bg-black/10">
                <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-gray-200 hover:text-white font-medium transition-colors pl-2">Home</Link>
                <Link href="#platforms" onClick={() => setMenuOpen(false)} className="text-sm text-gray-200 hover:text-white font-medium transition-colors pl-2">Platforms</Link>
                <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm text-gray-200 hover:text-white font-medium transition-colors pl-2">How It Works</Link>
                <Link href="#faq" onClick={() => setMenuOpen(false)} className="text-sm text-gray-200 hover:text-white font-medium transition-colors pl-2">FAQ</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LiquidGlassAdvanced>
    </header>
  );
}
