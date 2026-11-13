import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '../common/Icons';

export const HeroVisual: React.FC = () => {
  const pillars = [
    {
      num: '01',
      tag: 'Web & Commerce',
      title: 'Websites & Online Stores',
      desc: 'Custom business websites, corporate flagships, and conversion-focused e-commerce storefronts.',
      link: '/services/website-development',
    },
    {
      num: '02',
      tag: 'Business Software',
      title: 'Custom Web Apps & Dashboards',
      desc: 'Tailored CRM systems, inventory portals, booking tools, and internal analytics dashboards.',
      link: '/services/custom-web-applications',
    },
    {
      num: '03',
      tag: 'Organic & AI Search',
      title: 'SEO, AEO & GEO Visibility',
      desc: 'Technical search optimisation, structured schema markup, and generative AI entity authority.',
      link: '/services/seo',
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
          Core Practice Areas
        </span>
        <span className="font-mono text-xs text-[#0D5BEF] font-semibold">
          01 to 07 Disciplines
        </span>
      </div>

      <div className="space-y-3">
        {pillars.map((item) => (
          <Link
            key={item.num}
            to={item.link}
            className="group block rounded-lg border border-slate-200 bg-white p-4 sm:p-5 hover:border-[#0D5BEF]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#0D5BEF]">
                    {item.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    &bull; {item.tag}
                  </span>
                </div>
                <h2 className="font-heading text-base sm:text-lg font-bold text-[#051329] group-hover:text-[#0D5BEF]">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <IconArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D5BEF] shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
        <span>Serving US, UK, Canada &amp; Australia</span>
        <Link to="/work" className="font-semibold text-[#051329] hover:text-[#0D5BEF]">
          Explore Live Demos &rarr;
        </Link>
      </div>
    </div>
  );
};
