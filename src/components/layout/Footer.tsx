import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            KREATIF<span className="text-[#6366f1]">HUB</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Platform marketplace kreatif nomor satu di Indonesia untuk menghubungkan kreator profesional dengan klien.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/explore" className="hover:text-white transition-colors">Cari Kreator</Link></li>
            <li><Link to="/jobs" className="hover:text-white transition-colors">Job Requests</Link></li>
            <li><Link to="/explore?category=photography" className="hover:text-white transition-colors">Fotografer</Link></li>
            <li><Link to="/explore?category=videography" className="hover:text-white transition-colors">Videografer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">For Creators</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/login?role=creator" className="hover:text-white transition-colors">Gabung Kreator</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Tips & Resource</Link></li>
            <li><Link to="/community" className="hover:text-white transition-colors">Komunitas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2024 KreatifHub Indonesia. All rights reserved.</p>
        <p>Built for the creative minds of Indonesia.</p>
      </div>
    </footer>
  );
}
