'use client';

import React from 'react';
import Navbar from '../components/Navbar';

export default function Metodoloji() {
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

    </div>
  );
}