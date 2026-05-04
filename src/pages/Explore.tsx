import { useState } from 'react';
import { Search, Filter, MapPin, Star, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { CREATORS } from '../data';
import { motion } from 'motion/react';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9fafb] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Jelajahi Kreator</h1>
          <p className="text-gray-500">Temukan talenta terbaik dari seluruh nusantara.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#f0f0f0] mb-12 flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari Fotografer, Videografer..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full lg:w-auto">
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6366f1] flex-1 lg:flex-none appearance-none cursor-pointer">
              <option>Semua Lokasi</option>
              <option>Jakarta</option>
              <option>Bali</option>
              <option>Bandung</option>
              <option>Surabaya</option>
            </select>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#6366f1] flex-1 lg:flex-none appearance-none cursor-pointer">
              <option>Semua Kategori</option>
              <option>Photography</option>
              <option>Videography</option>
              <option>Editing</option>
            </select>
            <Button variant="secondary" className="gap-2 shrink-0">
              <Filter size={18} /> Filters
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CREATORS.map((creator, i) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col group border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-md text-black border-none shadow-sm capitalize">
                      {creator.role}
                    </Badge>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                    <Star size={18} />
                  </button>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{creator.name}</h3>
                    <div className="flex items-center text-amber-500 gap-1 text-sm font-semibold">
                      <Star size={14} fill="currentColor" /> 4.9
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-4">
                    <MapPin size={14} /> {creator.location}
                  </p>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                    {creator.bio}
                  </p>
                  <Link to={`/profile/${creator.id}`} className="mt-auto">
                    <Button variant="primary" className="w-full py-3 rounded-xl font-semibold">
                      Lihat Profil
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button variant="secondary" className="gap-2 px-10">
            <MoreHorizontal size={20} /> Lihat Lebih Banyak
          </Button>
        </div>
      </div>
    </div>
  );
}
