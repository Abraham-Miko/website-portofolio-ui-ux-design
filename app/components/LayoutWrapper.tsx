"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Users, Briefcase, BookOpen, X } from 'lucide-react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: 'Data Anggota', href: '/', icon: Users },
    { name: 'Tugas Industri', href: '/industri', icon: Briefcase },
    { name: 'Tugas Pendidikan', href: '/pendidikan', icon: BookOpen },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Mobile Overlay */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(true)} 
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen bg-indigo-900 text-white transition-all duration-300 z-50 flex flex-col
          ${isOpen ? 'w-64 translate-x-0' : '-translate-x-full w-64 lg:translate-x-0 lg:w-20'}`}
      >
        <div className="flex items-center justify-between p-4 h-16 border-b border-indigo-800">
          <span className={`font-bold text-lg whitespace-nowrap ${!isOpen && 'lg:hidden'}`}>
            Kelompok 8
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-indigo-800 rounded lg:hidden">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors overflow-hidden whitespace-nowrap
                  ${isActive ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}
                >
                  <Icon size={20} className="shrink-0" />
                  <span className={`${!isOpen && 'lg:hidden'}`}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <header className="bg-white shadow-sm h-16 flex items-center px-4 sticky top-0 z-30">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 mr-4 rounded-md hover:bg-slate-100 text-slate-600"
          >
            <Menu size={24} />
          </button>
          <h1 className="font-semibold text-slate-800 capitalize">
            {pathname === '/' ? 'Data Anggota' : pathname.replace('/', 'Tugas ')}
          </h1>
        </header>
        <main className="p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}