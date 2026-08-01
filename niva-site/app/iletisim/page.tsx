'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Strateji & Büyüme Danışmanlığı',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#FBF9F6]">
      <Navbar />

      {/* Hero Başlık Bölümü */}
      <section className="pt-36 pb-16 bg-[#0a0e17] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0e17]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-[#B89765] uppercase block mb-4 font-semibold">
            NIVA RETAIL CONSULTING
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight mb-4">
            İletişim & Randevu
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Perakende operasyonlarınızı güçlendirmek ve markanızın büyüme yolculuğunu başlatmak için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* İletişim & Form Ana Bölümü */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SOL TARAF: İletişim Bilgileri & Detaylar */}
          <div className="lg:col-span-5 bg-[#F4F0E8] border border-[#0F172A]/10 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#B89765] uppercase font-bold block mb-2">
                BİZE ULAŞIN
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0F172A]">
                Doğrudan İletişim
              </h2>
              <p className="text-sm text-[#475569] font-light mt-2 leading-relaxed">
                Danışmanlık talepleriniz veya projeleriniz için iletişim kanallarımız üzerinden doğrudan bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Telefonlar (Türkiye & Azerbaycan) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#B89765]/10 border border-[#B89765]/20 flex items-center justify-center text-[#B89765] shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#64748B] block uppercase tracking-wider font-semibold mb-1">
                    Telefon
                  </span>
                  <div className="space-y-1">
                    <a href="tel:+905428499398" className="block text-base font-semibold text-[#0F172A] hover:text-[#B89765] transition-colors">
                      +90 (542) 849 93 98
                    </a>
                    <a href="tel:+994992301022" className="block text-base font-semibold text-[#0F172A] hover:text-[#B89765] transition-colors">
                      +994 (99) 230 10 22
                    </a>
                  </div>
                </div>
              </div>

              {/* E-Posta */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#B89765]/10 border border-[#B89765]/20 flex items-center justify-center text-[#B89765] shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#64748B] block uppercase tracking-wider font-semibold">
                    E-Posta
                  </span>
                  <a href="mailto:nivaconsultingtr@gmail.com" className="text-base font-semibold text-[#0F172A] hover:text-[#B89765] transition-colors">
                    nivaconsultingtr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Görüşme Randevu Formu */}
          <div className="lg:col-span-7 bg-white border border-[#0F172A]/10 p-8 sm:p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F172A] mb-2">
              Görüşme Randevu Formu
            </h2>
            <p className="text-sm text-[#64748B] font-light mb-8">
              Süreçlerinizi değerlendirmek ve perakende operasyonunuzu büyütmek için formu doldurabilirsiniz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Ad Soyad */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                    AD SOYAD *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* E-Posta */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                    E-POSTA *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Örn: ahmet@sirketiniz.com"
                    className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Telefon */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                    TELEFON *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Şirket / Marka Adı */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                    ŞİRKET / MARKA ADI
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Niva Retail"
                    className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              {/* Danışmanlık Konusu */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                  DANIŞMANLIK KONUSU
                </label>
                <select
                  className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] transition-colors cursor-pointer"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Strateji & Büyüme Danışmanlığı">Strateji & Büyüme Danışmanlığı</option>
                  <option value="Saha & Mağazacılık Operasyonu">Saha Mağazacılık & Operasyonu</option>
                  <option value="Ürün Ağacı Oluşturma & Kategori Yönetimi">Ürün Ağacı Oluşturma & Kategori Yönetimi</option>
                  <option value="Diğer Kurumsal Projeler">Diğer</option>
                </select>
              </div>

              {/* Mesajınız */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#334155] font-semibold tracking-wider mb-2">
                  MESAJINIZ / TALEP DETAYI
                </label>
                <textarea
                  rows={4}
                  placeholder="Kısaca bahsetmek istediğiniz detayları yazabilirsiniz..."
                  className="w-full bg-[#FBF9F6] border border-[#0F172A]/15 focus:border-[#B89765] focus:outline-none rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {/* Gönder Butonu */}
              <button
                type="submit"
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-sm py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 tracking-wide uppercase font-mono cursor-pointer"
              >
                Randevu Talebi Gönder →
              </button>
            </form>
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