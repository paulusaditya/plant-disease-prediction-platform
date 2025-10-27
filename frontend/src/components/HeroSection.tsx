import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Sparkles,
      text: "99% Akurasi AI",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      text: "Real-time Analysis",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      text: "Rekomendasi Tepat",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-green-400 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={24 + Math.random() * 24}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="w-4 h-4" />
              <span>Teknologi AI Terdepan</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Prediksi Penyakit Tanaman dengan{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Unggah foto tanaman Anda, biarkan AI menganalisis dan memberikan
              rekomendasi perawatan yang tepat untuk kesehatan tanaman optimal.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "10K+", label: "Pengguna" },
                { value: "50K+", label: "Prediksi" },
                { value: "99%", label: "Akurasi" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("prediction")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
              >
                Mulai Prediksi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* AI + Plant Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                  alt="AI Agriculture Technology"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* AI Badge with Animation */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    AI Powered
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">
                        Status Analisis
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        Siap Digunakan
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -top-6 -left-6 transform transition-all hover:scale-110">
                <div
                  className={`bg-gradient-to-r ${features[activeFeature].color} text-white p-4 rounded-2xl shadow-xl`}
                >
                  {(() => {
                    const IconComponent = features[activeFeature].icon;
                    return <IconComponent className="w-6 h-6 mb-2" />;
                  })()}
                  <span className="text-sm font-bold block">
                    {features[activeFeature].text}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-xs font-semibold">Support</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-green-200 rounded-full filter blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-emerald-200 rounded-full filter blur-2xl opacity-60 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>Terverifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <span>Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.4; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
