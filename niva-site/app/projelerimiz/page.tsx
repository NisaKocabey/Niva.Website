'use client';

import React from 'react';
import Link from 'next/link';

export default function ProjelerimizPage() {
  const projects = [
    {
      id: '01',
      title: 'Taze Gıda & Meyve-Sebze Reyonu Konsept Tasarımı',
      description: 'Ahşap konsept arabalar ve yönlendirmelerle taze gıda alım tecrübesini ve metrekare kârlılığını artıran meyve-sebze alanı mimarisi.',
      image: '/projemanav.JPG'
    },
    {
      id: '02',
      title: 'Gurme Şarküteri Reyonu & Teşhir Mimarisi',
      description: 'Ahşap dokulu tavan panelleri, özelleştirilmiş aydınlatma ve kurumsal kimliği yansıtan geometrik kırmızı seramik kaplamalarla, taze ürün algısını ve alışveriş deneyimini en üst seviyeye çıkaran entegre bir şarküteri alanı tasarımı.',
      image: 'https://i.ibb.co/RG4m9L22/cheese.png'
    },
    {
      id: '03',
      title: 'Perakende Cephe & Kurumsal AVM İçi Mağaza Tasarımı',
      description: 'Yüksek tavanlı ve geniş vitrin alanına sahip AVM içi mağazada markalama, aydınlatma ve geçiş hatlarının entegre tasarımı.',
      image: '/store.PNG'
    },
    {
      id: '04',
      title: 'Gurme Şarküteri & Soğuk Teşhir Operasyonu',
      description: 'Ergonomik ada tezgahlar, tavan aydınlatmaları ve hijyenik sergileme üniteleri ile premium şarküteri alan planlaması.',
      image: '/projemarket.JPG'
    },
    {
      id: '05',
      title: 'Organik Ürünler & Modüler Raf Sistemleri',
      description: 'Doğal ahşap kasalar ve siyah endüstriyel metal raflarla organik ve doğal gıda kategorisinin öne çıkarılması.',
      image: '/projeorganik.JPG'
    },
    {
      id: '06',
      title: 'Mağaza İçi Koridor & Kategori Yönlendirme Mimarisi',
      description: 'Geometrik tavan aydınlatmaları, ahşap kaplama detaylar ve numaralandırılmış kategori panoları ile müşteri sirkülasyonunu ve alışveriş konforunu artıran koridor planlaması.',
      image: '/sakuteri.JPG'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0F172A] flex flex-col justify-between selection:bg-[#B89765] selection:text-white font-sans antialiased">
      
      {/* HEADER */}
      <header className="border-b border-[#0F172A]/10 backdrop-blur-md bg-[#FBF9F6]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#B89765] text-[#0F172A] flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <span className="font-serif font-bold tracking-wider text-lg block leading-none text-[#0F172A]">NIVA</span>
              <span className="text-[10px] tracking-widest text-[#B89765] font-semibold uppercase">Retail Consulting</span>
            </div>
          </Link>

          <Link 
            href="/" 
            className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full border border-[#0F172A]/20 hover:border-[#B89765] hover:bg-[#B89765]/10 text-[#0F172A] transition-all"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* İÇERİK BÖLÜMÜ */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex-grow w-full">
        
        {/* Üst Başlık */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 bg-[#B89765]/10 border border-[#B89765]/30 rounded-full text-[#B89765] text-xs font-semibold tracking-widest uppercase mb-4">
            Saha Deneyimimiz & Referans Mimari
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#0F172A]">
            Projelerimiz
          </h1>
          <p className="text-[#334155] text-lg leading-relaxed font-light">
            Türkiye ve Azerbaycan başta olmak üzere market ve perakende sektöründe hayata geçirdiğimiz operasyonel dönüşüm, mağaza içi yerleşim düzeni ve konsept reyon uygulamalarımız.
          </p>
        </div>

        {/* Projeler Fotoğraf Galerisi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white border border-[#0F172A]/10 rounded-3xl overflow-hidden hover:border-[#B89765]/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Fotoğraf Alanı */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
              </div>

              {/* Bilgi Alanı */}
              <div className="p-6 relative z-10 -mt-8 bg-white flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-mono text-[#64748B] tracking-widest uppercase block mb-2">

                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-[#B89765] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#475569] text-xs leading-relaxed font-light mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0F172A]/10 flex items-center justify-end">
                  <Link 
                    href="/iletisim"
                    className="text-xs uppercase tracking-widest font-semibold text-[#B89765] hover:text-[#0F172A] transition-colors"
                  >
                    Detay Konuş ↗
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#0F172A]/10 py-8 text-center text-xs text-[#64748B] font-mono">
        <p>© 2026 NIVA RETAIL CONSULTING. TÜM HAKLARI SAKLIDIR.</p>
      </footer>

    </div>
  );
}