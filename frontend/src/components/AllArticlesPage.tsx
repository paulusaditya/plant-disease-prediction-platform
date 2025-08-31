import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Clock
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export function AllArticlesPage({ onBack, onReadMore }: { onBack: () => void; onReadMore?: (articleId: number) => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const allArticles: Article[] = [
    {
      id: 1,
      title: "Cara Mengidentifikasi Penyakit Daun pada Tanaman Tomat",
      summary: "Panduan lengkap untuk mengenali tanda-tanda awal penyakit pada daun tomat dan cara mengatasinya dengan metode organik yang efektif.",
      image: "https://images.unsplash.com/photo-1718769690977-68696758a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGRpc2Vhc2UlMjBpZGVudGlmaWNhdGlvbiUyMGxlYWZ8ZW58MXx8fHwxNzU2NDc1MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Identifikasi Penyakit",
      author: "Dr. Sari Pertani",
      date: "15 Des 2024",
      readTime: "5 min",
      tags: ["tomat", "penyakit-daun", "organik"],
      featured: true
    },
    {
      id: 2,
      title: "Teknologi AI dalam Pertanian Modern",
      summary: "Eksplorasi mendalam tentang bagaimana kecerdasan buatan merevolusi industri pertanian dan meningkatkan produktivitas panen secara signifikan.",
      image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHJlc2VhcmNoJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTY0NzUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Prof. Budi Teknologi",
      date: "12 Des 2024",
      readTime: "8 min",
      tags: ["ai", "machine-learning", "otomasi"],
      featured: true
    },
    {
      id: 3,
      title: "Tips Perawatan Tanaman untuk Pemula",
      summary: "Panduan praktis untuk merawat tanaman hias dan sayuran di rumah, mulai dari pemilihan media tanam hingga jadwal penyiraman yang tepat.",
      image: "https://images.unsplash.com/photo-1708255562613-9fe6d37ab95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGNhcmUlMjBnYXJkZW5pbmclMjB0aXBzfGVufDF8fHx8MTc1NjQ3NTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tips Perawatan",
      author: "Rina Kebun",
      date: "10 Des 2024",
      readTime: "6 min",
      tags: ["perawatan", "pemula", "tips"],
      featured: false
    },
    {
      id: 4,
      title: "Riset Terbaru: Prediksi Penyakit Tanaman dengan Machine Learning",
      summary: "Studi terbaru menunjukkan akurasi prediksi penyakit tanaman mencapai 98% menggunakan teknik deep learning dan computer vision.",
      image: "https://images.unsplash.com/photo-1601601319316-bace8ae2b548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGRpc2Vhc2UlMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzU2NDc5NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Dr. Ahmad Peneliti",
      date: "8 Des 2024",
      readTime: "12 min",
      tags: ["penelitian", "machine-learning", "akurasi"],
      featured: false
    },
    {
      id: 5,
      title: "Smart Farming: Masa Depan Pertanian Indonesia",
      summary: "Implementasi teknologi pintar dalam pertanian dapat meningkatkan efisiensi hingga 40% dan mengurangi penggunaan pestisida secara drastis.",
      image: "https://images.unsplash.com/photo-1722119272044-fc49006131e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQxNDQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Ir. Sinta Digital",
      date: "5 Des 2024",
      readTime: "10 min",
      tags: ["smart-farming", "efisiensi", "teknologi"],
      featured: true
    },
    {
      id: 6,
      title: "Mengenal Penyakit Umum pada Tanaman Cabai",
      summary: "Identifikasi dan penanganan penyakit antraknosa, bercak daun, dan keriting daun yang sering menyerang tanaman cabai.",
      image: "https://images.unsplash.com/photo-1710663497561-b98b13c09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMHBsYW50fGVufDF8fHx8MTc1NjQ3NTQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Identifikasi Penyakit",
      author: "Dr. Maya Hortikultura",
      date: "3 Des 2024",
      readTime: "7 min",
      tags: ["cabai", "antraknosa", "bercak-daun"],
      featured: false
    },
    {
      id: 7,
      title: "Pertanian Organik: Solusi Ramah Lingkungan",
      summary: "Praktik pertanian organik tidak hanya menghasilkan produk yang lebih sehat, tetapi juga menjaga kelestarian lingkungan untuk generasi mendatang.",
      image: "https://images.unsplash.com/photo-1722810767149-4b153d88402e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU2Mzk5NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tips Perawatan",
      author: "Eco Farmer",
      date: "1 Des 2024",
      readTime: "9 min",
      tags: ["organik", "lingkungan", "berkelanjutan"],
      featured: false
    },
    {
      id: 8,
      title: "Greenhouse Modern: Optimalisasi Pertanian Vertikal",
      summary: "Teknologi greenhouse terkini memungkinkan produksi tanaman sepanjang tahun dengan kontrol iklim yang presisi dan efisiensi ruang maksimal.",
      image: "https://images.unsplash.com/photo-1697551789383-ba8d2d8ee054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NTY0Nzk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Ir. Bambang Hidroponik",
      date: "28 Nov 2024",
      readTime: "11 min",
      tags: ["greenhouse", "vertikal", "hidroponik"],
      featured: false
    },
    {
      id: 9,
      title: "Computer Vision untuk Deteksi Dini Hama Tanaman",
      summary: "Implementasi teknologi computer vision dalam mendeteksi keberadaan hama pada tahap awal sebelum merusak tanaman secara signifikan.",
      image: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQ3NTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Tech Agri Team",
      date: "25 Nov 2024",
      readTime: "8 min",
      tags: ["computer-vision", "hama", "deteksi-dini"],
      featured: true
    },
    {
      id: 10,
      title: "Nutrisi Tanaman: Panduan Lengkap Pemupukan",
      summary: "Memahami kebutuhan nutrisi tanaman dan cara memberikan pupuk yang tepat sesuai dengan fase pertumbuhan untuk hasil optimal.",
      image: "https://images.unsplash.com/photo-1593708697557-f2feca483132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMGZhcm1pbmd8ZW58MXx8fHwxNzU2NDc1MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tips Perawatan",
      author: "Agro Nutrisi",
      date: "22 Nov 2024",
      readTime: "6 min",
      tags: ["nutrisi", "pupuk", "pertumbuhan"],
      featured: false
    }
  ];

  const categories = ["Semua", "Teknologi AI", "Identifikasi Penyakit", "Tips Perawatan"];

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const featuredArticles = filteredArticles.filter(article => article.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artikel & Dokumentasi
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Koleksi lengkap panduan, riset, dan tips terkini tentang kesehatan tanaman, 
              teknologi AI, dan praktik pertanian modern
            </p>
            <Button 
              onClick={onBack}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#2E7D32]"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 flex items-center">
                    <Search className="mr-2 h-5 w-5" />
                    Pencarian
                  </h3>
                  <Input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                  />
                </div>
              </Card>

              {/* Categories Filter */}
              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 flex items-center">
                    <Filter className="mr-2 h-5 w-5" />
                    Kategori
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-[#2E7D32] text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Stats */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#2E7D32]">
                    {filteredArticles.length}
                  </div>
                  <div className="text-gray-600">
                    Artikel Ditemukan
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Unggulan</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {featuredArticles.map((article) => (
                    <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => onReadMore?.(article.id)}>
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-[#2E7D32] text-white">
                          Unggulan
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-sm text-gray-900 line-clamp-2 mb-2 group-hover:text-[#2E7D32] transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "Semua" ? "Semua Artikel" : `Artikel ${selectedCategory}`}
                </h2>
                <div className="text-gray-600">
                  Menampilkan {startIndex + 1}-{Math.min(startIndex + articlesPerPage, filteredArticles.length)} dari {filteredArticles.length} artikel
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((article) => (
                  <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#2E7D32] text-white">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {article.summary}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => onReadMore?.(article.id)}
                        variant="outline" 
                        className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white disabled:opacity-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Sebelumnya
                  </Button>
                  
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page 
                          ? "bg-[#2E7D32] text-white hover:bg-[#1B5E20]" 
                          : "border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                        }
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white disabled:opacity-50"
                  >
                    Berikutnya
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* No Results */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tidak ada artikel yang ditemukan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Semua");
                    }}
                    variant="outline"
                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                  >
                    Reset Filter
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}