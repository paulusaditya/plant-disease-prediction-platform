import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda kapan saja
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nama Depan</Label>
                  <Input
                    id="firstName"
                    placeholder="Masukkan nama depan"
                    className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nama Belakang</Label>
                  <Input
                    id="lastName"
                    placeholder="Masukkan nama belakang"
                    className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input
                  id="subject"
                  placeholder="Masukkan subjek pesan"
                  className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className="border-gray-200 focus:border-[#2E7D32] focus:ring-[#2E7D32] resize-none"
                />
              </div>

              <Button 
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Kami berkomitmen memberikan pelayanan terbaik dan siap membantu 
                Anda mengoptimalkan kesehatan tanaman dengan teknologi AI.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2E7D32] p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">support@plantai.com</p>
                  <p className="text-gray-600">info@plantai.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#2E7D32] p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#2E7D32] p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Pertanian AI No. 123<br />
                    Jakarta Selatan, 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-white/70 backdrop-blur border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Jam Operasional</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}