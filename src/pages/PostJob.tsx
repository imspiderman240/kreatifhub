import React, { useState } from 'react';
import { Camera, FileText, Calendar, DollarSign, MapPin, Send, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function PostJob() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Job Posted!</h1>
          <p className="text-gray-500 mb-10">Lowongan kerja Anda telah berhasil dipublikasikan. Kami akan memberitahu kreator yang relevan segera.</p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => setSubmitted(false)} className="w-full">Post Another Job</Button>
            <Button variant="outline" className="w-full">View My Postings</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9fafb] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Post a Job</h1>
          <p className="text-gray-500">Berikan detail project Anda untuk mendapatkan penawaran dari kreator terbaik.</p>
        </div>

        <Card className="p-8 md:p-12 shadow-xl border-none" hoverable={false}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Judul Pekerjaan</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-3.5 text-gray-400" size={20} />
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Fotografer Pernikahan di Jakarta"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Kategori</label>
                  <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                    <option>Photography</option>
                    <option>Videography</option>
                    <option>Video Editing</option>
                    <option>Photo Editing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Lokasi</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Jakarta / Remote"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Tanggal Project</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      required
                      type="text"
                      placeholder="Contoh: 25 Mei 2024"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Estimasi Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Rp 5.000.000"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">Deskripsi Pekerjaan</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Jelaskan detail kebutuhan, gaya visual, dan hasil akhir yang Anda harapkan..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="p-4 bg-blue-50 text-blue-700 rounded-xl flex gap-3 text-sm">
                <AlertCircle size={20} className="shrink-0" />
                <p>Postingan Anda akan ditinjau dalam waktu maksimal 1 jam sebelum ditayangkan kepada publik.</p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full py-4 text-lg font-bold shadow-lg shadow-[#6366f1]/20">
              Publikasikan Lowongan
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
