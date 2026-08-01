'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const VALUES = [
  {
    title: 'Saha Deneyimi ve Pratiklik',
    description: 'Teorik kalıpların ötesine geçerek perakendenin gerçek sahasında sınanmış, pratik ve ölçülebilir sonuçlar üreten stratejiler geliştiriyoruz.'
  },
  {
    title: 'Veri ve Matematik Odaklılık',
    description: 'Stok devir hızından metrekare verimliliğine kadar her kararı objektif veriler ve perakende matematiği üzerine kurguluyoruz.'
  },
  {
    title: 'Sürdürülebilir Büyüme',
    description: 'Günü kurtaran geçici çözümler yerine, kurumunuzun genetiğine işleyecek uzun vadeli ve kalıcı operasyonel mükemmellik sağlıyoruz.'
  }
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#FBF9F6]">
      <Navbar />

      {/* Hero Başlık Bölümü */}
      <section className="pt-36 pb-20 bg-[#0a0e17] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0e17]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-[#B89765] uppercase block mb-4 font-semibold">
            NIVA RETAIL CONSULTING
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight mb-6">
            Hakkımızda
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Perakendenin Bugününü Güçlendiriyor, Yarınını Tasarlıyoruz.
          </p>
        </div>
      </section>

      {/* Editoryal İçerik Alanı */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="space-y-6 text-base sm:text-lg text-[#334155] font-light leading-relaxed">
          <p className="text-xl sm:text-2xl font-serif text-[#0F172A] leading-relaxed border-l-2 border-[#B89765] pl-6 font-normal">
            NIVA Retail Consulting, perakende sektöründe sürdürülebilir büyüme, operasyonel mükemmellik ve ticari başarı odaklı çözümler sunan bağımsız bir yönetim danışmanlığı şirketidir.
          </p>
          
          <p>
            Yıllara dayanan sektör deneyimimizi, veri odaklı analiz yaklaşımımız ve sahadaki güçlü operasyonel bilgi birikimimizle birleştirerek; şirketlerin büyüme hedeflerine ulaşmalarını, kârlılıklarını artırmalarını ve organizasyonlarını geleceğe hazırlamalarını sağlıyoruz.
          </p>

          <p>
            Mağaza kurulumu ve konsept geliştirmeden operasyonel dönüşüme, ticari organizasyon yapısının yeniden tasarlanmasından satış performansının artırılmasına kadar perakendenin tüm süreçlerinde müşterilerimizin stratejik iş ortağı olarak hareket ediyoruz.
          </p>

          <p>
            Her şirketin ihtiyaçlarının farklı olduğuna inanıyor, bu nedenle standart çözümler yerine kurumun kültürüne, hedeflerine ve pazar dinamiklerine uygun, uygulanabilir ve ölçülebilir projeler geliştiriyoruz. Yaklaşımımız yalnızca sorunları tespit etmek değil; kalıcı çözümler üretmek, süreçleri iyileştirmek ve uzun vadeli değer yaratmaktır.
          </p>

          <p>
            NIVA Retail Consulting olarak operasyonel disiplin, ticari verimlilik, mağaza standartları, kategori yönetimi, tedarik zinciri optimizasyonu, liderlik gelişimi ve organizasyonel dönüşüm alanlarında uluslararası deneyime sahip uzman ekibimizle hizmet veriyoruz.
          </p>

          <p>
            Türkiye ve Azerbaycan başta olmak üzere farklı pazarlarda edindiğimiz deneyim sayesinde, yerel dinamikleri küresel bakış açısıyla birleştiriyor; şirketlerin rekabet avantajı elde etmelerine, müşteri deneyimini güçlendirmelerine ve sürdürülebilir kârlılık sağlamalarına destek oluyoruz.
          </p>

          <p>
            Bizim için danışmanlık; yalnızca tavsiye vermek değil, sonuç üretmek, değişimi yönetmek ve işletmelerin geleceğini birlikte inşa etmektir.
          </p>

          <p className="font-medium text-[#0F172A] pt-2">
            NIVA Retail Consulting — Perakendenin Bugününü Güçlendiriyor, Yarınını Tasarlıyor.
          </p>

          {/* Kurucu İmzası */}
          <div className="pt-8 border-t border-[#0F172A]/10 mt-10">
            <h4 className="font-serif text-xl font-bold text-[#0F172A]">Suat KOCABEY</h4>
            <p className="text-sm font-mono text-[#B89765] font-semibold tracking-wide">
              Perakende ve Yönetim Stratejileri Danışmanı
            </p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz Grid */}
      <section className="py-24 bg-[#F4F0E8] border-t border-[#0F172A]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#B89765] uppercase block mb-3 font-semibold">
              İLKELERİMİZ
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A]">
              Bizi Farklı Kılan Değerlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((item) => (
              <div key={item.title} className="bg-white border border-[#0F172A]/10 p-8 rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0F172A]/10 py-8 bg-[#EFECE6] text-center text-xs text-[#64748B] font-mono">
        <p>© 2026 NIVA Retail Consulting. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}