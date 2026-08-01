'use client';

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-slate-700 selection:text-white antialiased scroll-smooth">
      
      {/* ÜST MÜŞTERİ BARI / NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 px-6 py-5 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center bg-slate-900/50 group-hover:border-amber-500 transition-colors">
            <span className="text-xl font-bold tracking-tight text-slate-100">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-100 uppercase">NIVA</span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-amber-500 uppercase -mt-0.5">Consulting</span>
          </div>
        </a>

        {/* Menü Açma Butonu */}
        <button 
          onClick={toggleMenu} 
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 px-5 py-2.5 rounded-full hover:border-slate-700 transition"
        >
          <span>MENÜ</span>
          <span className="text-amber-500 text-lg leading-none">☰</span>
        </button>
      </nav>

      {/* PERA YÖNETİM TARZI TAM EKRAN AÇILIR MENÜ (OVERLAY) */}
      <div 
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-50 transition-all duration-500 flex flex-col justify-between p-8 md:p-16 border-b border-slate-800 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Üst Kısım: Başlık ve Kapat Butonu */}
        <div className="flex justify-between items-center border-b border-slate-800/60 pb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Niva Consulting // Navigation</span>
          </div>
          <button 
            onClick={toggleMenu} 
            className="text-slate-400 hover:text-white text-3xl font-light transition hover:rotate-90 transform duration-300"
          >
            ✕
          </button>
        </div>

        {/* Orta Kısım: Menü Linkleri (Pera Yönetim Stili) */}
        <div className="flex flex-col gap-6 my-auto max-w-4xl mx-auto w-full">
          {[
            { title: 'Ana Sayfa', href: '#hero' },
            { title: 'Hakkımızda', href: '#hakkimizda' },
            { title: 'Hizmetlerimiz', href: '#hizmetler' },
            { title: 'Metodoloji', href: '#metodoloji' },
            { title: 'Vaka Analizleri & Referanslar', href: '#referanslar' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="text-3xl md:text-5xl font-extrabold text-slate-200 hover:text-amber-500 transition-all flex items-center justify-between group border-b border-slate-800/40 pb-4"
            >
              <span>{item.title}</span>
              <span className="text-xl md:text-2xl text-slate-600 group-hover:text-amber-500 group-hover:translate-x-2 transition-transform">↗</span>
            </a>
          ))}
        </div>

        {/* Alt Kısım: İletişim Butonu */}
        <div className="max-w-4xl mx-auto w-full pt-6">
          <a
            href="#iletisim"
            onClick={toggleMenu}
            className="w-full py-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black tracking-wider uppercase rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-amber-500/10 transition-transform active:scale-[0.99]"
          >
            <span>İletişime Geçin</span>
            <span className="text-xl">↗</span>
          </a>
        </div>
      </div>

      {/* --- SAYFA İÇERİKLERİ --- */}

      {/* 1. HERO / ANA SAYFA */}
      <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center max-w-7xl mx-auto border-b border-slate-800">
        <span className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase mb-4 block">
          Perakende Stratejisi & Yönetim Danışmanlığı
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-8">
          Perakendede Operasyonel <br className="hidden md:block"/> 
          <span className="bg-gradient-to-r from-amber-200 via-slate-100 to-slate-400 bg-clip-text text-transparent">Mükemmellik ve Büyüme</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
          Niva Consulting; mağaza içi operasyonlar, envanter verimliliği, merchandising ve omni-channel stratejileri ile perakende markanızı geleceğe taşır.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#iletisim" className="bg-amber-500 text-slate-950 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-amber-400 transition shadow-lg shadow-amber-500/10">
            Randevu Oluştur
          </a>
          <a href="#hakkimizda" className="border border-slate-800 text-slate-300 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-slate-900 transition">
            Keşfet
          </a>
        </div>
      </section>

      {/* 2. HAKKIMIZDA (MİSYON & VİZYON) */}
      <section id="hakkimizda" className="py-28 px-6 max-w-7xl mx-auto border-b border-slate-800">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2">// Corporate Overview</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100">Hakkımızda</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-slate-400 leading-relaxed font-light text-lg space-y-4">
            <p>
              Niva Consulting, perakende sektörünün dinamik ve karmaşık yapısında markalara sürdürülebilir büyüme, operasyonel verimlilik ve kârlılık kazandırmak amacıyla kurulmuş bağımsız bir danışmanlık firmasıdır.
            </p>
            <p>
              Saha tecrübesini veri odaklı yönetim metodolojileriyle harmanlayarak, her markanın kendi kimliğine ve müşteri kitlesine özel stratejik çözümler sunuyoruz.
            </p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-100 mb-4">Neden Niva Consulting?</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> %100 Perakende ve Mağazacılık Odaklı</li>
              <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Ölçülebilir ve Kârlılık Odaklı Sonuçlar</li>
              <li className="flex items-center gap-3"><span className="text-amber-500">✓</span> Sahada Birebir Uygulama Desteği</li>
            </ul>
          </div>
        </div>

        {/* Misyon & Vizyon Kartları */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold mb-6">01</div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Misyonumuz</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Perakende markalarının mağaza operasyonlarından stok dinamiklerine kadar tüm süreçlerini optimize ederek, verimliliği artırmak ve rekabetçi pazarda değer yaratan dönüşümlere liderlik etmektir.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold mb-6">02</div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Vizyonumuz</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Yenilikçi, veri odaklı ve insan merkezli perakende çözümlerimizle, Türkiye’de ve uluslararası pazarda perakende danışmanlığında en güvenilir ve tercih edilen iş ortağı olmak.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HİZMETLERİMİZ / YETKİNLİKLER */}
      <section id="hizmetler" className="py-28 px-6 max-w-7xl mx-auto border-b border-slate-800">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2">// Expertises</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100">Uzmanlık Alanlarımız</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Saha & Mağaza Operasyonları</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Visual Merchandising, mağaza denetimleri, personel prim kurguları ve gizli müşteri çalışmaları.
            </p>
            <span className="text-xs font-mono text-amber-500">01 // OPERATIONS</span>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Stok & Kârlılık Yönetimi</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              OTB bütçe planlama, stok devir hızı (GMROI) iyileştirme ve indirim/kampanya kârlılık analizleri.
            </p>
            <span className="text-xs font-mono text-amber-500">02 // MERCHANDISING</span>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Omni-Channel Dönüşüm</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Fiziksel mağaza ve dijital satış kanallarının tekil stok ve bütünleşik CRM ile entegrasyonu.
            </p>
            <span className="text-xs font-mono text-amber-500">03 // DİJİTAL</span>
          </div>
        </div>
      </section>

      {/* 4. METODOLOJİ (ÇALIŞMA MODELİ) */}
      <section id="metodoloji" className="py-28 px-6 max-w-7xl mx-auto border-b border-slate-800">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2">// Methodology</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100">Dönüşüm Modelimiz</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Teşhis & Analiz', desc: 'Mağaza içi operasyonlar, veri akışı ve stok durumunun yerinde incelenmesi.' },
            { step: '02', title: 'Strateji Tasarımı', desc: 'Markaya özel yol haritasının, KPI’ların ve hedeflerin belirlenmesi.' },
            { step: '03', title: 'Saha Uygulaması', desc: 'Süreçlerin ekiple birlikte sahada birebir hayata geçirilmesi.' },
            { step: '04', title: 'Ölçümleme & Büyüme', desc: 'Performans takibi ve sürekli iyileştirme mekanizmasının kurulması.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
              <span className="text-amber-500 font-mono text-xl font-bold mb-4 block">{item.step}</span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REFERANSLAR & VAKA ANALİZLERİ */}
      <section id="referanslar" className="py-28 px-6 max-w-7xl mx-auto border-b border-slate-800 text-center">
        <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2">// Success Stories</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6">Vaka Analizleri & Başarılar</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm font-light mb-12">
          Danışmanlık verdiğimiz markaların dönüşüm yolculukları ve ölçülebilir başarı sonuçları.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50 mb-4 inline-block">+28% Kârlılık Artışı</span>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Hazır Giyim Perakende Zinciri</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">Stok devir hızının optimize edilmesi ve indirim yönetim kurgusuyla ölü stok maliyeti düşürüldü.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50 mb-4 inline-block">+40% Mağaza Verimliliği</span>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Ayakkabı & Aksesuar Markası</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">Saha ekibi prim sisteminin yeniden yapılandırılması ve görsel mağazacılık standartlarıyla sepet ortalaması artırıldı.</p>
          </div>
        </div>
      </section>

      {/* 6. İLETİŞİM */}
      <section id="iletisim" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-10 md:p-16 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-4">// Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6">Görüşme Planlayın</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-light leading-relaxed mb-10">
            Perakende operasyonlarınızı ve markanızın büyüme hedeflerini birlikte değerlendirelim.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="mailto:info@nivaconsulting.com" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-full text-xs tracking-widest uppercase transition">
              E-posta Gönder
            </a>
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-4 rounded-full text-xs tracking-widest uppercase border border-slate-700 transition">
              Online Randevu Al
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Niva Consulting. Tüm hakları saklıdır.
      </footer>

    </div>
  );
}