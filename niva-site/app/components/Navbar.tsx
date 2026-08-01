'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#161E2E]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#161E2E] text-[#F7F4EF] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-widest text-lg block leading-none text-[#161E2E]">
              NIVA
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#B59A6D] font-semibold uppercase mt-1">
              RETAIL CONSULTING
            </span>
          </div>
        </Link>

        {/* MENÜ LİNKLERİ */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-[#161E2E]">
          <Link 
            href="/" 
            className="hover:text-[#B59A6D] transition-colors py-2"
          >
            ANA SAYFA
          </Link>
          <Link 
            href="/hakkimizda" 
            className="hover:text-[#B59A6D] transition-colors py-2"
          >
            HAKKIMIZDA
          </Link>
          
          {/* Doğrudan Sayfaya Yönlendiren Hizmetlerimiz Linki */}
          <Link 
            href="/hizmetlerimiz" 
            className="hover:text-[#B59A6D] transition-colors py-2"
          >
            HİZMETLERİMİZ
          </Link>

          <Link 
            href="/metodoloji" 
            className="hover:text-[#B59A6D] transition-colors py-2"
          >
            METODOLOJİ
          </Link>
          <Link 
            href="/projelerimiz" 
            className="hover:text-[#B59A6D] transition-colors py-2"
          >
            PROJELERİMİZ
          </Link>
        </nav>

        {/* İLETİŞİM BUTONU */}
        <Link
          href="/iletisim"
          className="bg-[#B59A6D] hover:bg-[#A3875B] text-[#F7F4EF] text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2"
        >
          <span>İLETİŞİM</span>
          <span>↗</span>
        </Link>

      </div>
    </header>
  );
}