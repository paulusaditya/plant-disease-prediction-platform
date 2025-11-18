import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Progress } from "./ui/progress";
import { Upload, Image, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { solusi } from "../api/solusi";

export function PredictionSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<string>("");
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const plantTypes = ["Tomat", "Kentang", "Jagung"];

  // Mapping Indonesia -> Endpoint backend
  const plantMap: Record<string, string> = {
    Tomat: "tomat",
    Kentang: "kentang",
    Jagung: "jagung",
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrediction = async () => {
    if (!selectedImage || !selectedPlant) {
      alert("Harap pilih gambar dan jenis tanaman terlebih dahulu!");
      return;
    }

    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      const fileInput = document.getElementById(
        "image-upload"
      ) as HTMLInputElement;

      if (fileInput?.files?.[0]) {
        formData.append("file", fileInput.files[0]); // backend expects "file"
      } else {
        alert("File gambar tidak ditemukan.");
        setIsAnalyzing(false);
        return;
      }

      const backendPlant = plantMap[selectedPlant];
      if (!backendPlant) {
        alert("Jenis tanaman belum didukung backend.");
        setIsAnalyzing(false);
        return;
      }

      const API_BASE_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_BASE_URL}/predict/${backendPlant}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal melakukan request ke backend");

      const data = await res.json();

      // Format hasil untuk UI
      // Ambil solusi berdasarkan hasil AI
      const solusiPenyakit = solusi[data.class] || {
        saranPerawatan: ["Solusi belum tersedia"],
        tipsPencegahan: ["Pencegahan belum tersedia"],
      };

      setPredictionResult({
        disease: data.class,
        confidence: (data.confidence * 100).toFixed(2),
        description: `Tanaman ${selectedPlant} terdeteksi ${data.class}`,
        severity:
          data.confidence > 0.8
            ? "Parah"
            : data.confidence > 0.5
            ? "Sedang"
            : "Ringan",
        severityColor:
          data.confidence > 0.8
            ? "bg-red-500"
            : data.confidence > 0.5
            ? "bg-yellow-500"
            : "bg-green-500",

        // ← DYNAMIC
        treatment: solusiPenyakit.saranPerawatan,
        prevention: solusiPenyakit.tipsPencegahan,
      });
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Terjadi kesalahan saat melakukan prediksi.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="prediction" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prediksi Penyakit Tanaman
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unggah foto tanaman Anda dan biarkan AI memberikan diagnosis akurat
            dalam hitungan detik
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              {/* Image Upload Area */}
              <Card className="border-2 border-dashed border-[#2E7D32] bg-green-50/50 hover:bg-green-50 transition-colors">
                <CardContent className="p-8 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />

                  {selectedImage ? (
                    <div className="space-y-4">
                      <img
                        src={selectedImage}
                        alt="Selected plant"
                        className="w-full max-w-sm mx-auto h-64 object-cover rounded-xl shadow-lg"
                      />
                      <div className="flex justify-center">
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer bg-[#2E7D32] text-white px-6 py-2 rounded-lg hover:bg-[#1B5E20] transition-colors"
                        >
                          Ganti Gambar
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-16 w-16 mx-auto mb-4 text-[#2E7D32]" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Upload Foto Tanaman
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Seret dan lepas gambar di sini atau klik untuk memilih
                        file
                      </p>
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer inline-flex items-center bg-white border border-[#2E7D32] text-[#2E7D32] px-6 py-2 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <Image className="mr-2 h-4 w-4" />
                        Pilih Gambar
                      </label>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Plant Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pilih Jenis Tanaman</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={selectedPlant}
                    onValueChange={setSelectedPlant}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih jenis tanaman..." />
                    </SelectTrigger>
                    <SelectContent>
                      {plantTypes.map((plant) => (
                        <SelectItem key={plant} value={plant}>
                          {plant}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Predict Button */}
              <Button
                onClick={handlePrediction}
                disabled={!selectedImage || !selectedPlant || isAnalyzing}
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-4 text-lg disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Menganalisis...
                  </div>
                ) : (
                  "Prediksi Sekarang"
                )}
              </Button>
            </div>

            {/* Results Section */}
            <div>
              {isAnalyzing && (
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="animate-pulse bg-[#2E7D32] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <AlertTriangle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        Sedang Menganalisis...
                      </h3>
                      <p className="text-gray-600 mb-4">
                        AI sedang memeriksa kondisi tanaman Anda
                      </p>
                      <Progress value={75} className="w-full" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {predictionResult && !isAnalyzing && (
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white rounded-t-lg">
                    <CardTitle className="flex items-center text-xl">
                      {predictionResult.disease === "Sehat" ? (
                        <CheckCircle className="mr-3 h-6 w-6" />
                      ) : (
                        <AlertTriangle className="mr-3 h-6 w-6" />
                      )}
                      Hasil Prediksi AI
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    {/* Disease Info */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {predictionResult.disease}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            Tingkat Keyakinan
                          </div>
                          <div className="text-xl font-bold text-[#2E7D32]">
                            {predictionResult.confidence}%
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {predictionResult.description}
                      </p>

                      {/* Severity Indicator */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">
                            Tingkat Keparahan
                          </span>

                          <span className="text-sm font-medium text-gray-900">
                            {predictionResult.disease === "Healthy" ||
                            predictionResult.disease === "Sehat"
                              ? "Sehat"
                              : predictionResult.severity}
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              predictionResult.disease === "Healthy" ||
                              predictionResult.disease === "Sehat"
                                ? "bg-green-500"
                                : predictionResult.severityColor
                            }`}
                            style={{
                              width:
                                predictionResult.disease === "Healthy" ||
                                predictionResult.disease === "Sehat"
                                  ? "100%"
                                  : predictionResult.severity === "Ringan"
                                  ? "33%"
                                  : predictionResult.severity === "Sedang"
                                  ? "66%"
                                  : "100%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>


                    {/* Treatment Recommendations */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="mr-2 h-5 w-5 text-[#2E7D32]" />
                        Saran Perawatan
                      </h4>
                      <ul className="space-y-2">
                        {predictionResult.treatment.map(
                          (item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-[#2E7D32] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Prevention Tips */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-[#2E7D32]" />
                        Tips Pencegahan
                      </h4>
                      <ul className="space-y-2">
                        {predictionResult.prevention.map(
                          (item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!predictionResult && !isAnalyzing && (
                <Card className="border-2 border-dashed border-gray-300">
                  <CardContent className="p-12 text-center text-gray-500">
                    <AlertTriangle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">
                      Hasil Prediksi Akan Muncul Di Sini
                    </h3>
                    <p>
                      Upload gambar dan pilih jenis tanaman untuk memulai
                      analisis
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
