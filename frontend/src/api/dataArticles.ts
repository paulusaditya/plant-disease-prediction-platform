export interface Article {
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

export const allArticles: Article[] = [
  {
    id: 1,
    title: "Cara Mengidentifikasi Penyakit Daun pada Tanaman Tomat",
    summary:
      "Panduan lengkap untuk mengenali tanda-tanda awal penyakit pada daun tomat dan cara mengatasinya dengan metode organik yang efektif.",
    image:
      "https://images.unsplash.com/photo-1718769690977-68696758a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGRpc2Vhc2UlMjBpZGVudGlmaWNhdGlvbiUyMGxlYWZ8ZW58MXx8fHwxNzU2NDc1MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Identifikasi Penyakit",
    author: "Dr. Sari Pertani",
    date: "15 Des 2024",
    readTime: "5 min",
    tags: ["tomat", "penyakit-daun", "organik"],
    featured: true,
  },
  {
    id: 2,
    title: "Teknologi AI dalam Pertanian Modern",
    summary:
      "Eksplorasi mendalam tentang bagaimana kecerdasan buatan merevolusi industri pertanian dan meningkatkan produktivitas panen secara signifikan.",
    image:
      "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHJlc2VhcmNoJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTY0NzUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Teknologi AI",
    author: "Prof. Budi Teknologi",
    date: "12 Des 2024",
    readTime: "8 min",
    tags: ["ai", "machine-learning", "otomasi"],
    featured: true,
  },
  {
    id: 3,
    title: "Tips Perawatan Tanaman untuk Pemula",
    summary:
      "Panduan praktis untuk merawat tanaman hias dan sayuran di rumah, mulai dari pemilihan media tanam hingga jadwal penyiraman yang tepat.",
    image:
      "https://images.unsplash.com/photo-1708255562613-9fe6d37ab95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGNhcmUlMjBnYXJkZW5pbmclMjB0aXBzfGVufDF8fHx8MTc1NjQ3NTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tips Perawatan",
    author: "Rina Kebun",
    date: "10 Des 2024",
    readTime: "6 min",
    tags: ["perawatan", "pemula", "tips"],
    featured: false,
  },
  {
    id: 4,
    title: "Riset Terbaru: Prediksi Penyakit Tanaman dengan Machine Learning",
    summary:
      "Studi terbaru menunjukkan akurasi prediksi penyakit tanaman mencapai 98% menggunakan teknik deep learning dan computer vision.",
    image:
      "https://images.unsplash.com/photo-1601601319316-bace8ae2b548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGRpc2Vhc2UlMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzU2NDc5NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Teknologi AI",
    author: "Dr. Ahmad Peneliti",
    date: "8 Des 2024",
    readTime: "12 min",
    tags: ["penelitian", "machine-learning", "akurasi"],
    featured: false,
  },
  {
    id: 5,
    title: "Smart Farming: Masa Depan Pertanian Indonesia",
    summary:
      "Implementasi teknologi pintar dalam pertanian dapat meningkatkan efisiensi hingga 40% dan mengurangi penggunaan pestisida secara drastis.",
    image:
      "https://images.unsplash.com/photo-1722119272044-fc49006131e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQxNDQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Teknologi AI",
    author: "Ir. Sinta Digital",
    date: "5 Des 2024",
    readTime: "10 min",
    tags: ["smart-farming", "efisiensi", "teknologi"],
    featured: true,
  },
  {
    id: 6,
    title: "Mengenal Penyakit Umum pada Tanaman Cabai",
    summary:
      "Identifikasi dan penanganan penyakit antraknosa, bercak daun, dan keriting daun yang sering menyerang tanaman cabai.",
    image:
      "https://images.unsplash.com/photo-1710663497561-b98b13c09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMHBsYW50fGVufDF8fHx8MTc1NjQ3NTQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Identifikasi Penyakit",
    author: "Dr. Maya Hortikultura",
    date: "3 Des 2024",
    readTime: "7 min",
    tags: ["cabai", "antraknosa", "bercak-daun"],
    featured: false,
  },
  {
    id: 7,
    title: "Pertanian Organik: Solusi Ramah Lingkungan",
    summary:
      "Praktik pertanian organik tidak hanya menghasilkan produk yang lebih sehat, tetapi juga menjaga kelestarian lingkungan untuk generasi mendatang.",
    image:
      "https://images.unsplash.com/photo-1722810767149-4b153d88402e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU2Mzk5NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tips Perawatan",
    author: "Eco Farmer",
    date: "1 Des 2024",
    readTime: "9 min",
    tags: ["organik", "lingkungan", "berkelanjutan"],
    featured: false,
  },
  {
    id: 8,
    title: "Greenhouse Modern: Optimalisasi Pertanian Vertikal",
    summary:
      "Teknologi greenhouse terkini memungkinkan produksi tanaman sepanjang tahun dengan kontrol iklim yang presisi dan efisiensi ruang maksimal.",
    image:
      "https://images.unsplash.com/photo-1697551789383-ba8d2d8ee054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NTY0Nzk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Teknologi AI",
    author: "Ir. Bambang Hidroponik",
    date: "28 Nov 2024",
    readTime: "11 min",
    tags: ["greenhouse", "vertikal", "hidroponik"],
    featured: false,
  },
  {
    id: 9,
    title: "Computer Vision untuk Deteksi Dini Hama Tanaman",
    summary:
      "Implementasi teknologi computer vision dalam mendeteksi keberadaan hama pada tahap awal sebelum merusak tanaman secara signifikan.",
    image:
      "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQ3NTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Teknologi AI",
    author: "Tech Agri Team",
    date: "25 Nov 2024",
    readTime: "8 min",
    tags: ["computer-vision", "hama", "deteksi-dini"],
    featured: true,
  },
  {
    id: 10,
    title: "Nutrisi Tanaman: Panduan Lengkap Pemupukan",
    summary:
      "Memahami kebutuhan nutrisi tanaman dan cara memberikan pupuk yang tepat sesuai dengan fase pertumbuhan untuk hasil optimal.",
    image:
      "https://images.unsplash.com/photo-1593708697557-f2feca483132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMGZhcm1pbmd8ZW58MXx8fHwxNzU2NDc1MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tips Perawatan",
    author: "Agro Nutrisi",
    date: "22 Nov 2024",
    readTime: "6 min",
    tags: ["nutrisi", "pupuk", "pertumbuhan"],
    featured: false,
  },
];
