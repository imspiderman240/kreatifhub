import { useState } from 'react';
import { Mail, Lock, ArrowRight, Camera, User } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { cn } from '../lib/utils';

export default function Login() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'creator' ? 'creator' : 'customer';
  const [role, setRole] = useState<'customer' | 'creator'>(initialRole);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-bold tracking-tighter mb-4 inline-block">
            KREATIF<span className="text-[#6366f1]">HUB</span>
          </Link>
          <h1 className="text-2xl font-bold">Selamat Datang Kembali</h1>
          <p className="text-gray-500 text-sm">Masuk untuk mengelola project dan koneksi Anda.</p>
        </div>

        <Card className="p-8 shadow-2xl border-none" hoverable={false}>
          {/* Role Selection */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
            <button
              onClick={() => setRole('customer')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all',
                role === 'customer' ? 'bg-white text-[#1a1a1a] shadow-sm' : 'text-gray-500 hover:text-[#1a1a1a]'
              )}
            >
              <User size={16} /> Customer
            </button>
            <button
              onClick={() => setRole('creator')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all',
                role === 'creator' ? 'bg-white text-[#1a1a1a] shadow-sm' : 'text-gray-500 hover:text-[#1a1a1a]'
              )}
            >
              <Camera size={16} /> Kreator
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs text-[#6366f1] font-semibold hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <Button className="w-full py-4 rounded-xl font-bold group">
              Sign In <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Belum punya akun?{' '}
              <a href="#" className="text-[#6366f1] font-bold hover:underline">Daftar Sekarang</a>
            </p>
          </div>
        </Card>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
            Dengan masuk, Anda menyetujui Ketentuan Layanan and Kebijakan Privasi kami.
          </p>
        </div>
      </div>
    </div>
  );
}
