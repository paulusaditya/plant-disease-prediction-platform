import { useState, useEffect } from "react";
import { Menu, X, Leaf, ChevronDown, Sparkles } from "lucide-react";

export function Header({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll otomatis ketika URL punya hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, []);

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "#about" },
    { name: "Prediksi Penyakit", href: "#prediction", featured: true },
    { name: "Jenis Tanaman", href: "#plants" },
    { name: "Artikel", href: "/articles", action: () => onNavigate?.("articles") },
  ];

  const handleNavigation = (e: React.MouseEvent, item: any) => {
    e.preventDefault();

    // Jika punya aksi custom (misal Artikel)
    if (item.action) {
      item.action();
      setActiveSection(item.href.replace("#", ""));
      return;
    }

    const isHome = window.location.pathname === "/";

    // Jika href diawali dengan #
    if (item.href.startsWith("#")) {
      const targetId = item.href.replace("#", "");

      if (isHome) {
        // Scroll langsung kalau sudah di halaman Home
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Pindah ke Home lalu scroll otomatis setelah load
        window.location.href = `/${item.href}`;
      }

      setActiveSection(targetId);
      return;
    }

    // Jika bukan hash (#), arahkan langsung ke halaman
    window.location.href = item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Leaf className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                PlantAI
              </span>
              <span className="text-xs text-gray-500 font-medium">Smart Detection</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item)}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer group ${
                  item.featured
                    ? "text-white"
                    : activeSection === item.href.replace("#", "")
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.featured ? (
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {item.name}
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl -z-10 group-hover:shadow-lg transition-shadow"></span>
                  </span>
                ) : (
                  <>
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transform origin-left transition-transform duration-300 ${
                        activeSection === item.href.replace("#", "")
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
                >
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-gray-100 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavigation(e, item);
                  setIsMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  item.featured
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : activeSection === item.href.replace("#", "")
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {item.featured && <Sparkles className="w-4 h-4" />}
                    {item.name}
                  </span>
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
