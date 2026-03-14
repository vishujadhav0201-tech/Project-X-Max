import { Loader2 } from 'lucide-react';

export default function LoaderAnimation() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <Loader2 className="w-14 h-14 text-[#0E6BA8] animate-spin" strokeWidth={2} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#0E6BA8]/20"></div>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#0E6BA8] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#A6E1FA] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#0E6BA8] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
