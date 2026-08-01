'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const HERO_SLIDES = [
  {
    id: '01',
    badge: 'OPERASYON & KÂRLILIK',
    heroTitle: 'Perakende Danışmanlığı',
    mainTitle: 'Daha Güçlü Operasyonlar. Daha Yüksek Kârlılık. Daha Sürdürülebilir Büyüme.',
    paragraphs: [
      'Perakende sektöründe yıllara dayanan saha deneyimimizi stratejik bakış açısıyla birleştiriyor; şirketlerin operasyonlarını güçlendiriyor, mağaza performansını artırıyor ve uzun vadeli rekabet avantajı kazandırıyoruz.'
    ],
    image: 'shake.webp'
  },
  {
    id: '02',
    badge: 'STRATEJİ & BÜYÜME',
    heroTitle: 'Perakende Stratejisi',
    mainTitle: 'Başarı Tesadüf Değil, Doğru Stratejinin Sonucudur.',
    paragraphs: [
      'Her başarılı perakende markasının arkasında güçlü bir strateji, disiplinli operasyonlar ve veriye dayalı kararlar vardır. NIVA Retail Consulting, şirketinizi bugünün rekabet koşullarına hazırlarken yarının büyüme fırsatlarını da birlikte inşa eder.'
    ],
    image: 'strateji.jpg'
  },
  {
    id: '03',
    badge: 'DEĞER VE SONUÇ',
    heroTitle: 'Perakende Mükemmelliği',
    mainTitle: 'Üretiyoruz.',
    paragraphs: [
      'Sadece danışmanlık sunmuyor, işletmenizin gerçek potansiyelini ortaya çıkarıyoruz. Veriye dayalı analiz, güçlü saha deneyimi ve stratejik bakış açımızla operasyonel verimliliği artırıyor, maliyetleri optimize ediyor ve sürdürülebilir büyüme için sağlam bir temel oluşturuyoruz.',
      'Çünkü bizim için başarı; rapor hazırlamak değil, ölçülebilir sonuçlar elde etmektir.'
    ],
    image: '/meeting.jpg'
  }
];

const STATS = [
  { value: '%10+', label: 'Ortalama  Verimlilik Artışı' },
  { value: '500+', label: 'Optimize Edilen & Yönetilen Mağaza' },
  { value: '20+ Yıl', label: 'Sektörel Saha ve Yönetim Tecrübesi' },
  { value: '%98', label: 'Sürdürülebilir Müşteri Memnuniyeti' }
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Saha Odaklı Yaklaşım',
    description: 'Masabaşı teorilerle değil; doğrudan mağaza koridorlarında, rafta ve kasada çalışan pratik ve uygulanabilir çözümler sunuyoruz.'
  },
  {
    number: '02',
    title: 'Veri Temelli Perakende Matematiği',
    description: 'Kararlarımızı sezgilerle değil; stok devir hızı, metrekare verimliliği, fire oranları ve satış analitiği verilerine dayanarak alıyoruz.'
  },
  {
    number: '03',
    title: 'Sürdürülebilir Kurumsal Dönüşüm',
    description: 'Günü kurtaran geçici reçeteler yerine, kurum kültürünüze ve saha ekiplerinize yerleşen kalıcı sistemler inşa ediyoruz.'
  },
  {
    number: '04',
    title: 'Uçtan Uca Sorumluluk',
    description: 'Strateji belgesini teslim edip çekilmiyoruz; satın almadan görsel düzenlemeye, saha eğitiminden kira ve lokasyon müzakerelerine kadar yanınızdayız.'
  }
];

