import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

export function Footer({ onNavigate, currentPage }: { onNavigate?: (page: string, section?: string) => void, currentPage?: string }) {
  const footerLinks = {
    platform: [
      { name: "Beranda", page: "home", section: "home" },
      { name: "Tentang Kami", page: "home", section: "about" },
      { name: "Prediksi Penyakit", page: "home", section: "prediction" },
      { name: "Jenis Tanaman", page: "home", section: "plants" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/p.adiityaa", color: "hover:bg-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/padiityaa", color: "hover:bg-blue-700" }
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof footerLinks.platform[0]) => {
    e.preventDefault();
    
    if (item.page !== currentPage) {
      onNavigate?.(item.page, item.section);
    } else {
      if (item.section) {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#1B4332] via-[#2D5A27] to-[#1B4332] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-5">
            <div className="group mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Leaf className="h-7 w-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-3xl">PlantAI</span>
                  <div className="text-xs text-green-300 font-medium">Smart Detection</div>
                </div>
              </div>
            </div>
            
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              Platform AI terdepan untuk prediksi dan diagnosis penyakit tanaman. 
              Membantu petani dan pecinta tanaman mengoptimalkan kesehatan tanaman 
              dengan teknologi machine learning yang akurat.
            </p>

            {/* Contact Info with Icons */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-green-600/30 p-3 rounded-xl group-hover:bg-green-500 transition-colors">
                  <Mail className="h-5 w-5 text-green-200 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-green-300 mb-1">Email</div>
                  <a href="mailto:paulusaditya13@gmail.com" className="text-green-100 group-hover:text-white transition-colors">
                    paulusaditya13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-green-600/30 p-3 rounded-xl group-hover:bg-green-500 transition-colors">
                  <Phone className="h-5 w-5 text-green-200 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-green-300 mb-1">Telepon</div>
                  <a href="tel:+6281289127749" className="text-green-100 group-hover:text-white transition-colors">
                    +62 812 8912 7749
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-green-600/30 p-3 rounded-xl">
                  <MapPin className="h-5 w-5 text-green-200" />
                </div>
                <div>
                  <div className="text-xs text-green-300 mb-1">Lokasi</div>
                  <span className="text-green-100">Jember, Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              Platform
            </h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.section ? `#${link.section}` : `#${link.page}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className="group flex items-center text-green-100 hover:text-white transition-all duration-200"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              Statistik Platform
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10K+", label: "Pengguna Aktif" },
                { value: "50K+", label: "Prediksi Berhasil" },
                { value: "99%", label: "Tingkat Akurasi" },
                { value: "24/7", label: "Support" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all hover:scale-105 border border-green-400/20">
                  <div className="text-3xl font-bold text-green-300 mb-1">{stat.value}</div>
                  <div className="text-sm text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-600/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-green-100 text-sm text-center md:text-left">
              <div className="font-semibold mb-1">© 2025 PlantAI. Semua hak cipta dilindungi.</div>
              <div className="text-xs text-green-300">Dibuat dengan ❤️ untuk pertanian Indonesia</div>
            </div>
            
            {/* Social Links with Hover Effects */}
            <div className="flex items-center gap-3">
              <span className="text-green-300 text-sm mr-2">Ikuti Kami:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group relative bg-green-600/30 hover:scale-110 p-3 rounded-xl transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-green-100 group-hover:text-white transition-colors relative z-10" />
                    {social.href.startsWith('http') && (
                      <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 text-green-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-green-600/20">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-green-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Platform Terverifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                <span>Data Aman & Terenkripsi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
                <span>Support 24/7</span>
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}