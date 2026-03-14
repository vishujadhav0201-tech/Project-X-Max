'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Server, Globe, HardDrive, AlertTriangle, ArrowLeft, Download, Shield, Zap, Smartphone, CheckCircle2 } from 'lucide-react';
import ServerButton from '@/components/ServerButton';
import LiquidGlassAdvanced from '@/components/LiquidGlassAdvanced';

function DownloadContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get('url') || '';

  const handleServerClick = () => {
    router.push(`/redirect1?url=${encodeURIComponent(url)}`);
  };

  const servers = [
    { label: 'Server 1 — US East', sublabel: 'High Speed • Recommended', icon: <Server className="w-5 h-5 text-[#A6E1FA] group-hover:text-white transition-colors" /> },
    { label: 'Server 2 — EU West', sublabel: 'Standard Speed', icon: <Globe className="w-5 h-5 text-[#A6E1FA] group-hover:text-white transition-colors" /> },
    { label: 'Server 3 — Asia Pacific', sublabel: 'Standard Speed', icon: <Globe className="w-5 h-5 text-[#A6E1FA] group-hover:text-white transition-colors" /> },
    { label: 'Mirror Server', sublabel: 'Backup • Always Available', icon: <HardDrive className="w-5 h-5 text-[#A6E1FA] group-hover:text-white transition-colors" /> },
  ];

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E6BA8] opacity-30 blur-[120px] animate-float-1"></div>
        </div>
        <div className="relative z-10 w-full max-w-md">
          <LiquidGlassAdvanced className="p-8 text-center animate-fade-in rounded-[2rem]">
            <AlertTriangle className="w-12 h-12 text-[#A6E1FA] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">No URL Provided</h2>
            <p className="text-gray-400 text-sm mb-6">Please go back to the homepage and enter a URL.</p>
            <button onClick={() => router.push('/')} className="px-6 py-3 bg-[#001C55]/80 hover:bg-[#002472] border border-[#A6E1FA]/20 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center mx-auto group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>
          </LiquidGlassAdvanced>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E6BA8] opacity-30 blur-[120px] animate-float-1"></div>
        <div className="absolute top-[30%] right-[-15%] w-[50%] h-[70%] rounded-full bg-[#002472] opacity-40 blur-[150px] animate-float-2"></div>
      </div>

      <div className="relative z-10 pt-24 sm:pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-[#001C55]/60 border border-white/5 mb-6 shadow-inner shadow-[#0E6BA8]/20">
              <Download className="w-10 h-10 text-[#A6E1FA]" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Select Server</h1>
            <p className="text-gray-400 text-lg">Choose a high-speed server to begin your download.</p>
          </div>

          {/* URL preview */}
          <LiquidGlassAdvanced intensity="light" className="p-4 mb-8 animate-fade-in rounded-2xl" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 text-sm overflow-hidden">
              <span className="px-3 py-1.5 rounded-xl bg-[#001C55] border border-[#002472] text-[#A6E1FA] font-bold text-xs flex-shrink-0 tracking-wide">URL</span>
              <span className="text-gray-300 truncate text-sm">{decodeURIComponent(url)}</span>
            </div>
          </LiquidGlassAdvanced>

          {/* Server buttons */}
          <div className="space-y-4 mb-16">
            {servers.map((server, i) => (
              <ServerButton
                key={server.label}
                label={server.label}
                sublabel={server.sublabel}
                icon={server.icon}
                onClick={handleServerClick}
                delay={(i + 1) * 100}
              />
            ))}
          </div>
        </div>

      {/* Info section */}
      <section className="py-20 border-t border-white/5 bg-[#001C55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">About This Download</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem]">
              <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mx-auto mb-6 border border-white/5">
                <Shield className="w-8 h-8 text-[#A6E1FA]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Virus Scanned</h3>
              <p className="text-gray-400">All files are automatically scanned for threats.</p>
            </LiquidGlassAdvanced>
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem]">
              <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mx-auto mb-6 border border-white/5">
                <Zap className="w-8 h-8 text-[#A6E1FA]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">High Speed</h3>
              <p className="text-gray-400">Multiple servers ensure maximum download speed.</p>
            </LiquidGlassAdvanced>
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem]">
              <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mx-auto mb-6 border border-white/5">
                <Smartphone className="w-8 h-8 text-[#A6E1FA]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">All Devices</h3>
              <p className="text-gray-400">Works perfectly on Android, iOS, Windows, and Mac.</p>
            </LiquidGlassAdvanced>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {['Verified Link', 'Secure Connection', 'No Malware', 'Fast Download'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0E6BA8]" />
                <span className="text-gray-300 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-[#8a8270]">Loading...</div></div>}>
      <DownloadContent />
    </Suspense>
  );
}
