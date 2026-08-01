'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* MASAÜSTÜ MENÜ LİNKLERİ */}
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

        {/* MASAÜSTÜ İLETİŞİM BUTONU */}
        <div className="hidden md:flex items-center">
          <Link
            href="/iletisim"
            className="bg-[#B59A6D] hover:bg-[#A3875B] text-[#F7F4EF] text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2"
          >
            <span>İLETİŞİM</span>
            <span>↗</span>
          </Link>
        </div>

        {/* MOBİL MENÜ BUTONU (Sadece Telefonda Görünür) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü Aç/Kapat"
          className="md:hidden text-[#161E2E] p-2 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            /* Çarpı İkonu */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* 3 Çizgi (Hamburger) İkonu */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* MOBİL AÇILIR MENÜ (Telefonda Butona Basılınca Açılır) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EF] border-b border-[#161E2E]/10 px-6 py-6 space-y-4 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-semibold uppercase tracking-widest text-[#161E2E] hover:text-[#B59A6D] py-2 border-b border-[#161E2E]/5"
          >
            ANA SAYFA
          </Link>
          <Link
            href="/hakkimizda"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-semibold uppercase tracking-widest text-[#161E2E] hover:text-[#B59A6D] py-2 border-b border-[#161E2E]/5"
          >
            HAKKIMIZDA
          </Link>
          <Link
            href="/hizmetlerimiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-semibold uppercase tracking-widest text-[#161E2E] hover:text-[#B59A6D] py-2 border-b border-[#161E2E]/5"
          >
            HİZMETLERİMİZ
          </Link>
          <Link
            href="/metodoloji"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-semibold uppercase tracking-widest text-[#161E2E] hover:text-[#B59A6D] py-2 border-b border-[#161E2E]/5"
          >
            METODOLOJİ
          </Link>
          <Link
            href="/projelerimiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xs font-semibold uppercase tracking-widest text-[#161E2E] hover:text-[#B59A6D] py-2 border-b border-[#161E2E]/5"
          >
            PROJELERİMİZ
          </Link>
          
          <div className="pt-2">
            <Link
              href="/iletisim"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#B59A6D] hover:bg-[#A3875B] text-[#F7F4EF] text-xs font-semibold uppercase tracking-widest py-3 rounded-full text-center flex items-center justify-center gap-2 w-full shadow-sm"
            >
              <span>İLETİŞİM</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}