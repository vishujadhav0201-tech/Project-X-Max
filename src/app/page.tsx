'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Link as LinkIcon, ClipboardPaste, Download, Zap, Shield, Smartphone,
  Globe, Infinity, UserX, Server, ScanSearch, FileCheck,
  FileDown, ArrowUp
} from 'lucide-react';
import LiquidGlassAdvanced from '@/components/LiquidGlassAdvanced';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError('');
    } catch {
      setError('Unable to access clipboard. Please paste manually.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a URL to continue.');
      return;
    }

    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    router.push(`/download?url=${encodeURIComponent(finalUrl)}`);
  };

  const platforms = [
    { name: 'Terabox', desc: 'Download files from Terabox cloud storage instantly. No limits, no waiting.' },
    { name: 'Ullu', desc: 'Stream and download Ullu originals in high quality with one click.' },
    { name: 'Alt Balaji', desc: 'Access Alt Balaji shows and movies. Fast download, HD quality.' },
    { name: 'MX Player', desc: 'Download MX Player videos and shows directly to your device.' },
  ];

  const features = [
    { Icon: Zap, title: 'Lightning Fast', desc: 'Our servers process your download link in seconds. No delays, no queues.' },
    { Icon: Shield, title: 'Safe & Secure', desc: 'All links are scanned for threats. Your device stays protected at all times.' },
    { Icon: Smartphone, title: 'Works Everywhere', desc: 'Fully optimized for phones, tablets, and desktops. Download from any device.' },
    { Icon: Infinity, title: 'Unlimited Downloads', desc: 'No daily limits. Download as many files as you need, whenever you need.' },
    { Icon: Globe, title: 'Multi-Platform', desc: 'Supports 50+ websites and platforms. One tool for all your downloads.' },
    { Icon: UserX, title: 'No Registration', desc: 'Start downloading immediately. No account creation, no email verification.' },
  ];

  const howItWorks = [
    { Icon: ClipboardPaste, title: 'Paste Your Link', desc: 'Copy the URL from any supported platform and paste it into the download box.' },
    { Icon: Server, title: 'Choose Server', desc: 'Select from multiple high-speed servers located worldwide for the fastest download.' },
    { Icon: ScanSearch, title: 'Verify & Wait', desc: 'Our system verifies the link and prepares your download. This takes just a few seconds.' },
    { Icon: FileCheck, title: 'Download', desc: "Click the download button and save the file directly to your device. It's that simple!" },
  ];

  const stats = [
    { value: '10M+', label: 'Downloads', Icon: FileDown },
    { value: '50+', label: 'Platforms', Icon: Globe },
    { value: '99.9%', label: 'Uptime', Icon: Zap },
    { value: '5M+', label: 'Happy Users', Icon: UserX },
  ];

  const faqs = [
    { q: 'Is LinkFlow free to use?', a: 'Yes! LinkFlow is completely free. No hidden charges, no premium plans required.' },
    { q: 'What platforms are supported?', a: 'We support Terabox, Ullu, Alt Balaji, MX Player, and 40+ more platforms.' },
    { q: 'Do I need to create an account?', a: 'No registration required. Just paste your link and download instantly.' },
    { q: 'Is it safe to use?', a: 'Absolutely. All links are verified and scanned before processing. We use secure connections throughout.' },
    { q: 'Can I use LinkFlow on my phone?', a: 'Yes! LinkFlow is fully optimized for mobile devices. Works perfectly on Android and iOS browsers.' },
    { q: 'Why are there multiple redirect pages?', a: 'The redirect process includes link verification, security scanning, and server connection steps to ensure a safe download.' },
    { q: 'What file formats are supported?', a: 'LinkFlow supports all file formats including MP4, MKV, AVI, MP3, PDF, ZIP, and many more.' },
    { q: 'How fast are the downloads?', a: 'Download speed depends on your internet connection. Our servers support speeds up to 1Gbps for maximum throughput.' },
  ];


  return (
    <div className="relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E6BA8] opacity-30 blur-[120px] animate-float-1"></div>
        <div className="absolute top-[30%] right-[-15%] w-[50%] h-[70%] rounded-full bg-[#002472] opacity-40 blur-[150px] animate-float-2"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#A6E1FA] opacity-20 blur-[120px] animate-float-3"></div>
      </div>

      <div className="relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#A6E1FA]/20 rounded-full text-sm font-medium text-[#A6E1FA] mb-8 bg-[#001C55]/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#A6E1FA] shadow-[0_0_8px_#A6E1FA] animate-pulse" />
                Next-Gen Video Downloader
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Download Anything <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6E1FA] to-[#0E6BA8]">
                  From Anywhere.
                </span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Experience next-generation speed and precision. Securely download files from 50+ platforms with zero ads and zero limits.
              </p>
            </div>

            {/* Download Input Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <LiquidGlassAdvanced intensity="heavy" className="p-2 sm:p-3 rounded-[2rem] mx-auto max-w-2xl shadow-2xl shadow-[#0E6BA8]/20">
                <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A6E1FA]/60">
                      <LinkIcon className="w-5 h-5" />
                    </div>
                    <input
                      id="url-input"
                      type="text"
                      value={url}
                      onChange={(e) => { setUrl(e.target.value); setError(''); }}
                      placeholder="Paste your download link here..."
                      className="w-full pl-14 pr-4 py-4 rounded-2xl bg-[#00072D]/40 border border-[#002472]/50 text-white placeholder:text-gray-500 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#0E6BA8]/50 transition-all duration-300 h-full"
                      autoComplete="off"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handlePaste}
                      className="px-5 py-4 bg-[#001C55]/50 hover:bg-[#002472]/70 border border-[#A6E1FA]/20 rounded-2xl text-[#A6E1FA] font-medium transition-all duration-300 flex items-center justify-center specular-hover group"
                      title="Paste from clipboard"
                    >
                      <ClipboardPaste className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                    
                    <button 
                      type="submit" 
                      className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-br from-[#A6E1FA] to-[#0E6BA8] hover:from-white hover:to-[#A6E1FA] text-[#00072D] font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,107,168,0.4)] specular-hover group"
                    >
                      <Download className="w-5 h-5 group-hover:block transition-all" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </form>
              </LiquidGlassAdvanced>
              
              {error && (
                <p className="text-sm text-red-400 flex items-center justify-center gap-1.5 mt-4 animate-fade-in">
                  <Shield className="w-4 h-4" />
                  {error}
                </p>
              )}
            </motion.div>

            {/* Platform tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <span className="text-sm text-gray-400 mr-2">Supports:</span>
              {['Terabox', 'Ullu', 'Alt Balaji', 'MX Player'].map((name) => (
                <span key={name} className="px-3 py-1 text-xs font-medium text-[#A6E1FA] bg-[#001C55]/40 rounded-full border border-[#002472]">
                  {name}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium text-white bg-[#0E6BA8]/50 rounded-full shadow-[0_0_10px_rgba(14,107,168,0.3)]">
                +40 more
              </span>
            </div>
          </div>
        </section>

        {/* ===== STATS BANNER ===== */}
        <section className="py-12 border-y border-white/5 bg-[#001C55]/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {stats.map(({ value, label, Icon }, i) => (
                <div key={label} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-2xl bg-[#001C55]/50 flex items-center justify-center mb-4 border border-[#002472]">
                    <Icon className="w-6 h-6 text-[#A6E1FA]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SUPPORTED PLATFORMS ===== */}
        <section id="platforms" className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">One tool. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6E1FA] to-[#0E6BA8]">Every platform.</span></h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                Seamlessly download content from over 50 major streaming and cloud storage services with a native iOS-like experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <LiquidGlassAdvanced className="p-6 rounded-[2rem] cursor-pointer h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#002472] to-[#001C55] flex items-center justify-center flex-shrink-0 shadow-inner border border-white/10 group-hover/glass:bg-[#0E6BA8]/20 transition-colors duration-500">
                      <Download className="w-6 h-6 text-[#A6E1FA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-2 group-hover/glass:text-[#A6E1FA] transition-colors">{platform.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{platform.desc}</p>
                    </div>
                  </div>
                  </LiquidGlassAdvanced>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how-it-works" className="py-20 sm:py-32 border-t border-white/5 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001C55]/10 to-transparent pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Engineered for <span className="text-[#A6E1FA]">Simplicity</span></h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">Four elegant steps to bypass walls and get your files directly on your device.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#002472] to-transparent z-0"></div>

              {howItWorks.map((item, i) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <LiquidGlassAdvanced as="div" className="w-24 h-24 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-black/20">
                    <item.Icon className="w-10 h-10 text-[#A6E1FA]" strokeWidth={1.5} />
                  </LiquidGlassAdvanced>
                  <div className="text-xs font-bold text-[#0E6BA8] tracking-widest mb-3 uppercase">Step {i + 1}</div>
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">The <span className="text-[#0E6BA8]">LiquidEngine</span> Difference</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <LiquidGlassAdvanced className="p-8 rounded-[2.5rem] group/card h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mb-6 border border-white/5 group-hover/card:scale-110 transition-transform duration-500 shadow-inner group-hover/card:shadow-[0_0_20px_rgba(14,107,168,0.3)]">
                      <feature.Icon className="w-8 h-8 text-[#A6E1FA]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-white text-2xl mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </LiquidGlassAdvanced>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-20 sm:py-32 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Common <span className="text-[#A6E1FA]">Questions</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <LiquidGlassAdvanced className="p-6 rounded-[2rem] cursor-default text-left">
                    <h3 className="font-bold text-white text-lg mb-3 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#0E6BA8]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#A6E1FA]/30 text-[#A6E1FA] font-bold text-sm">
                        Q
                      </div>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-12 pr-4">{faq.a}</p>
                  </LiquidGlassAdvanced>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 relative overflow-hidden flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001C55]/30"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full max-w-4xl mx-4 sm:mx-6 relative z-10"
          >
            <LiquidGlassAdvanced intensity="heavy" className="p-12 sm:p-20 rounded-[3rem] text-center w-full shadow-2xl shadow-black">
              <motion.div 
                animate={{ scale: 1.1 }} 
                // @ts-expect-error type error in framer motion
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" as const }}
              >
                <Download className="w-12 h-12 text-[#A6E1FA]/80 mx-auto mb-6" strokeWidth={1.5} />
              </motion.div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Ready to Flow?</h2>
              <p className="text-gray-300 text-xl mb-12 max-w-xl mx-auto">
                Drop your link at the top and experience the fastest download aggregator on the web.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-5 bg-white text-[#00072D] font-bold rounded-2xl hover:bg-[#A6E1FA] transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(166,225,250,0.4)] group"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2"
                >
                  <ArrowUp className="w-6 h-6" />
                  <span className="text-lg">Back to Top</span>
                </motion.div>
              </button>
            </LiquidGlassAdvanced>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
