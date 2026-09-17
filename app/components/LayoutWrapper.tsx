"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Users, Briefcase, BookOpen, X, Sparkles, Home } from 'lucide-react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Cek apakah rute saat ini adalah halaman welcome
  const isWelcomePage = pathname === '/';

  // Efek scroll untuk header transparan mewah
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Data Anggota', href: '/profil', icon: Users },
    { name: 'Tugas Industri', href: '/industri', icon: Briefcase   },
    { name: 'Tugas Pendidikan', href: '/pendidikan', icon: BookOpen },
  ];

  return (
    /* Latar belakang otomatis berubah jika di halaman welcome, selain itu tetap bg-zinc-50 */
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${isWelcomePage ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      
      {/* Definisi Style Animasi Masuk Lebih Lama & Mulus */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* Top Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 border-b 
        ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 shadow-xl' : 'bg-zinc-950 border-zinc-900'}`}>
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white group">
            <Sparkles className="text-amber-500 hover:rotate-90 transition-transform duration-300" size={20} />
            <span>UI/UX DESIGN</span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium
                    ${isActive 
                      ? 'bg-zinc-900 text-amber-500 shadow-inner border border-zinc-800' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-950/50'}`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} className={isActive ? 'text-amber-500' : 'text-zinc-400'} />
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Tombol Menu Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white md:hidden transition-colors border border-zinc-800"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Dropdown Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium
                    ${isActive ? 'bg-zinc-900 text-amber-500' : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-white'}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content dengan Kelas Animasi 'animate-fade-in-up' */}
      <main className="flex-1 pt-12 md:pt-24 px-6 md:px-10 pb-10 max-w-7xl w-full mx-auto animate-fade-in-up">
        {children}
      </main>
    </div>
  );
}