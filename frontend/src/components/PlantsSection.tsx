import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertTriangle } from "lucide-react";

export function PlantsSection() {
  const plants = [
    {
      id: 1,
      name: "Tomat",
      description: "Tanaman tomat (Solanum lycopersicum) adalah tanaman sayuran populer yang mudah dibudidayakan di berbagai iklim.",
      image: "https://images.unsplash.com/photo-1713955871231-93e0e90d18b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGxlYXZlc3xlbnwxfHx8fDE3NTY0NzU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      commonDiseases: ["Bercak Daun", "Busuk Buah", "Layu Bakteri", "Virus Mosaik"],
      category: "Sayuran Buah"
    },
    {
      id: 2,
      name: "Kentang",
      description: "Kentang (Solanum tuberosum) adalah tanaman umbi-umbian yang menjadi sumber karbohidrat penting di seluruh dunia.",
      image: "https://images.unsplash.com/photo-1593708697557-f2feca483132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBwbGFudCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NjQ3NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      commonDiseases: ["Penyakit Hawar", "Bercak Coklat", "Busuk Kering", "Virus Y Kentang"],
      category: "Umbi-umbian"
    },
    {
      id: 3,
      name: "Cabai",
      description: "Cabai (Capsicum annuum) adalah tanaman penghasil rempah yang sangat populer dalam masakan Indonesia.",
      image: "https://images.unsplash.com/photo-1710663497561-b98b13c09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMHBsYW50fGVufDF8fHx8MTc1NjQ3NTQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      commonDiseases: ["Antraknosa", "Bercak Daun", "Layu Fusarium", "Keriting Daun"],
      category: "Sayuran Buah"
    },
    {
      id: 4,
      name: "Jagung",
      description: "Jagung (Zea mays) adalah tanaman sereal yang menjadi makanan pokok di banyak negara dan sumber pakan ternak.",
      image: "https://images.unsplash.com/photo-1690971886188-308ff969237d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwbWFpemUlMjBwbGFudHxlbnwxfHx8fDE3NTY0NzU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      commonDiseases: ["Bercak Daun Utara", "Busuk Batang", "Karat Daun", "Downy Mildew"],
      category: "Sereal"
    }
  ];

  return (
    <section id="plants" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jenis Tanaman
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelajari berbagai jenis tanaman yang didukung platform kami dan penyakit umum yang menyerang
          </p>
        </div>

        {/* Plant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plants.map((plant) => (
            <Card key={plant.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#2E7D32] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {plant.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">
                  {plant.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  {plant.description}
                </CardDescription>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                    Penyakit Umum
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {plant.commonDiseases.slice(0, 2).map((disease) => (
                      <span
                        key={disease}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {disease}
                      </span>
                    ))}
                    {plant.commonDiseases.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{plant.commonDiseases.length - 2} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plant Detail Modal/Card (Selected Plant Info)
        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-xl rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white rounded-t-2xl">
            <CardTitle className="text-2xl flex items-center">
              <Leaf className="mr-3 h-7 w-7" />
              Detail Tanaman: Tomat
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1713955871231-93e0e90d18b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGxlYXZlc3xlbnwxfHx8fDE3NTY0NzU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tomat Detail"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Informasi Umum</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tomat adalah tanaman dari keluarga Solanaceae yang berasal dari Amerika Selatan. 
                    Tanaman ini membutuhkan sinar matahari penuh dan tanah yang well-drained dengan pH 6.0-6.8.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kondisi Pertumbuhan Optimal</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-3"></span>
                      Suhu: 18-25°C
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-3"></span>
                      Kelembaban: 60-70%
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-3"></span>
                      pH Tanah: 6.0-6.8
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-3"></span>
                      Penyiraman: 2-3x seminggu
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Daftar Penyakit Umum & Solusi</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Bercak Daun (Leaf Spot)",
                    symptoms: "Bercak coklat pada daun, daun menguning",
                    solution: "Semprotkan fungisida, buang daun terinfeksi"
                  },
                  {
                    name: "Busuk Buah (Fruit Rot)",
                    symptoms: "Buah membusuk dari bagian bawah, tekstur lunak",
                    solution: "Perbaiki drainase, kurangi kelembaban"
                  },
                  {
                    name: "Layu Bakteri",
                    symptoms: "Tanaman layu mendadak, batang menghitam",
                    solution: "Rotasi tanaman, gunakan bibit tahan penyakit"
                  },
                  {
                    name: "Virus Mosaik",
                    symptoms: "Pola mosaik pada daun, pertumbuhan terhambat",
                    solution: "Kontrol hama vektor, buang tanaman terinfeksi"
                  }
                ].map((disease, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">{disease.name}</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong>Gejala:</strong> {disease.symptoms}</p>
                    <p className="text-sm text-[#2E7D32]"><strong>Solusi:</strong> {disease.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-3">
                <ArrowRight className="mr-2 h-5 w-5" />
                Prediksi Penyakit Tomat
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}