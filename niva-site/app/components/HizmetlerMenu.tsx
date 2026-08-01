'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

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
    image: '/egitim.jpg'
  }
];

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
    <div className="relative h-screen w-full bg-[#FBF9F6] text-[#0F172A] font-sans overflow-hidden select-none flex flex-col">
      
      {/* ÜST NAVBAR */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* HİZMETLER MENÜ BARI (NAVBAR'IN HEMEN ALTINA SABİTLENDİ) */}
      <div className="relative z-40 w-full bg-[#FBF9F6]/80 backdrop-blur-md border-b border-[#0F172A]/10 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          {SERVICES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md font-bold'
                    : 'bg-white/60 text-[#475569] border-[#0F172A]/10 hover:border-[#B89765] hover:text-[#0F172A]'
                }`}
              >
                <span className={isActive ? 'text-[#B89765]' : 'text-[#64748B]'}>
                  {item.id}
                </span>
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ARKA PLAN GÖRSELLERİ VE KREM DEGRADE FİLTRESİ */}
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
            className="w-full h-full object-cover object-center opacity-25 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/90 to-[#FBF9F6]/60" />
        </div>
      ))}

      {/* ANA İÇERİK BÖLÜMÜ */}
      <div className="relative z-20 flex-1 max-w-7xl mx-auto px-6 flex items-center w-full">
        <div className="max-w-3xl">
          
          {/* Kategori ve Sayı */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-widest text-[#B89765] uppercase bg-[#B89765]/10 border border-[#B89765]/30 px-3 py-1 rounded-full font-bold">
              HİZMET {currentService.id}
            </span>
            <span className="text-xs font-mono text-[#0F172A]/30">|</span>
            <span className="text-xs font-mono tracking-widest text-[#B89765] uppercase font-semibold">
              {currentService.category}
            </span>
          </div>

          {/* Dev Başlık */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#0F172A] tracking-tight leading-[1.15] mb-5">
            {currentService.title}
          </h1>

          {/* Detay Açıklaması */}
          <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed mb-6 max-w-2xl">
            {currentService.description}
          </p>

          {/* Buton ve Yön Kontrolleri */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/iletisim"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-all shadow-md flex items-center gap-2"
            >
              <span>Bu Hizmeti Konuşalım</span>
              <span className="text-[#B89765] font-bold">↗</span>
            </Link>

            {/* Sol / Sağ Yön Okları */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-[#0F172A]/20 bg-white/60 hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center text-lg text-[#0F172A] shadow-sm cursor-pointer"
                title="Önceki"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-[#0F172A]/20 bg-white/60 hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center text-lg text-[#0F172A] shadow-sm cursor-pointer"
                title="Sonraki"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* SAĞ TARAF DİKEY NAVİGASYON NOKTALARI & SAYAÇ */}
      <div className="absolute right-8 sm:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-6">
        
        {/* Sayaç */}
        <div className="text-sm font-mono tracking-widest text-[#475569] mb-2">
          <span className="text-[#0F172A] font-bold text-lg">{currentService.id}</span>
          <span> / 0{SERVICES.length}</span>
        </div>

        {/* Dikey Noktalar ve Kategori İsimleri */}
        <div className="flex flex-col gap-3 items-end">
          {SERVICES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="group flex items-center gap-3 transition-all focus:outline-none cursor-pointer"
            >
              <span className={`text-[11px] font-mono tracking-widest uppercase transition-all ${
                idx === activeIndex 
                  ? 'text-[#B89765] opacity-100 font-bold translate-x-0' 
                  : 'text-[#64748B] opacity-0 group-hover:opacity-100 translate-x-2'
              }`}>
                {item.category}
              </span>

              <span className={`rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-3 h-3 bg-[#B89765] ring-4 ring-[#B89765]/20'
                  : 'w-2 h-2 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/50'
              }`} />
            </button>
          ))}
        </div>

      </div>

      {/* SOL ALT ETİKET */}
      <div className="absolute bottom-6 left-8 z-30 hidden sm:block">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#475569] uppercase border-l-2 border-[#B89765] pl-3">
          NIVA RETAIL — PERAKENDE HİZMETLERİ
        </span>
      </div>

    </div>
  );
}