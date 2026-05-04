import { ArrowRight, ChevronDown, CheckCircle2, Search, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { CREATORS, CATEGORIES } from '../data';
import heroBg from '../assets/images/kreatifhub_hero_bg_1777878505200.png';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Temukan Kreator Terbaik <br />
              <span className="text-[#6366f1]">untuk Foto & Video Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Fotografer, videografer, dan editor profesional dalam satu platform. Ambil langkah kreatif pertama Anda hari ini.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/explore">
                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                  <Search size={18} /> Cari Kreator
                </Button>
              </Link>
              <Link to="/login?role=creator">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md">
                  <UserPlus size={18} /> Gabung Sebagai Kreator
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 hidden md:block"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Kreator Unggulan</h2>
              <p className="text-gray-500">Talenta terbaik pilihan kami yang siap membantu project Anda.</p>
            </div>
            <Link to="/explore">
              <Button variant="outline" className="group">
                Lihat Semua <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CREATORS.map((creator, i) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/profile/${creator.id}`}>
                  <Card className="p-0 border-none shadow-none group">
                    <div className="aspect-square rounded-2xl overflow-hidden mb-4 overflow-hidden relative">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] border-none shadow-sm">
                          {creator.role}
                        </Badge>
                      </div>
                    </div>
                    <div className="px-1">
                      <h3 className="font-bold text-lg">{creator.name}</h3>
                      <p className="text-gray-500 text-sm mb-1">{creator.skill}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1">
                        <Search size={12} className="rotate-90" /> {creator.location}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cara Kerja KreatifHub</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Tiga langkah mudah untuk mewujudkan project kreatif impian Anda.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Cari Kreator', desc: 'Gunakan fitur filter untuk menemukan talenta yang sesuai dengan budget dan kebutuhan Anda.' },
            { title: 'Lihat Portofolio', desc: 'Tinjau hasil karya mereka dan pastikan estetika mereka cocok dengan visi Anda.' },
            { title: 'Hubungi & Booking', desc: 'Hubungi langsung melalui WhatsApp atau sistem kami untuk diskusi lebih lanjut.' },
          ].map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-[#6366f1]/10 text-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                <span className="text-2xl font-bold italic">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 md:text-center">Kategori Populer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-[#f0f0f0] p-8 rounded-3xl text-center cursor-pointer hover:border-[#6366f1] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#6366f1]">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-sm md:text-base">{cat.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] bg-[#1a1a1a] overflow-hidden p-12 md:p-20 text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Mulai bekerja dengan kreator profesional hari ini</h2>
              <p className="text-gray-400 mb-10 text-lg">Ribuan kreator siap merealisasikan visi visual Anda.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/explore">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-[#1a1a1a] hover:bg-gray-100">
                    Mulai Sekarang
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
