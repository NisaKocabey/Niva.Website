'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// === NAVBAR BİLEŞENİ ===
function Navbar() {
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
          
          <Link 
            href="/hizmetlerimiz" 
            className="text-[#B59A6D] font-bold py-2 border-b-2 border-[#B59A6D]"
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

// === HİZMETLER DİZİSİ ===
const SERVICES = [
  {
    id: '01',
    category: 'STRATEJİ',
    title: 'Perakende ve Yönetim Stratejileri Danışmanlığı',
    description: 'Türkiye ve Azerbaycan perakende pazarının dinamiklerine uygun olarak kârlı, sürdürülebilir ve rekabetçi yönetim stratejileri geliştiriyoruz. Stratejik analiz, finansal performans ve kurumsal dönüşüm süreçlerinde yanınızdayız.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '02',
    category: 'CHECK-UP',
    title: 'Kurumsal Perakende Check-up & Analiz',
    description: 'Mağazalarınızın, stok yapınızın ve saha operasyon süreçlerinizin röntgenini çekiyoruz. Kârlılık kayıplarını ve operasyonel aksaklıkları tespit ederek hızlı aksiyon planları sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '03',
    category: 'OPERASYON',
    title: 'Mağaza Kurulumu & Saha Operasyon Yönetimi',
    description: 'Süpermarket, gıda ve market zincirlerinde mağaza içi operasyon standartlarını kurguluyoruz. Müşteri deneyimini artırırken stok ve iş gücü verimliliğini maksimize ediyoruz.',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '04',
    category: 'KONSEPT',
    title: 'Yenileme & Mağazacılık Konsept Yönetimi',
    description: 'Mevcut mağaza ve market ağınızın yerleşim planlarını (layout), görsel reyon düzenleme standartlarını ve metrekare kârlılığını perakende standartlarına göre optimize ediyoruz.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '05',
    category: 'KİRALAMA',
    title: 'Kiralama, Lokasyon & Yatırım Analizi',
    description: 'Türkiye ve Azerbaycan’ın önde gelen cadde, bölge ve ana arter lokasyonlarında doğru mağaza ve market yeri seçimi, kira sözleşmesi müzakereleri ve lokasyon potansiyel analizleri gerçekleştiriyoruz.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '06',
    category: 'STOK & TEDARİK',
    title: 'Stok Yönetimi & Ticari Satın Alma Optimizasyonu',
    description: 'Mağaza içi stok devir hızının artırılması, fire oranlarının düşürülmesi ve tedarikçi yönetimi süreçlerinde kârlılığı artıracak raf ve satın alma stratejileri kurguluyoruz.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '07',
    category: 'ARACILIK',
    title: 'Devir & Marka İş Birliği Aracılığı',
    description: 'Perakende sektöründe zincir mağaza devirleri, franchise ağının genişletilmesi ve stratejik marka ortaklıklarında taraflar arası profesyonel ve gizli danışmanlık sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '08',
    category: 'GELİŞTİRME',
    title: 'Zincir & Şube Geliştirme Yönetimi',
    description: 'Yerel perakende markalarının ulusal zincirlere dönüşme sürecinde şubeleşme standartları, operasyon el kitapçıkları ve büyüme modelleri tasarlıyoruz.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '09',
    category: 'EĞİTİM',
    title: 'Saha & Mağazacılık Akademi Eğitimleri',
    description: 'Mağaza müdürleri, bölge sorumluları ve saha ekipleri için perakende matematiği, stok yönetimi ve müşteri ilişkileri odaklı saha akademi programları kurguluyoruz.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop'
  }
];

// === ANA SAYFA BİLEŞENİ ===
export default function HizmetlerimizPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentService = SERVICES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FBF9F6] text-[#0F172A] font-sans flex flex-col justify-between pt-20 selection:bg-[#B89765] selection:text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* ARKA PLAN GÖRSELLERİ */}
      {SERVICES.map((service, idx) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-15 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/90 to-[#FBF9F6]/60" />
        </div>
      ))}

      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="relative z-20 flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16 flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          {/* Sol/Orta İçerik Alanı */}
          <div className="lg:col-span-9 max-w-3xl">
            {/* Kategori ve Sayı */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#B59A6D] uppercase bg-[#B59A6D]/10 border border-[#B59A6D]/30 px-3 py-1 rounded-full font-bold">
                HİZMET {currentService.id}
              </span>
              <span className="text-xs font-mono text-[#0F172A]/30">|</span>
              <span className="text-xs font-mono tracking-widest text-[#B59A6D] uppercase font-semibold">
                {currentService.category}
              </span>
            </div>

            {/* Başlık */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#0F172A] tracking-tight leading-[1.15] mb-6">
              {currentService.title}
            </h1>

            {/* Detay Açıklaması */}
            <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed mb-8 max-w-2xl">
              {currentService.description}
            </p>

            {/* Buton ve Yön Kontrolleri */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/iletisim"
                className="bg-[#161E2E] hover:bg-[#1E293B] text-white font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-all shadow-md flex items-center gap-2"
              >
                <span>Bu Hizmeti Konuşalım</span>
                <span className="text-[#B59A6D] font-bold">↗</span>
              </Link>

              {/* Sol / Sağ Yön Okları */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-[#0F172A]/20 bg-white/80 hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center text-lg text-[#0F172A] shadow-sm cursor-pointer z-30"
                  title="Önceki"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-[#0F172A]/20 bg-white/80 hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center text-lg text-[#0F172A] shadow-sm cursor-pointer z-30"
                  title="Sonraki"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Sağ Taraf Dikey Navigasyon Noktaları & Sayaç */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-center items-center lg:items-end gap-6 pt-8 lg:pt-0 border-t lg:border-t-0 border-[#0F172A]/10">
            {/* Sayaç */}
            <div className="text-sm font-mono tracking-widest text-[#475569]">
              <span className="text-[#0F172A] font-bold text-lg">{currentService.id}</span>
              <span> / 0{SERVICES.length}</span>
            </div>

            {/* Dikey / Yatay Noktalar */}
            <div className="flex lg:flex-col gap-2.5 items-center lg:items-end flex-wrap">
              {SERVICES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="group flex items-center gap-3 transition-all focus:outline-none cursor-pointer z-30"
                >
                  <span className={`hidden lg:inline text-[11px] font-mono tracking-widest uppercase transition-all ${
                    idx === activeIndex 
                      ? 'text-[#B59A6D] opacity-100 font-bold translate-x-0' 
                      : 'text-[#64748B] opacity-0 group-hover:opacity-100 translate-x-2'
                  }`}>
                    {item.category}
                  </span>

                  <span className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-3 h-3 bg-[#B59A6D] ring-4 ring-[#B59A6D]/20'
                      : 'w-2 h-2 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/50'
                  }`} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* ALT ETİKET / FOOTER */}
      <footer className="relative z-30 py-6 px-8 border-t border-[#0F172A]/10 text-[10px] font-mono tracking-[0.2em] text-[#475569] uppercase flex justify-between items-center">
        <span>NIVA RETAIL — PERAKENDE HİZMETLERİ</span>
        <span>© 2026</span>
      </footer>

    </div>
  );
}