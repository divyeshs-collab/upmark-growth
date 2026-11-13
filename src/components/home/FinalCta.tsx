import React from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../common/BrandMotifs';
import { IconArrowUpRight, IconArrowRight } from '../common/Icons';

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-[#051329] text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <SectionEyebrow label="Start a Conversation" variant="dark" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-white leading-[1.15]">
              Ready to Build or Improve Your Digital Presence?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Tell us about your website, e-commerce store, custom web application, or search visibility goals and we will prepare a clear written scope.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5">
            <Link to="/contact" className="btn-accent py-3.5 px-7 text-sm justify-center">
              <span>Discuss Your Project</span>
              <IconArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-700 hover:border-white text-white text-sm font-semibold"
            >
              <span>Explore Our Services</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
