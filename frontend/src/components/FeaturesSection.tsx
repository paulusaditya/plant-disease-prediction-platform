import { Camera, Leaf, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Upload Foto Tanaman",
      description: "Ambil atau unggah foto tanaman yang ingin Anda analisis. Sistem kami mendukung berbagai format gambar dan memberikan panduan untuk foto terbaik.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Leaf,
      title: "Pilih Jenis Tanaman", 
      description: "Tentukan jenis tanaman dari database kami yang komprehensif. Ini membantu AI memberikan analisis yang lebih akurat dan spesifik.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Hasil Prediksi AI",
      description: "Dapatkan analisis mendalam tentang kesehatan tanaman, identifikasi penyakit, tingkat keparahan, dan rekomendasi perawatan yang tepat.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tiga langkah sederhana untuk mendapatkan diagnosa kesehatan tanaman yang akurat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#2E7D32] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#2E7D32] mb-2">1000+</div>
            <div className="text-gray-600">Tanaman Dianalisis</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E7D32] mb-2">50+</div>
            <div className="text-gray-600">Jenis Penyakit</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E7D32] mb-2">95%</div>
            <div className="text-gray-600">Tingkat Akurasi</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E7D32] mb-2">24/7</div>
            <div className="text-gray-600">Tersedia Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}