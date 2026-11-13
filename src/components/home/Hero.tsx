import React from 'react';
import { Link } from 'react-router-dom';
import { HeroVisual } from './HeroVisual';
import { SectionEyebrow } from '../common/BrandMotifs';
import { IconArrowRight } from '../common/Icons';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Clean Editorial Headline & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-6 lg:pt-2">
            <SectionEyebrow label="Digital Growth & Technology Agency" variant="light" />

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#051329] tracking-[-0.03em] leading-[1.1]">
              Build a Stronger <br />
              Digital Presence.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              UPMARK helps businesses build powerful digital experiences, improve search visibility and streamline operations through thoughtful design and technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#project-funnel" className="btn-primary py-3.5 px-7 text-sm">
                <span>Discuss Your Project</span>
                <IconArrowRight className="w-4 h-4" />
              </a>

              <Link to="/services" className="btn-secondary py-3.5 px-7 text-sm">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Minimalist Practice Overview (Span 5) */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
