// Next.js App Router - Tailwind CSS

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            Tuğ Kardeşler Nakliyat
          </h1>

          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#nedenbiz">Neden Biz</a>
            <a href="#yorumlar">Yorumlar</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      {/* HERO (RESİMSİZ PREMIUM) */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Güvenilir & Profesyonel<br />
            Evden Eve Nakliyat
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            İstanbul ve tüm Türkiye’de sigortalı, hızlı ve profesyonel
            taşımacılık hizmeti sunuyoruz. Eşyalarınızı özenle taşıyoruz.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <a
              href="https://wa.me/905348663260?text=Merhaba%20nakliyat%20hizmeti"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              📦 Hemen Teklif Al
            </a>

            <a
              href="#hizmetler"
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
            >
              Hizmetleri Gör
            </a>
          </div>

          {/* TRUST */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
            <div className="bg-white/10 p-3 rounded-xl">🚚 Zamanında</div>
            <div className="bg-white/10 p-3 rounded-xl">🔒 Sigortalı</div>
            <div className="bg-white/10 p-3 rounded-xl">👷 Uzman Ekip</div>
            <div className="bg-white/10 p-3 rounded-xl">📦 Özenli</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Hizmetlerimiz
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Evden Eve Nakliyat",
              desc: "Eşyalarınızı sigortalı ve güvenli şekilde taşıyoruz."
            },
            {
              title: "Ofis Taşıma",
              desc: "İş yerinizi hızlı ve planlı şekilde taşıyoruz."
            },
            {
              title: "Asansörlü Taşıma",
              desc: "Yüksek katlar için modern çözümler sunuyoruz."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="nedenbiz" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">
            Neden Bizi Seçmelisiniz?
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-lg">
            <div>✅ Sigortalı taşımacılık</div>
            <div>🚚 Hızlı teslimat</div>
            <div>👷 Profesyonel ekip</div>
            <div>📦 Güvenli paketleme</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Nasıl Çalışıyoruz?</h3>

          <div className="grid md:grid-cols-3 gap-6 text-lg">
            <div>1️⃣ İletişime geç</div>
            <div>2️⃣ Planlama yapalım</div>
            <div>3️⃣ Güvenle taşıyalım</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="yorumlar" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-2">Müşteri Yorumları</h3>
          <p className="text-gray-500 mb-10">
            Gerçek müşteri deneyimleri
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

            {[
              {
                name: "Ahmet Yılmaz",
                city: "İstanbul",
                rating: 5,
                text: "Eşyalarım çok özenli taşındı. Hiçbir zarar olmadan teslim aldım. Gerçekten profesyonel bir ekip."
              },
              {
                name: "Elif Demir",
                city: "Kadıköy",
                rating: 5,
                text: "Taşınma sürecim çok rahattı. Her şey planlı ve düzenliydi. Kesinlikle tavsiye ederim."
              },
              {
                name: "Mehmet Kaya",
                city: "Bursa",
                rating: 5,
                text: "Ofis taşımamız sorunsuz gerçekleşti. Aynı gün kurulum bile yapıldı."
              },
              {
                name: "Zeynep Arslan",
                city: "Beşiktaş",
                rating: 4,
                text: "Genel olarak iyiydi. Sadece biraz geç geldiler ama hizmet kalitesi iyiydi."
              },
              {
                name: "Hasan Çelik",
                city: "Ankara",
                rating: 5,
                text: "Şehirler arası taşıma çok başarılıydı. Eşyalarım sorunsuz ulaştı."
              },
              {
                name: "Derya Koç",
                city: "Üsküdar",
                rating: 5,
                text: "Çok nazik bir ekipti. Eşyalarıma kendi eşyaları gibi davrandılar."
              },
              {
                name: "Suat Yıldırım",
                city: "İzmir",
                rating: 5,
                text: "Daha önce birçok firma denedim ama en profesyonel hizmet buradaydı."
              }
            ].map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">

                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-400 mb-2">{r.city}</div>

                <div className="text-yellow-400 mb-2">
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>

                <p className="text-gray-600">{r.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="iletisim" className="py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">İletişim</h3>
          <p className="text-gray-600 mb-6">
            Hemen bizimle iletişime geçin
          </p>

          <a
            href="https://wa.me/905348663260"
            className="text-blue-600 font-semibold text-lg"
          >
            📞 0534 866 32 60
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center py-6">
        © {new Date().getFullYear()} Tuğ Kardeşler Nakliyat
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/905348663260"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        💬 WhatsApp
      </a>

    </main>
  );
}