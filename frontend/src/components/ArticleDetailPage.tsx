import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Tag,
  Eye
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
}

interface ArticleDetailPageProps {
  articleId: number;
  onBack: () => void;
  onNavigateToArticle: (id: number) => void;
}

export function ArticleDetailPage({ articleId, onBack, onNavigateToArticle }: ArticleDetailPageProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Mock article data dengan konten lengkap
  const articles: Article[] = [
    {
      id: 1,
      title: "Cara Mengidentifikasi Penyakit Daun pada Tanaman Tomat",
      summary: "Panduan lengkap untuk mengenali tanda-tanda awal penyakit pada daun tomat dan cara mengatasinya dengan metode organik yang efektif.",
      content: `
        <h2>Pengenalan Penyakit Daun Tomat</h2>
        <p>Tanaman tomat merupakan salah satu komoditas hortikultura yang paling populer dan banyak dibudidayakan di seluruh dunia. Namun, seperti tanaman lainnya, tomat rentan terhadap berbagai penyakit, terutama yang menyerang bagian daun. Identifikasi dini penyakit daun sangat penting untuk mencegah penyebaran dan meminimalkan kerugian hasil panen.</p>

        <h2>Jenis-Jenis Penyakit Daun Tomat</h2>
        
        <h3>1. Bercak Daun (Septoria Leaf Spot)</h3>
        <p>Penyakit ini disebabkan oleh jamur <em>Septoria lycopersici</em> dan ditandai dengan munculnya bercak-bercak kecil berwarna coklat dengan pusat yang lebih terang. Bercak ini biasanya dimulai dari daun bagian bawah dan menyebar ke atas.</p>
        
        <p><strong>Gejala yang dapat diamati:</strong></p>
        <ul>
          <li>Bercak kecil bulat berdiameter 1-3 mm</li>
          <li>Warna coklat gelap dengan tepi yang jelas</li>
          <li>Pusat bercak berwarna abu-abu atau putih</li>
          <li>Daun menguning dan gugur secara prematur</li>
        </ul>

        <h3>2. Hawar Dini (Early Blight)</h3>
        <p>Disebabkan oleh jamur <em>Alternaria solani</em>, penyakit ini menghasilkan bercak besar berbentuk konsentris seperti target. Penyakit ini sering muncul pada kondisi hangat dan lembab.</p>

        <p><strong>Karakteristik penyakit:</strong></p>
        <ul>
          <li>Bercak besar dengan pola lingkaran konsentris</li>
          <li>Warna coklat hingga hitam</li>
          <li>Dimulai dari daun tua di bagian bawah</li>
          <li>Dapat menyerang batang dan buah</li>
        </ul>

        <h3>3. Hawar Akhir (Late Blight)</h3>
        <p>Penyakit yang sangat merusak ini disebabkan oleh <em>Phytophthora infestans</em>. Dalam kondisi yang mendukung, penyakit ini dapat menghancurkan seluruh tanaman dalam waktu singkat.</p>

        <h2>Metode Identifikasi</h2>
        
        <h3>Pengamatan Visual</h3>
        <p>Lakukan pemeriksaan rutin pada tanaman tomat, minimal 2-3 kali seminggu. Perhatikan perubahan warna, bentuk, dan tekstur daun. Dokumentasikan temuan dengan foto untuk perbandingan.</p>

        <h3>Penggunaan Teknologi AI</h3>
        <p>Platform prediksi penyakit berbasis AI dapat membantu identifikasi dengan akurasi tinggi. Cukup unggah foto daun yang suspect, dan sistem akan memberikan diagnosis dalam hitungan detik.</p>

        <h2>Strategi Pengendalian Organik</h2>
        
        <h3>1. Pencegahan</h3>
        <ul>
          <li><strong>Rotasi tanaman:</strong> Hindari menanam tomat di lokasi yang sama secara berturut-turut</li>
          <li><strong>Sanitasi kebun:</strong> Bersihkan sisa-sisa tanaman yang terinfeksi</li>
          <li><strong>Pengaturan jarak tanam:</strong> Pastikan sirkulasi udara yang baik</li>
          <li><strong>Pemilihan varietas tahan:</strong> Gunakan varietas yang memiliki resistensi genetik</li>
        </ul>

        <h3>2. Pengendalian Biologis</h3>
        <p>Aplikasi mikroorganisme menguntungkan seperti <em>Trichoderma</em> dan <em>Bacillus subtilis</em> dapat membantu menekan pertumbuhan patogen. Penggunaan kompos yang matang juga meningkatkan populasi mikroba antagonis di tanah.</p>

        <h3>3. Pengendalian Kimiawi Organik</h3>
        <ul>
          <li><strong>Ekstrak bawang putih:</strong> Memiliki sifat fungisida alami</li>
          <li><strong>Larutan baking soda:</strong> Efektif untuk mengendalikan jamur</li>
          <li><strong>Minyak neem:</strong> Berfungsi sebagai fungisida dan insektisida alami</li>
        </ul>

        <h2>Monitoring dan Evaluasi</h2>
        <p>Setelah aplikasi pengendalian, lakukan monitoring secara berkala untuk mengevaluasi efektivitas tindakan yang dilakukan. Catat perkembangan penyakit dan respons tanaman terhadap perlakuan.</p>

        <h2>Kesimpulan</h2>
        <p>Identifikasi dini penyakit daun tomat merupakan kunci keberhasilan dalam budidaya. Dengan kombinasi pengamatan visual, teknologi AI, dan penerapan strategi pengendalian yang tepat, produktivitas tomat dapat dioptimalkan sambil menjaga kelestarian lingkungan.</p>
      `,
      image: "https://images.unsplash.com/photo-1730566610150-7d3e30a0dd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGRpc2Vhc2UlMjBsZWF2ZXMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1NjQ4MDM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Identifikasi Penyakit",
      author: "Dr. Sari Pertani",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      authorBio: "Ahli Fitopatologi dengan pengalaman 15 tahun dalam penelitian penyakit tanaman hortikultura. Lulusan IPB dan pernah bekerja di berbagai institusi penelitian internasional.",
      date: "15 Des 2024",
      readTime: "5 min",
      tags: ["tomat", "penyakit-daun", "organik", "identifikasi", "pencegahan"],
      featured: true,
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: "Teknologi AI dalam Pertanian Modern",
      summary: "Eksplorasi mendalam tentang bagaimana kecerdasan buatan merevolusi industri pertanian dan meningkatkan produktivitas panen secara signifikan.",
      content: `
        <h2>Revolusi Digital di Sektor Pertanian</h2>
        <p>Pertanian modern telah mengalami transformasi digital yang luar biasa dalam dekade terakhir. Teknologi Artificial Intelligence (AI) kini menjadi game-changer yang mengubah cara petani mengelola lahan, memantau tanaman, dan mengoptimalkan hasil panen.</p>

        <h2>Aplikasi AI dalam Pertanian</h2>
        
        <h3>1. Computer Vision untuk Monitoring Tanaman</h3>
        <p>Teknologi computer vision memungkinkan identifikasi otomatis penyakit tanaman, hama, dan kekurangan nutrisi melalui analisis gambar. Sistem ini dapat mendeteksi anomali dengan akurasi hingga 98%, jauh melebihi kemampuan mata manusia.</p>

        <h3>2. Prediksi Cuaca dan Iklim</h3>
        <p>Machine learning algorithms menganalisis data meteorologi historis dan real-time untuk memberikan prediksi cuaca yang akurat. Informasi ini membantu petani dalam perencanaan jadwal tanam, penyiraman, dan panen.</p>

        <h3>3. Optimalisasi Penggunaan Sumber Daya</h3>
        <p>AI dapat mengoptimalkan penggunaan air, pupuk, dan pestisida berdasarkan analisis kondisi tanah, cuaca, dan kebutuhan spesifik tanaman. Hal ini tidak hanya mengurangi biaya produksi tetapi juga dampak lingkungan.</p>

        <h2>Implementasi Teknologi Smart Farming</h2>
        
        <h3>Internet of Things (IoT) dalam Pertanian</h3>
        <p>Sensor IoT yang terhubung dengan platform AI memungkinkan monitoring real-time kondisi tanah, kelembaban udara, suhu, dan parameter lingkungan lainnya. Data ini diproses untuk memberikan rekomendasi tindakan yang spesifik.</p>

        <h3>Drone dan Robotika</h3>
        <p>Penggunaan drone untuk pemetaan lahan, monitoring kesehatan tanaman, dan aplikasi pestisida secara presisi. Robot pertanian dapat melakukan tugas-tugas repetitif seperti penyemaian, pemupukan, dan panen dengan efisiensi tinggi.</p>

        <h2>Manfaat Ekonomi dan Lingkungan</h2>
        
        <h3>Peningkatan Produktivitas</h3>
        <ul>
          <li>Peningkatan hasil panen hingga 40%</li>
          <li>Pengurangan biaya operasional 25-30%</li>
          <li>Efisiensi penggunaan air hingga 50%</li>
          <li>Pengurangan penggunaan pestisida 35%</li>
        </ul>

        <h3>Dampak Lingkungan Positif</h3>
        <p>Penggunaan AI dalam pertanian berkontribusi pada praktik pertanian berkelanjutan dengan mengurangi jejak karbon, meminimalkan pencemaran tanah dan air, serta meningkatkan biodiversitas.</p>

        <h2>Tantangan dan Solusi</h2>
        
        <h3>Aksesibilitas Teknologi</h3>
        <p>Biaya implementasi yang tinggi menjadi hambatan utama bagi petani skala kecil. Solusinya adalah pengembangan platform SaaS (Software as a Service) yang terjangkau dan program subsidi pemerintah.</p>

        <h3>Literasi Digital</h3>
        <p>Pelatihan dan edukasi berkelanjutan diperlukan untuk meningkatkan kemampuan petani dalam menggunakan teknologi AI. Kemitraan dengan institusi pendidikan dan penyuluhan pertanian menjadi kunci sukses.</p>

        <h2>Masa Depan AI dalam Pertanian</h2>
        <p>Perkembangan teknologi AI terus berlanjut dengan integrasi blockchain untuk traceability, augmented reality untuk training, dan quantum computing untuk analisis data yang lebih kompleks. Indonesia memiliki potensi besar untuk menjadi leader dalam implementasi smart farming di kawasan Asia Tenggara.</p>
      `,
      image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwc21hcnQlMjBmYXJtaW5nfGVufDF8fHx8MTc1NjQ4MDM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Teknologi AI",
      author: "Prof. Budi Teknologi",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      authorBio: "Professor Teknik Informatika yang fokus pada aplikasi AI untuk pertanian. Pemegang 15 paten teknologi smart farming dan konsultan untuk berbagai startup agritech.",
      date: "12 Des 2024",
      readTime: "8 min",
      tags: ["ai", "machine-learning", "otomasi", "smart-farming", "teknologi"],
      featured: true,
      views: 3921,
      likes: 287,
      comments: 45
    }
  ];

  const currentArticle = articles.find(a => a.id === articleId);
  const relatedArticles = articles.filter(a => a.id !== articleId).slice(0, 3);

  if (!currentArticle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h2>
          <Button onClick={onBack}>Kembali ke Artikel</Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentArticle.title,
        text: currentArticle.summary,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-[#2E7D32] to-[#388E3C] overflow-hidden">
        <ImageWithFallback
          src={currentArticle.image}
          alt={currentArticle.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Button 
              onClick={onBack}
              variant="outline" 
              className="mb-6 border-white text-white hover:bg-white hover:text-[#2E7D32]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Artikel
            </Button>
            
            <Badge className="mb-4 bg-[#2E7D32] text-white">
              {currentArticle.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {currentArticle.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-green-100">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{currentArticle.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{currentArticle.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{currentArticle.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{currentArticle.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Article Actions */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex flex-wrap gap-2">
                    {currentArticle.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLiked(!liked)}
                      className={liked ? "bg-red-50 border-red-200 text-red-600" : ""}
                    >
                      <ThumbsUp className={`h-4 w-4 mr-1 ${liked ? "fill-current" : ""}`} />
                      {currentArticle.likes + (liked ? 1 : 0)}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setBookmarked(!bookmarked)}
                      className={bookmarked ? "bg-blue-50 border-blue-200 text-blue-600" : ""}
                    >
                      <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
                    </Button>
                    
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                />

                {/* Author Section */}
                <Separator className="my-8" />
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Penulis</h3>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <ImageWithFallback
                        src={currentArticle.authorImage}
                        alt={currentArticle.author}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{currentArticle.author}</h4>
                      <p className="text-gray-600">{currentArticle.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <Separator className="my-8" />
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Komentar ({currentArticle.comments})
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      Fitur komentar akan segera tersedia. 
                      Silakan hubungi kami untuk feedback atau pertanyaan.
                    </p>
                    <Button variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white">
                      Hubungi Kami
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Articles */}
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Artikel Terkait</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <div 
                      key={article.id}
                      className="cursor-pointer group"
                      onClick={() => onNavigateToArticle(article.id)}
                    >
                      <div className="flex space-x-3">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
                            {article.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock className="mr-1 h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Article Stats */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-bold text-gray-900 mb-4">Statistik Artikel</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-bold text-[#2E7D32]">{currentArticle.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-bold text-[#2E7D32]">{currentArticle.likes + (liked ? 1 : 0)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Comments</span>
                    <span className="font-bold text-[#2E7D32]">{currentArticle.comments}</span>
                  </div>
                </div>
              </Card>

              {/* Quick Navigation */}
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Navigasi Cepat</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => onNavigateToArticle(articleId > 1 ? articleId - 1 : articles.length)}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Artikel Sebelumnya
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => onNavigateToArticle(articleId < articles.length ? articleId + 1 : 1)}
                  >
                    Artikel Berikutnya
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}