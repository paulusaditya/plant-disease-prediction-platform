import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const footerLinks = {
    platform: [
      { name: "Beranda", href: "#home" },
      { name: "Tentang Kami", href: "#about" },
      { name: "Prediksi Penyakit", href: "#prediction" },
      { name: "Jenis Tanaman", href: "#plants" }
    ],
    resources: [
      { name: "Dokumentasi", href: "#docs" },
      { name: "Tutorial", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    support: [
      { name: "Pusat Bantuan", href: "#" },
      { name: "Kontak", href: "#contact" },
      { name: "Lapor Masalah", href: "#" },
      { name: "Status Sistem", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1B4332] to-[#2D5A27] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-green-600/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Tetap Update dengan Informasi Terbaru
            </h3>
            <p className="text-green-100 mb-6">
              Dapatkan tips perawatan tanaman, update fitur AI, dan artikel menarik langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-green-400/30 placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Button className="bg-[#A1887F] hover:bg-[#8D6E63] text-white px-6 py-3 rounded-xl">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#A1887F] p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl">PlantAI</span>
            </div>
            
            <p className="text-green-100 mb-6 max-w-md">
              Platform AI terdepan untuk prediksi dan diagnosis penyakit tanaman. 
              Membantu petani dan pecinta tanaman mengoptimalkan kesehatan tanaman 
              dengan teknologi machine learning yang akurat.
            </p>

            <div className="space-y-3 text-green-100">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#A1887F]" />
                <span>support@plantai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#A1887F]" />
                <span>+62 21 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Sumber Daya</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Dukungan</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-600/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-green-100 text-sm">
              © 2024 PlantAI. Semua hak cipta dilindungi. Dibuat dengan ❤️ untuk pertanian Indonesia.
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-green-600/30 hover:bg-[#A1887F] p-3 rounded-xl transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-green-100 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}