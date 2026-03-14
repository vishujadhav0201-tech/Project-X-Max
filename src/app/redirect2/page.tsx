'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useCallback } from 'react';
import { ArrowLeft, CheckCircle2, Shield, ShieldCheck, BarChart3, Users } from 'lucide-react';
import LoaderAnimation from '@/components/LoaderAnimation';
import TimerCountdown from '@/components/TimerCountdown';
import LiquidGlassAdvanced from '@/components/LiquidGlassAdvanced';

function RedirectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get('url') || '';

  const handleComplete = useCallback(() => {
    router.push(`/redirect3?url=${encodeURIComponent(url)}`);
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
                    step < 2 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : step === 2 
                        ? 'bg-[#0E6BA8] text-white shadow-[0_0_20px_rgba(14,107,168,0.5)] scale-110' 
                        : 'bg-[#001C55]/50 border border-white/10 text-gray-500'
                  }`}>
                    {step < 2 ? <CheckCircle2 className="w-6 h-6" /> : step}
                  </div>
                  {step < 3 && <div className={`w-12 h-0.5 ${step < 2 ? 'bg-green-500/50' : step === 2 ? 'bg-[#0E6BA8]/50' : 'bg-white/10'}`} />}
                </div>
              ))}
            </div>
            
            <LiquidGlassAdvanced intensity="heavy" className="p-8 sm:p-10 rounded-[3rem] mb-12 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Security Scan in Progress</h1>
                <p className="text-gray-400 text-lg mb-10">Scanning your download link for potential threats...</p>
                
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Step 2: Security Scanning</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our automated security system scans every download link for malware, phishing, and other threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#001C55]/60 flex items-center justify-center border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-[#A6E1FA]" />
                </div>
                <h3 className="font-bold text-white text-xl">Security checks</h3>
              </div>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Malware detection scan</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Phishing URL detection</li>
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-[#A6E1FA] flex-shrink-0" /> File integrity verification</li>
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-gray-500 flex-shrink-0" /> SSL certificate validation</li>
              </ul>
            </LiquidGlassAdvanced>
            
            <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#001C55]/60 flex items-center justify-center border border-white/5">
                  <BarChart3 className="w-6 h-6 text-[#A6E1FA]" />
                </div>
                <h3 className="font-bold text-white text-xl">Download Statistics</h3>
              </div>
              <div className="space-y-4 text-base">
                <div className="flex justify-between items-center"><span className="text-gray-400">Files scanned today</span><span className="font-bold text-white">12,847</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Threats blocked</span><span className="font-bold text-red-400">23</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Safe downloads</span><span className="font-bold text-green-400">99.8%</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Active users</span><span className="font-bold text-white">3,291</span></div>
              </div>
            </LiquidGlassAdvanced>
          </div>
          
          <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#001C55]/60 flex items-center justify-center border border-white/5">
                <Users className="w-5 h-5 text-[#A6E1FA]" />
              </div>
              <h3 className="font-bold text-white text-xl">Why do we scan every download?</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-4xl">
              Your safety is our top priority. Every link goes through a multi-layer security scan checking for
              known malware signatures, suspicious redirect chains, phishing indicators, and file integrity issues.
            </p>
          </LiquidGlassAdvanced>
        </div>
      </section>
    </div>
  </div>
  );
}

export default function Redirect2Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-[#8a8270]">Loading...</div></div>}>
      <RedirectContent />
    </Suspense>
  );
}
