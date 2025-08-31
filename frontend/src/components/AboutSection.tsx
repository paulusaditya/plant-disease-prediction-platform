import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Zap, Users, Award } from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Teknologi Terpercaya",
      description: "Menggunakan machine learning terdepan dengan akurasi tinggi"
    },
    {
      icon: Zap,
      title: "Analisis Cepat",
      description: "Hasil diagnosis dalam hitungan detik, tidak perlu menunggu lama"
    },
    {
      icon: Users,
      title: "Mudah Digunakan",
      description: "Interface intuitif yang dapat digunakan oleh siapa saja"
    },
    {
      icon: Award,
      title: "Hasil Akurat",
      description: "Tingkat akurasi hingga 95% berdasarkan riset berkelanjutan"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-[#2E7D32] rounded-3xl p-8 transform rotate-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683248892987-7b6181dfd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBtb2Rlcm4lMjBmYXJtaW5nfGVufDF8fHx8MTc1NjQ3NTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern agriculture technology"
                className="w-full h-80 object-cover rounded-2xl transform -rotate-3"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#A1887F] rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-green-300 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Platform AI
              <br />
              <span className="text-[#2E7D32]">Kesehatan Tanaman</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Platform kami menggabungkan kekuatan artificial intelligence dengan pengetahuan 
              pertanian untuk membantu petani dan pecinta tanaman mengidentifikasi penyakit 
              tanaman dengan cepat dan akurat.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="bg-[#2E7D32] p-3 rounded-xl flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-2xl border-l-4 border-[#2E7D32]">
              <p className="text-[#2E7D32] font-semibold">
                "Teknologi AI kami telah membantu ribuan petani mengoptimalkan hasil panen 
                dan mengurangi kerugian akibat penyakit tanaman."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}