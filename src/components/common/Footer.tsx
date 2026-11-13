import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051329] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand & Email */}
          <div className="space-y-2.5">
            <Logo variant="light" size="sm" showTagline={true} />
            <p className="text-xs sm:text-sm text-slate-400">
              Digital Growth &amp; Technology Agency &bull;{' '}
              <a
                href="mailto:hello@upmarkgrowth.com"
                className="text-white hover:text-[#3898FF]"
              >
                hello@upmarkgrowth.com
              </a>
            </p>
          </div>

          {/* Minimal Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white">
              Home
            </Link>
            <Link to="/services" className="text-slate-300 hover:text-white">
              Services
            </Link>
            <Link to="/work" className="text-slate-300 hover:text-white">
              Work
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} UPMARK. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
