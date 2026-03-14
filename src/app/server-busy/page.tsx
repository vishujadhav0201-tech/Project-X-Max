'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { AlertTriangle, Server, ChevronRight, RefreshCw, TrendingUp, Lightbulb } from 'lucide-react';
import LiquidGlassAdvanced from '@/components/LiquidGlassAdvanced';

function ServerBusyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get('url') || '';

  const handleServerClick = () => {
    if (url) {
      router.push(`/redirect1?url=${encodeURIComponent(url)}`);
    } else {
      router.push('/');
    }
  };

  const alternateServers = [
    { label: 'Mirror Server', sublabel: 'Backup — Always Available', recommended: true },
    { label: 'Server 2 — EU West', sublabel: 'Standard Speed', recommended: false },
    { label: 'Server 3 — Asia Pacific', sublabel: 'Standard Speed', recommended: false },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0E6BA8] opacity-30 blur-[120px] animate-float-1"></div>
        <div className="absolute top-[30%] right-[-15%] w-[50%] h-[70%] rounded-full bg-[#002472] opacity-40 blur-[150px] animate-float-2"></div>
      </div>

      <div className="relative z-10 pt-24 sm:pt-32 pb-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-[#001C55]/60 border border-white/5 mb-6 shadow-inner shadow-[#0E6BA8]/20">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Server 1 is Currently Busy</h1>
            <p className="text-gray-300 text-lg mb-2 max-w-md mx-auto">
              Due to high demand, <span className="font-semibold text-white">Server 1 (US East)</span> is
              experiencing heavy traffic and is temporarily unavailable.
            </p>
            <p className="text-gray-400 text-sm mb-10">
              Please try one of the alternate servers below, or start again.
            </p>

            <div className="space-y-4 text-left mb-8">
              {alternateServers.map((server, i) => (
                <button
                  key={server.label}
                  onClick={handleServerClick}
                  className="w-full p-4 rounded-2xl bg-[#001C55]/40 hover:bg-[#002472]/60 border border-white/5 hover:border-[#A6E1FA]/30 transition-all duration-300 flex items-center gap-4 group animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${server.recommended ? 'bg-[#0E6BA8]/40 border border-[#A6E1FA]/50 shadow-[0_0_15px_rgba(166,225,250,0.2)]' : 'bg-[#00072D]/50 border border-white/5'} flex items-center justify-center flex-shrink-0 group-hover:border-[#A6E1FA]/50 transition-colors duration-300 relative z-10`}>
                    <Server className={`w-6 h-6 ${server.recommended ? 'text-[#A6E1FA]' : 'text-gray-400 group-hover:text-white'} transition-colors`} />
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="font-bold text-[16px] text-white flex items-center gap-2 group-hover:text-[#A6E1FA] transition-colors">
                      {server.label}
                      {server.recommended && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-[#A6E1FA]/20 text-[#A6E1FA] border border-[#A6E1FA]/40 rounded-full uppercase tracking-wider">Recommended</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">{server.sublabel}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#A6E1FA] transition-colors flex-shrink-0 relative z-10" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-sm text-gray-500 font-medium">or</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <button onClick={() => router.push('/')} className="w-full py-4 rounded-2xl border border-[#A6E1FA]/20 bg-transparent hover:bg-[#A6E1FA]/10 text-white font-medium transition-colors flex items-center justify-center">
              <RefreshCw className="w-5 h-5 mr-2" />
              Start Again from Homepage
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 border-t border-white/5 bg-[#001C55]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why is the server busy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
              <h3 className="font-bold text-white text-xl mb-3 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-[#A6E1FA]" /> High Traffic</h3>
              <p className="text-gray-400 leading-relaxed">
                LinkFlow serves millions of users daily. During peak hours, some servers may experience
                congestion. Our Mirror Server handles overflow traffic seamlessly.
              </p>
            </LiquidGlassAdvanced>
            <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
              <h3 className="font-bold text-white text-xl mb-3 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-[#A6E1FA]" /> What should I do?</h3>
              <p className="text-gray-400 leading-relaxed">
                We recommend the <strong>Mirror Server</strong> for high-availability downloads.
                Server 2 and Server 3 may also have lower traffic depending on your region.
              </p>
            </LiquidGlassAdvanced>
          </div>

          <LiquidGlassAdvanced className="p-8 rounded-[2rem]">
            <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-3"><Server className="w-6 h-6 text-[#A6E1FA]" /> Server Status</h3>
            <div className="space-y-4">
              {[
                { name: 'Server 1 — US East', status: 'Busy', color: 'text-red-400', dot: 'bg-red-400' },
                { name: 'Server 2 — EU West', status: 'Available', color: 'text-green-400', dot: 'bg-green-400' },
                { name: 'Server 3 — Asia Pacific', status: 'Available', color: 'text-green-400', dot: 'bg-green-400' },
                { name: 'Mirror Server', status: 'Available — Recommended', color: 'text-green-400', dot: 'bg-green-400' },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 relative">
                  <span className="text-gray-300 font-medium">{s.name}</span>
                  <span className={`flex items-center gap-2 text-sm font-semibold ${s.color}`}>
                    <span className={`w-2 h-2 rounded-full ${s.dot} ${s.status.includes('Available') ? 'animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'shadow-[0_0_8px_rgba(248,113,113,0.5)]'}`}></span>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </LiquidGlassAdvanced>
        </div>
      </section>
    </div>
  );
}

export default function ServerBusyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-[#8a8270]">Loading...</div></div>}>
      <ServerBusyContent />
    </Suspense>
  );
}
