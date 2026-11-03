import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Globe, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Global Agency Presence Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500"></span>
            </span>
            <span className="font-medium text-slate-200">
              Global Digital &amp; Creative Agency
            </span>
            <span className="hidden md:inline text-slate-400">
              • Headquartered in India, partnering with clients across the US, UK, Canada, Australia, UAE &amp; worldwide
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-electric-400" />
              International Project Collaboration
            </span>
            <Link
              to="/contact"
              className="text-lightblue-300 hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              Start a Project <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-200/90 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-electric-600 bg-electric-500/10 font-semibold'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Primary CTA: "Start a Project" */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/services"
                className="text-xs font-semibold text-slate-600 hover:text-navy-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Disciplines
              </Link>
              <Link
                to="/contact"
                className="btn-primary py-2.5 px-5 text-sm font-semibold shadow-md shadow-electric-500/20"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/contact"
                className="btn-primary py-2 px-3.5 text-xs font-semibold"
              >
                <span>Start a Project</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-electric-500"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-electric-50 text-electric-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 space-y-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary py-3 text-sm justify-center font-semibold"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
