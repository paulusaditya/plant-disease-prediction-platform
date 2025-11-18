// solusi.ts
export interface SolusiPenyakit {
  nama: string;
  saranPerawatan: string[];
  tipsPencegahan: string[];
}

// =====================
// SOLUSI TOMATO
// =====================

export const solusi: Record<string, SolusiPenyakit> = {
  Bacterial_spot: {
    nama: "Bacterial Spot",
    saranPerawatan: [
      "Gunakan fungisida sesuai dosis",
      "Potong daun yang terinfeksi",
      "Jaga kelembaban tanah",
    ],
    tipsPencegahan: [
      "Rotasi tanaman",
      "Gunakan varietas tahan penyakit",
      "Jaga jarak tanam",
    ],
  },

  Early_blight: {
    nama: "Early Blight",
    saranPerawatan: [
      "Buang daun yang rusak",
      "Semprot fungisida berbahan tembaga",
      "Tingkatkan aerasi di sekitar tanaman",
    ],
    tipsPencegahan: [
      "Gunakan mulsa",
      "Penyiraman pada pangkal tanaman",
      "Pemupukan berimbang NPK",
    ],
  },

  Healthy: {
    nama: "Tanaman Sehat",
    saranPerawatan: [
      "Tidak ditemukan penyakit.",
      "Pertahankan perawatan rutin.",
    ],
    tipsPencegahan: [
      "Jaga kebersihan lahan",
      "Pemupukan teratur",
      "Cek tanaman secara berkala",
    ],
  },

  Late_blight: {
    nama: "Late Blight",
    saranPerawatan: [
      "Buang daun terinfeksi segera",
      "Gunakan fungisida sistemik",
      "Kurangi kelembaban lingkungan",
    ],
    tipsPencegahan: [
      "Rotasi tanaman minimal 2 musim",
      "Gunakan varietas tahan penyakit",
      "Pengaturan jarak tanam yang cukup",
    ],
  },

  Leaf_mold: {
    nama: "Leaf Mold",
    saranPerawatan: [
      "Perbaiki sirkulasi udara",
      "Kurangi penyiraman berlebih",
      "Gunakan fungisida jika perlu",
    ],
    tipsPencegahan: [
      "Jangan menyiram bagian daun",
      "Gunakan greenhouse yang berventilasi baik",
      "Pantau kelembaban lingkungan",
    ],
  },

  Mosaic_virus: {
    nama: "Mosaic Virus",
    saranPerawatan: [
      "Cabut tanaman yang terinfeksi parah",
      "Kendalikan vektor seperti kutu daun",
      "Gunakan pestisida nabati untuk hama pembawa virus",
    ],
    tipsPencegahan: [
      "Gunakan bibit bersertifikat",
      "Sterilkan alat berkebun",
      "Kontrol hama secara rutin",
    ],
  },

  Septoria_leaf_spot: {
    nama: "Septoria Leaf Spot",
    saranPerawatan: [
      "Buang daun bawah yang terinfeksi",
      "Semprotkan fungisida klorotalonil",
      "Hindari penyiraman dari atas",
    ],
    tipsPencegahan: [
      "Gunakan jarak tanam ideal",
      "Rotasi tanaman setiap musim",
      "Gunakan mulsa plastik",
    ],
  },

  Spider_mites: {
    nama: "Spider Mites",
    saranPerawatan: [
      "Semprot air untuk menyingkirkan tungau",
      "Gunakan mitisida bila diperlukan",
      "Jaga kelembaban tetap stabil",
    ],
    tipsPencegahan: [
      "Cegah kondisi terlalu kering",
      "Inspeksi daun bawah secara rutin",
      "Gunakan predator alami (ladybugs)",
    ],
  },

  Target_spot: {
    nama: "Target Spot",
    saranPerawatan: [
      "Buang daun terinfeksi",
      "Gunakan fungisida preventif",
      "Kurangi kelembaban daun",
    ],
    tipsPencegahan: [
      "Rotasi tanaman",
      "Sirkulasi udara yang baik",
      "Hindari penyiraman daun",
    ],
  },

  Yellow_leaf_curl_virus: {
    nama: "Yellow Leaf Curl Virus",
    saranPerawatan: [
      "Cabut tanaman yang terinfeksi berat",
      "Kendalikan kutu kebul (whiteflies)",
      "Gunakan insektisida nabati",
    ],
    tipsPencegahan: [
      "Gunakan jaring anti-serangga",
      "Tanam varietas tahan virus",
      "Bersihkan gulma di sekitar area",
    ],
  },

  // =====================
  // SOLUSI POTATO
  // =====================

  Potato___Early_blight: {
    nama: "Potato Early Blight",
    saranPerawatan: [
      "Buang daun terinfeksi",
      "Gunakan fungisida berbahan tembaga",
      "Perbaiki drainase tanah",
    ],
    tipsPencegahan: [
      "Rotasi tanaman 2–3 tahun",
      "Pemupukan seimbang",
      "Tanam bibit bebas penyakit",
    ],
  },

  Potato___Late_blight: {
    nama: "Potato Late Blight",
    saranPerawatan: [
      "Semprot fungisida sistemik",
      "Hindari kelembaban tinggi",
      "Buang bagian tanaman yang busuk",
    ],
    tipsPencegahan: [
      "Gunakan varietas tahan blight",
      "Jarak tanam ideal",
      "Pembersihan gulma dan sisa tanaman",
    ],
  },

  Potato___healthy: {
    nama: "Tanaman Kentang Sehat",
    saranPerawatan: ["Tidak ada tindakan khusus."],
    tipsPencegahan: [
      "Pantau tanaman rutin",
      "Pemupukan berkala",
      "Jaga kualitas tanah",
    ],
  },
  // =====================
  // SOLUSI CORN (JAGUNG)
  // =====================

  "Common Rust": {
    nama: "Common Rust (Karat Daun Jagung)",
    saranPerawatan: [
      "Gunakan fungisida berbahan aktif strobilurin atau triazol",
      "Buang daun yang terinfeksi berat",
      "Kurangi kelembaban di area tanaman",
    ],
    tipsPencegahan: [
      "Tanam varietas jagung tahan karat",
      "Rotasi tanaman minimal 2 musim",
      "Gunakan jarak tanam yang cukup untuk sirkulasi udara",
    ],
  },

  "Gray Leaf Spot": {
    nama: "Gray Leaf Spot",
    saranPerawatan: [
      "Semprotkan fungisida sesuai dosis anjuran",
      "Perbaiki aerasi dengan mengatur jarak tanam",
      "Buang daun bawah yang menunjukkan gejala awal",
    ],
    tipsPencegahan: [
      "Rotasi dengan tanaman non-host",
      "Gunakan bibit bersertifikat dan tahan penyakit",
      "Kurangi kelembaban melalui manajemen irigasi",
    ],
  },

  Healthy_Corn: {
    nama: "Jagung Sehat",
    saranPerawatan: [
      "Pertahankan perawatan seperti biasa",
      "Pemupukan sesuai kebutuhan",
      "Pantau gejala penyakit secara rutin",
    ],
    tipsPencegahan: [
      "Gunakan benih berkualitas",
      "Pastikan lahan bersih dan bebas gulma",
      "Lakukan rotasi tanaman secara teratur",
    ],
  },

  "Northern Leaf Blight": {
    nama: "Northern Leaf Blight",
    saranPerawatan: [
      "Gunakan fungisida sistemik bila gejala semakin parah",
      "Buang bagian tanaman yang rusak",
      "Perkuat nutrisi tanaman agar lebih tahan penyakit",
    ],
    tipsPencegahan: [
      "Pilih varietas tahan NLB",
      "Rotasi tanaman 2–3 tahun",
      "Kelola irigasi agar daun tidak terlalu basah",
    ],
  },
};
