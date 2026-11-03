import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ArrowUpRight, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" size="lg" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              UPMARK is a global digital and creative agency based in India, partnering with ambitious businesses worldwide to develop powerful websites, improve visibility across AI-powered search (AEO) and create distinctive brand identities.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-electric-400 shrink-0" />
                <span>Headquarters: India &bull; Serving Global Markets</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Project Engagements &bull; Real Deliverables</span>
              </div>
            </div>
          </div>

          {/* Three Core Services Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-electric-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Navigation Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-slate-400 hover:text-white transition-colors">
                  Our Work &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About UPMARK
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase mb-4">
              Enquiry &amp; Support
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Project Enquiries</span>
                  <span className="text-slate-300">hello@upmarkgrowth.com</span>
                  <span className="block text-[11px] text-slate-500 italic mt-0.5">[Agency Contact Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Direct Desk</span>
                  <span className="text-slate-300">+91 (0) 00000 00000</span>
                  <span className="block text-[11px] text-slate-500 italic mt-0.5">[Phone Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Operational Hub</span>
                  <span className="text-slate-300">India (Global Operations)</span>
                  <span className="block text-[11px] text-slate-500">Collaborating across global time zones</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} UPMARK — Global Digital &amp; Creative Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>International Client Engagements &bull; Custom Scopes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
