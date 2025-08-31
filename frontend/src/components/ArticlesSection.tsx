import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Calendar, User } from "lucide-react";

export function ArticlesSection({ onViewAll, onReadMore }: { onViewAll?: () => void; onReadMore?: (articleId: number) => void }) {
  const articles = [
    {
      id: 1,
      title: "Cara Mengidentifikasi Penyakit Daun pada Tanaman Tomat",
      summary: "Panduan lengkap untuk mengenali tanda-tanda awal penyakit pada daun tomat dan cara mengatasinya dengan metode organik.",
      image: "https://images.unsplash.com/photo-1718769690977-68696758a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGRpc2Vhc2UlMjBpZGVudGlmaWNhdGlvbiUyMGxlYWZ8ZW58MXx8fHwxNzU2NDc1MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Identifikasi Penyakit",
      author: "Dr. Sari Pertani",
      date: "15 Des 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Teknologi AI dalam Pertanian Modern",
      summary: "Eksplorasi mendalam tentang bagaimana kecerdasan buatan merevolusi industri pertanian dan meningkatkan produktivitas panen.",
      image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHJlc2VhcmNoJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTY0NzUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Prof. Budi Teknologi",
      date: "12 Des 2024",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Tips Perawatan Tanaman untuk Pemula",
      summary: "Panduan praktis untuk merawat tanaman hias dan sayuran di rumah, mulai dari pemilihan media tanam hingga jadwal penyiraman.",
      image: "https://images.unsplash.com/photo-1708255562613-9fe6d37ab95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGNhcmUlMjBnYXJkZW5pbmclMjB0aXBzfGVufDF8fHx8MTc1NjQ3NTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tips Perawatan",
      author: "Rina Kebun",
      date: "10 Des 2024",
      readTime: "6 min"
    }
  ];

  return (
    <section id="docs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artikel & Dokumentasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih dalam tentang kesehatan tanaman, teknologi AI, dan tips perawatan dari para ahli
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#2E7D32] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 line-clamp-3">
                  {article.summary}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
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

        <div className="text-center">
          <Button 
            onClick={onViewAll}
            variant="outline" 
            size="lg" 
            className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-8"
          >
            Lihat Semua Artikel
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}