const METHODOLOGY_STEPS = [
  {
    step: 'ADIM 1',
    title: 'Teşhis & Perakende Check-Up',
    description: 'Mevcut mağaza ağınız, stok devir hızınız, finansal marjlarınız ve saha süreçleriniz detaylı analize tabi tutularak verimsizlik noktaları tespit edilir.'
  },
  {
    step: 'ADIM 2',
    title: 'Stratejik Yol Haritası & Kurgu',
    description: 'Markanızın hedeflerine özel; satın alma, raf düzeni, kiralama optimizasyonu ve büyüme modelini içeren operasyonel plan hazırlanır.'
  },
  {
    step: 'ADIM 3',
    title: 'Saha Uygulaması & Takip',
    description: 'Tasarlanan stratejiler sahada birebir uygulanır, mağaza ekipleri eğitilir ve kârlılık artışı düzenli raporlarla takip edilir.'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#FBF9F6]">
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden select-none bg-[#0a0e17]">
        
        {/* Üst Navbar */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Arka Plan Görselleri */}
        {HERO_SLIDES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.heroTitle}
              className="w-full h-full object-cover object-center brightness-75"
            />
            {/* Karartma Filtresi */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Hero İçeriği */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-normal font-normal mb-8 drop-shadow-md">
            {slide.heroTitle}
          </h1>

          <Link
            href="/iletisim"
            className="bg-white hover:bg-slate-100 text-[#0F172A] font-medium text-sm px-7 py-3 rounded-md transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Bize Ulaşın</span>
          </Link>
        </div>

        {/* Yön Tuşları (Sağ Alt) */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/40 bg-black/30 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white cursor-pointer backdrop-blur-sm"
            title="Önceki"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/40 bg-black/30 hover:bg-white hover:text-black transition-all flex items-center justify-center text-white cursor-pointer backdrop-blur-sm"
            title="Sonraki"
          >
            →
          </button>
        </div>

        {/* Slider Noktaları (Sol Alt) */}
        <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#B89765]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </section>


      {/* 2. EDİTORYAL METİN BÖLÜMÜ (SADECE BİREBİR İSTEDİĞİN METİNLER) */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6">
        
        {/* Rozet */}
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-[0.25em] text-[#B89765] uppercase font-bold">
            {slide.badge}
          </span>
        </div>

        {/* Vurucu Ana Başlık */}
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-serif text-[#0F172A] text-center leading-[1.3] mb-14 tracking-tight">
          {slide.mainTitle}
        </h2>

        {/* Paragraflar */}
        <div className="space-y-8 text-base sm:text-lg text-[#334155] font-light leading-relaxed max-w-3xl mx-auto text-center md:text-left">
          {slide.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

      </section>


      {/* 3. RAKAMLAR & İSTATİSTİKLER BÖLÜMÜ */}
      <section className="bg-[#F4F0E8] border-y border-[#0F172A]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l-2 border-[#B89765] pl-6">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#475569] font-mono leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. İLKELERİMİZ VE YAKLAŞIMIMIZ BÖLÜMÜ */}
      <section className="py-24 bg-[#FBF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#B89765] uppercase block mb-3 font-semibold">
              YAKLAŞIMIMIZ & İLKELERİMİZ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F172A] tracking-tight">
              Perakendede Değişimi Sahadan Başlatıyoruz.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-[#0F172A]/10 hover:border-[#B89765] p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="text-xs font-mono text-[#B89765] font-bold mb-6 bg-[#B89765]/10 w-fit px-3 py-1 rounded-full border border-[#B89765]/20">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#B89765] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. METODOLOJİ (SÜREÇ) ÖZETİ */}
      <section className="py-24 bg-[#F4F0E8] border-t border-[#0F172A]/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono tracking-[0.3em] text-[#B89765] uppercase block mb-3 font-semibold">
                METODOLOJİ
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] tracking-tight">
                3 Adımda Yönetim ve Operasyon Dönüşümü
              </h2>
            </div>
            <Link
              href="/metodoloji"
              className="text-xs font-mono text-[#B89765] hover:text-[#0F172A] uppercase tracking-widest flex items-center gap-2 group w-fit font-bold"
            >
              <span>Metodolojiyi İnceleyin</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <div key={idx} className="relative bg-white border border-[#0F172A]/10 p-8 rounded-2xl shadow-sm">
                <span className="text-xs font-mono text-[#B89765] tracking-widest block mb-4 font-bold">
                  {m.step}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  {m.title}
                </h3>
                <p className="text-sm text-[#475569] font-light leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#0F172A]/10 py-8 bg-[#EFECE6] text-center text-xs text-[#64748B] font-mono">
        <p>© 2026 NIVA Retail Consulting. Tüm hakları saklıdır.</p>
      </footer>

    </div>
  );
}