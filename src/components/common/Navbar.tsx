import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { IconMenu, IconClose, IconArrowRight } from './Icons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official UPMARK Logo */}
          <Logo variant="dark" size="md" showTagline={true} />

          {/* Minimalist Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 border-b-2 ${
                    isActive
                      ? 'text-[#051329] border-[#0D5BEF] font-semibold'
                      : 'text-slate-600 border-transparent hover:text-[#051329]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span>Discuss Your Project</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <Link to="/contact" className="btn-primary py-2 px-4 text-xs sm:text-sm">
              <span>Discuss Project</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#051329] hover:bg-slate-100 rounded-lg border border-slate-200 focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6">
          <nav aria-label="Mobile navigation" className="divide-y divide-slate-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 text-base font-medium ${
                    isActive
                      ? 'text-[#0D5BEF] font-semibold'
                      : 'text-[#051329] hover:text-[#0D5BEF]'
                  }`
                }
              >
                <span>{link.name}</span>
                <IconArrowRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full btn-primary py-3 text-sm justify-center"
            >
              <span>Discuss Your Project</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="w-full btn-secondary py-3 text-sm justify-center"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
