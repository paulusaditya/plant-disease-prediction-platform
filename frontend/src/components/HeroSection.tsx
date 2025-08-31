import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1593708697557-f2feca483132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMGZhcm1pbmd8ZW58MXx8fHwxNzU2NDc1MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Green plants farming background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Prediksi Penyakit Tanaman dengan{" "}
              <span className="text-[#2E7D32]">AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Unggah foto tanaman Anda, biarkan AI menganalisis dan memberikan 
              rekomendasi perawatan yang tepat untuk kesehatan tanaman optimal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 text-lg"
              >
                Mulai Prediksi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          {/* AI + Plant Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQ3NTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Agriculture Technology"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* AI Badge */}
              <div className="absolute top-4 right-4 bg-[#2E7D32] text-white px-4 py-2 rounded-full text-sm font-semibold">
                AI Powered
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-[#A1887F] text-white p-3 rounded-xl shadow-lg">
              <span className="text-sm font-semibold">99% Akurasi</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-green-100 text-[#2E7D32] p-3 rounded-xl shadow-lg">
              <span className="text-sm font-semibold">Real-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}