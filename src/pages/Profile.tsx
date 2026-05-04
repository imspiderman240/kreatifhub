import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Instagram, Youtube, Twitter, MessageCircle, Share2, Star, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { CREATORS } from '../data';
import { motion } from 'motion/react';

export default function Profile() {
  const { id } = useParams();
  const creator = CREATORS.find(c => c.id === id) || CREATORS[0];

  const packages = [
    {
      name: 'Basic Session',
      price: 'Rp 2.500.000',
      features: ['2 jam pemotretan', '20 foto diedit', 'Semua raw files', '1 photoshoot location'],
      popular: false
    },
    {
      name: 'Professional Package',
      price: 'Rp 5.000.000',
      features: ['4 jam pemotretan', '50 foto diedit', 'Video highlight (1 mnt)', 'Album fisik (20 hal)', '2 photoshoot locations'],
      popular: true
    },
    {
      name: 'Elite / Full Day',
      price: 'Rp 8.500.000',
      features: ['8 jam pemotretan', 'Satu tim (2 orang)', '100+ foto diedit', 'Cinematic video (3-5 mnt)', 'Unlimited locations'],
      popular: false
    }
  ];

  return (
    <div className="pt-20 bg-[#fafafa] min-h-screen">
      {/* Profile Header */}
      <section className="bg-white border-b border-[#f0f0f0] pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 pt-16">
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{creator.name}</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <Badge className="bg-[#6366f1]/10 text-[#6366f1] border-none text-sm px-3 py-1">{creator.role}</Badge>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <MapPin size={16} /> {creator.location}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                      <Star size={16} fill="currentColor" /> 4.9 (124 reviews)
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" className="rounded-xl px-4 p-2 shrink-0">
                    <Share2 size={20} />
                  </Button>
                  <Button className="rounded-xl px-8 bg-[#25D366] hover:bg-[#128C7E] border-none flex gap-2">
                    <MessageCircle size={20} /> Hubungi via WhatsApp
                  </Button>
                </div>
              </div>
              <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                {creator.bio}
              </p>
              
              <div className="flex justify-center md:justify-start gap-6 mt-8">
                <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors"><Youtube size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Portfolio Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Portofolio</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-gray-200 cursor-pointer group relative"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?auto=format&fit=crop&q=80&w=400&h=400`}
                    alt={`Portfolio ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">View Project</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing / Packages */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Pilihan Paket</h2>
            <div className="space-y-6">
              {packages.map((pkg, i) => (
                <Card
                  key={i}
                  hoverable={false}
                  className={cn(
                    'p-6 relative',
                    pkg.popular ? 'border-[#6366f1] ring-1 ring-[#6366f1]' : 'border-[#f0f0f0]'
                  )}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 right-6">
                      <Badge className="bg-[#6366f1] text-white border-none shadow-md">Paling Populer</Badge>
                    </div>
                  )}
                  <h4 className="font-bold text-lg mb-2">{pkg.name}</h4>
                  <div className="text-2xl font-bold text-[#1a1a1a] mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                        <Check size={16} className="text-[#6366f1] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full rounded-xl">
                    Pilih Paket
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
