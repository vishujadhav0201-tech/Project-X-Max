import { ChevronRight } from 'lucide-react';

interface ServerButtonProps {
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  onClick: () => void;
  delay?: number;
}

export default function ServerButton({ label, sublabel, icon, onClick, delay = 0 }: ServerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 rounded-2xl bg-[#001C55]/40 hover:bg-[#002472]/60 border border-white/5 hover:border-[#A6E1FA]/30 text-left transition-all duration-300 flex items-center gap-4 group animate-fade-in-up relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      <div className="w-12 h-12 rounded-xl bg-[#00072D]/50 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#A6E1FA]/50 transition-colors duration-300 relative z-10">
        <div className="text-[#A6E1FA] opacity-80 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      </div>
      <div className="flex-1 text-left relative z-10">
        <div className="font-bold text-[16px] text-white group-hover:text-[#A6E1FA] transition-colors">{label}</div>
        {sublabel && (
          <div className="text-sm text-gray-400 mt-0.5">{sublabel}</div>
        )}
      </div>
      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#A6E1FA] transition-colors flex-shrink-0 relative z-10" />
    </button>
  );
}
