
import Link from 'next/link';
import { ChevronRight, Terminal } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="w-full h-[calc(85vh-80px)] flex flex-col items-center justify-center -mt-6">
      {/* Background Grid Pattern ala Next.js (full width/height) */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 90%)'
        }}
      />  

      {/* Main Container - transparent, floating above the background */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-6">

        {/* Headline Utama */}
        <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-150 tracking-normal leading-tight text-center max-w-4xl drop-shadow-sm">
          Portofolio UI/UX Design
        </h1>

        {/* Sub-Headline */}
        <p className="relative z-10 mt-6 text-lg md:text-xl text-zinc-400 text-center max-w-2xl leading-relaxed">
          Dibangun khusus untuk pengelolaan tugas industri dan pendidikan secara terpusat, aman, dan efisien.
        </p>

        {/* Tombol Aksi (CTA) - Style Next.js */}
        <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/industri"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900 text-white hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg"
          >
            Lihat Industri <ChevronRight size={18} strokeWidth={2.5} />
          </Link>
          <Link 
            href="/pendidikan"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-800 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg"
          >
            Lihat Pendidikan <ChevronRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Terminal / Code Snippet */}
        <div className="relative z-10 mt-16 px-6 py-3 rounded-lg bg-white border border-zinc-200 flex items-center gap-3 shadow-sm group hover:border-zinc-300 transition-colors cursor-default">
          <Terminal size={16} className="text-zinc-400" />
          <code className="text-xs md:text-sm font-mono text-zinc-500 transition-colors">
            <span className="text-amber-500">~</span> PTI - A || --angkatan =<span className="text-amber-600"> 2024</span>
          </code>
        </div>
      </div>
    </div>
  );
}
