'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Metodoloji() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#B89765] selection:text-white antialiased flex flex-col justify-between pt-28">
      
      {/* 1. ÜST KAPSÜL NAVBAR */}
      <Navbar />

      {/* 2. BEYAZ ZEMİNLİ METODOLOJİ İÇERİĞİ */}
      <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-grow">
        
        {/* Büyük Lacivert Başlık */}
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#0F172A] tracking-tight mb-8">
          Metodolojimiz
        </h1>

        {/* İnce Ayırıcı Çizgi */}
        <div className="w-full h-[1px] bg-slate-200 mb-12" />

        {/* Paragraflar ve Süreç Adımları */}
        <div className="space-y-8 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          <p className="text-slate-700 font-medium leading-relaxed">
            Perakende operasyonlarında başarı, doğru teşhis ve sistemli bir uygulama ile mümkündür. 
            Niva Yönetim olarak geliştirdiğimiz metodoloji; teoriye değil, sahanın gerçeklerine ve 
            ölçülebilir verilere dayanır.
          </p>

          <p>
            İşletmeniz için tasarladığımız her çözüm sürecini 4 temel aşamada ele alarak sürdürülebilir 
            ve yüksek kârlılığa sahip operasyonel yapılar kuruyoruz:
          </p>

          {/* Adımlar Listesi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 pt-4">
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-mono font-bold text-[#B89765] tracking-widest uppercase block mb-2">01. ANALİZ & TEŞHİS</span>
              <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Mevcut Durum Analizi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mağaza içi müşteri trafiği, stok devir hızı, personel verimliliği ve finansal tablolar detaylı incelemeye alınır.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-mono font-bold text-[#B89765] tracking-widest uppercase block mb-2">02. STRATEJİ & PLANLAMA</span>
              <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Yol Haritası Oluşturma</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ölçülebilir hedefler doğrultusunda mağaza konsepti, kategori yönetimi ve operasyonel aksiyon planı çizilir.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-mono font-bold text-[#B89765] tracking-widest uppercase block mb-2">03. UYGULAMA & SAHA</span>
              <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Birebir Entegrasyon</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Planlanan stratejiler sahada ekibinizle birlikte birebir uygulanır, personel eğitimleri ve sistem kurulumları tamamlanır.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-mono font-bold text-[#B89765] tracking-widest uppercase block mb-2">04. ÖLÇÜM & OPTİMİZASYON</span>
              <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Sürekli İyileştirme</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Elde edilen sonuçlar dönemsel raporlarla analiz edilir ve maksimum kârlılık için süreç sürekli optimize edilir.
              </p>
            </div>

          </div>

          <p>
            Bu disiplinli yaklaşım sayesinde markalarınızın operasyonel yükünü azaltırken, 
            müşteri memnuniyetini ve ciro performansını en üst seviyeye çıkarıyoruz.
          </p>
        </div>

      </main>

      {/* 3. KURUMSAL KREM TONLU FOOTER */}
      <footer className="bg-[#FBF9F6] text-[#0F172A] pt-16 pb-12 px-6 border-t border-[#0F172A]/10 mt-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo ve İletişim Butonu */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-[#0F172A]/10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#B89765] text-[#0F172A]">
                <span className="text-2xl font-black">N</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0F172A] uppercase leading-none">
                  Niva <span className="font-light text-slate-600">Yönetim</span>
                </h3>
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#B89765] uppercase mt-1 font-bold">
                  PERAKENDE VE YÖNETİM DANIŞMANLIĞI
                </p>
              </div>
            </div>

            <Link 
              href="/iletisim"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-full transition shadow-lg flex items-center gap-2"
            >
              <span>İletişim</span>
              <span className="text-[#B89765]">↗</span>
            </Link>
          </div>

          {/* Menü & İletişim */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-[#0F172A]/10 text-xs font-medium text-slate-600">
            
            {/* Menü */}
            <div className="md:col-span-7">
              <span className="text-[11px] font-mono tracking-widest text-[#B89765] uppercase block mb-6 font-bold">MENÜ</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
                <Link href="/hakkimizda" className="hover:text-[#0F172A] transition">Hakkımızda</Link>
                <Link href="/hizmetlerimiz" className="hover:text-[#0F172A] transition">Hizmetlerimiz</Link>
                <Link href="/metodoloji" className="hover:text-[#0F172A] transition">Metodoloji</Link>
                <Link href="/projelerimiz" className="hover:text-[#B89765] text-[#0F172A] font-bold transition">Projelerimiz</Link>
                <Link href="/iletisim" className="hover:text-[#0F172A] transition">İletişim</Link>
              </div>
            </div>

            {/* İletişim */}
            <div className="md:col-span-5">
              <span className="text-[11px] font-mono tracking-widest text-[#B89765] uppercase block mb-6 font-bold">İLETİŞİM</span>
              <div className="space-y-4">
                <a href="tel:+905428499398" className="flex items-center gap-3 hover:text-[#0F172A] transition">
                  <span className="w-8 h-8 rounded-full bg-[#0F172A]/5 flex items-center justify-center text-[#B89765]">📞</span>
                  <span>0 542 849 93 98</span>
                </a>
                <a href="mailto:nivaconsultingtr@gmail.com" className="flex items-center gap-3 hover:text-[#0F172A] transition">
                  <span className="w-8 h-8 rounded-full bg-[#0F172A]/5 flex items-center justify-center text-[#B89765]">✉️</span>
                  <span>nivaconsultingtr@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Telif & Başa Dön */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 font-mono gap-4">
            <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
              <span>© 2026 NİVA YÖNETİM — TÜM HAKLARI SAKLIDIR</span>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-[#0F172A] transition">KVKK</a>
              <a href="#" className="hover:text-[#0F172A] transition">GİZLİLİK</a>
              <a href="#" className="hover:text-[#0F172A] transition">ÇEREZLER</a>
            </div>

            <button 
              onClick={scrollToTop} 
              className="hover:text-[#0F172A] text-[#B89765] transition flex items-center gap-1 uppercase tracking-widest font-bold cursor-pointer"
            >
              <span>BAŞA DÖN</span>
              <span>↑</span>
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
}