'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useCallback } from 'react';
import { ArrowLeft, CheckCircle2, Download, ShieldCheck, FileCheck } from 'lucide-react';
import LoaderAnimation from '@/components/LoaderAnimation';
import TimerCountdown from '@/components/TimerCountdown';
import LiquidGlassAdvanced from '@/components/LiquidGlassAdvanced';

function RedirectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get('url') || '';

  const handleComplete = useCallback(() => {
    router.push(`/server-busy?url=${encodeURIComponent(url)}`);
  }, [router, url]);

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E6BA8] opacity-30 blur-[120px] animate-float-1"></div>
        </div>
        <div className="relative z-10 w-full max-w-md">
          <LiquidGlassAdvanced className="p-8 text-center animate-fade-in rounded-[2rem]">
            <h2 className="text-xl font-bold text-white mb-2">No URL Found</h2>
            <p className="text-gray-400 text-sm mb-6">Something went wrong. Please start over.</p>
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
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    step < 3 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-[#0E6BA8] text-white shadow-[0_0_20px_rgba(14,107,168,0.5)] scale-110'
                  }`}>
                    {step < 3 ? <CheckCircle2 className="w-6 h-6" /> : step}
                  </div>
                  {step < 3 && <div className={`w-12 h-0.5 ${step < 3 ? 'bg-green-500/50' : 'bg-white/10'}`} />}
                </div>
              ))}
            </div>
            
            <LiquidGlassAdvanced intensity="heavy" className="p-8 sm:p-10 rounded-[3rem] mb-12 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Almost There!</h1>
                <p className="text-gray-400 text-lg mb-10">Finalizing your download link...</p>
                
                <div className="flex justify-center mb-10">
                  <LoaderAnimation />
                </div>
                
                <TimerCountdown seconds={10} onComplete={handleComplete} />
              </div>
            </LiquidGlassAdvanced>
          </div>
        </div>

      <section className="py-16 border-t border-white/5 bg-[#001C55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Step 3: Generating Download Link</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Creating a direct download link optimized for speed and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem]">
              <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mx-auto mb-6 border border-white/5">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Link Verified</h3>
              <p className="text-gray-400">URL is valid and accessible</p>
            </LiquidGlassAdvanced>
            
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem]">
              <div className="w-16 h-16 rounded-2xl bg-[#001C55]/60 flex items-center justify-center mx-auto mb-6 border border-white/5">
                <ShieldCheck className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Security Passed</h3>
              <p className="text-gray-400">No threats detected</p>
            </LiquidGlassAdvanced>
            
            <LiquidGlassAdvanced className="p-8 text-center rounded-[2rem] border border-[#A6E1FA]/30 shadow-[0_0_30px_rgba(166,225,250,0.1)]">
              <div className="w-16 h-16 rounded-2xl bg-[#0E6BA8]/20 flex items-center justify-center mx-auto mb-6 border border-[#A6E1FA]/50 animate-pulse">
                <FileCheck className="w-8 h-8 text-[#A6E1FA]" />
              </div>
              <h3 className="font-bold text-[#A6E1FA] text-xl mb-2">Generating Link</h3>
              <p className="text-gray-300">Creating direct download URL</p>
            </LiquidGlassAdvanced>
          </div>
          
          <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#001C55]/60 flex items-center justify-center border border-white/5">
                <Download className="w-5 h-5 text-[#A6E1FA]" />
              </div>
              <h3 className="font-bold text-white text-xl">About LinkFlow Downloads</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-4xl">
              LinkFlow processes millions of downloads every month from platforms like Terabox, Ullu, Alt Balaji,
              and many more. If you experience issues, try using a different server. Our Mirror Server has the highest availability.
            </p>
          </LiquidGlassAdvanced>
        </div>
      </section>
    </div>
  </div>
  );
}

export default function Redirect3Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-[#8a8270]">Loading...</div></div>}>
      <RedirectContent />
    </Suspense>
  );
}
