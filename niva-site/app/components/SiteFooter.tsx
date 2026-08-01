'use client';

import React from 'react';
import Link from 'next/link';

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FBF9F6] border-t border-[#0F172A]/10 pt-16 pb-12 text-[#0F172A] mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Üst Kısım */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-[#0F172A]/10 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#B89765] text-white flex items-center justify-center font-bold text-xl">
              N
            </div>
            <div>
              <span className="font-serif font-bold tracking-wider text-xl block leading-none text-[#0F172A]">
                NIVA YÖNETİM
              </span>
              <span className="text-[11px] tracking-widest text-[#B89765] font-semibold uppercase block mt-1">
                PERAKENDE VE YÖNETİM DANIŞMANLIĞI
              </span>
            </div>
          </div>

          <Link
            href="/iletisim"
            className="px-8 py-3.5 bg-[#0F172A] hover:bg-[#B89765] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
          >
            İLETİŞİM ↗
          </Link>
        </div>

        {/* Orta Kısım */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
          
          <div className="md:col-span-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B89765] font-semibold block mb-6">
              MENÜ
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-[#334155]">
              <Link href="/hakkimizda" className="hover:text-[#B89765] transition-colors font-normal">
                Hakkımızda
              </Link>
              <Link href="/hizmetlerimiz" className="hover:text-[#B89765] transition-colors font-normal">
                Hizmetlerimiz
              </Link>
              <Link href="/metodoloji" className="hover:text-[#B89765] transition-colors font-normal">
                Metodoloji
              </Link>
              <Link href="/projelerimiz" className="hover:text-[#B89765] transition-colors font-normal">
                Projelerimiz
              </Link>
              <Link href="/iletisim" className="hover:text-[#B89765] transition-colors font-normal">
                İletişim
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B89765] font-semibold block mb-6">
              İLETİŞİM
            </span>
            <div className="space-y-4 text-xs text-[#334155]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0F172A]/5 flex items-center justify-center text-[#0F172A]">
                  
                </div>
                <span>+90 542 849 93 98</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0F172A]/5 flex items-center justify-center text-[#0F172A]">
                  📞
                </div>
                <span>+994 99 230 10 22</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0F172A]/5 flex items-center justify-center text-[#0F172A]">
                  ✉️
                </div>
                <a href="mailto:nivaconsultingtr@gmail.com" className="hover:text-[#B89765] transition-colors">
                  nivaconsultingtr@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Kısım */}
        <div className="pt-8 border-t border-[#0F172A]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#64748B] gap-4">
          <div>
            © 2026 NİVA YÖNETİM - TÜM HAKLARI SAKLIDIR . KVKK . GİZLİLİK . ÇEREZLER
          </div>
          <button 
            onClick={scrollToTop}
            className="text-[#B89765] hover:text-[#0F172A] uppercase tracking-widest transition-colors flex items-center gap-1 font-semibold"
          >
            BAŞA DÖN ↑
          </button>
        </div>

      </div>
    </footer>
  );
}