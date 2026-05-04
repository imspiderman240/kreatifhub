import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Creators', href: '/explore' },
    { name: 'Job Requests', href: '/jobs' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <span className={cn('transition-colors', scrolled || location.pathname !== '/' ? 'text-[#1a1a1a]' : 'text-white')}>KREATIF<span className="text-[#6366f1]">HUB</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:opacity-70',
                scrolled || location.pathname !== '/' ? 'text-[#1a1a1a]' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/post-job" className={cn(
                'text-sm font-medium transition-colors hover:opacity-70',
                scrolled || location.pathname !== '/' ? 'text-[#1a1a1a]' : 'text-white'
              )}>
            Post a Job
          </Link>
          <Link to="/login">
            <Button variant={scrolled || location.pathname !== '/' ? 'primary' : 'secondary'} size="sm" className="rounded-full">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            'md:hidden p-2 rounded-full',
            scrolled || location.pathname !== '/' ? 'text-[#1a1a1a]' : 'text-white'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-[#1a1a1a] hover:text-[#6366f1] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/post-job"
              className="text-lg font-medium text-[#1a1a1a] hover:text-[#6366f1] transition-colors"
            >
              Post a Job
            </Link>
            <hr />
            <Link to="/login">
              <Button className="w-full justify-between group">
                Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
