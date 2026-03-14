'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface TimerCountdownProps {
  seconds: number;
  onComplete: () => void;
}

export default function TimerCountdown({ seconds, onComplete }: TimerCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowButton(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const percentage = ((seconds - timeLeft) / seconds) * 100;

  return (
    <div className="w-full max-w-sm mx-auto space-y-5">
      {/* Timer display */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#001C55]/60 border border-[#A6E1FA]/30 mb-5 shadow-[0_0_15px_rgba(166,225,250,0.2)]">
          {showButton ? (
            <CheckCircle className="w-10 h-10 text-[#A6E1FA]" />
          ) : (
            <span className="text-3xl font-bold text-white tabular-nums">
              {timeLeft}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 font-medium">
          {showButton ? (
            <span className="text-[#A6E1FA] font-semibold">Your link is ready! Click below to continue.</span>
          ) : (
            <>
              Your download link will be ready in{' '}
              <span className="text-white font-semibold">{timeLeft} second{timeLeft !== 1 ? 's' : ''}</span>
            </>
          )}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2.5 bg-[#001C55]/50 rounded-full overflow-hidden border border-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#0E6BA8] to-[#A6E1FA] transition-[width] duration-1000 ease-linear shadow-[0_0_10px_rgba(166,225,250,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Next button - appears after timer completes */}
      {showButton && (
        <div className="animate-fade-in-up pt-4">
          <button
            onClick={onComplete}
            className="w-full px-8 py-4 bg-gradient-to-br from-[#A6E1FA] to-[#0E6BA8] hover:from-white hover:to-[#A6E1FA] text-[#00072D] font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,107,168,0.4)] specular-hover group"
          >
            Continue to Next Step
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
