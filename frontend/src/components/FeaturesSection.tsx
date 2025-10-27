import { Camera, Leaf, BarChart3, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Camera,
      title: "Upload Foto Tanaman",
      description: "Ambil atau unggah foto tanaman yang ingin Anda analisis. Sistem kami mendukung berbagai format gambar dan memberikan panduan untuk foto terbaik.",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600",
      hoverColor: "from-blue-100 to-blue-200",
      highlights: ["JPEG, PNG, WebP", "Panduan Otomatis", "Upload Cepat"]
    },
    {
      icon: Leaf,
      title: "Pilih Jenis Tanaman", 
      description: "Tentukan jenis tanaman dari database kami yang komprehensif. Ini membantu AI memberikan analisis yang lebih akurat dan spesifik.",
      color: "bg-gradient-to-br from-green-50 to-green-100 text-green-600",
      hoverColor: "from-green-100 to-green-200",
      highlights: ["100+ Jenis Tanaman", "Database Lengkap", "Mudah Dicari"]
    },
    {
      icon: BarChart3,
      title: "Hasil Prediksi AI",
      description: "Dapatkan analisis mendalam tentang kesehatan tanaman, identifikasi penyakit, tingkat keparahan, dan rekomendasi perawatan yang tepat.",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600",
      hoverColor: "from-purple-100 to-purple-200",
      highlights: ["Analisis Real-time", "Rekomendasi Detail", "Akurasi Tinggi"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-200">
            <Sparkles className="h-4 w-4" />
            <span>Teknologi AI Terdepan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-[#2E7D32] to-gray-900 bg-clip-text text-transparent">
            Cara Kerja Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tiga langkah sederhana untuk mendapatkan diagnosa kesehatan tanaman yang akurat dengan teknologi AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div key={feature.title} className="relative">
                {/* Connection line for desktop */}
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-[#2E7D32] to-transparent z-0">
                    <ArrowRight className="absolute -right-2 -top-2.5 h-5 w-5 text-[#2E7D32]" />
                  </div>
                )}
                
                <Card 
                  className={`relative bg-white border-2 ${isHovered ? 'border-[#2E7D32] shadow-2xl' : 'border-transparent shadow-lg'} hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer transform ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="text-center pb-4 pt-8 relative">
                    <div className={`inline-flex p-5 rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-all duration-500 shadow-md relative`}>
                      <IconComponent className="h-10 w-10" />
                      {isHovered && (
                        <div className="absolute inset-0 rounded-2xl bg-white opacity-20 animate-ping"></div>
                      )}
                    </div>
                    
                    <div className="absolute top-6 right-6 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-8">
                    <CardDescription className="text-gray-600 text-center leading-relaxed mb-4">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Feature highlights */}
                    <div className={`space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-[#2E7D32] flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2E7D32] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}