import React, { useState } from 'react';

interface ProjectInteractiveDemoProps {
  demoType: 'home-services' | 'ecommerce' | 'dashboard' | 'brand-commerce' | 'connected-platform';
  compact?: boolean;
}

export const ProjectInteractiveDemo: React.FC<ProjectInteractiveDemoProps> = ({
  demoType,
  compact = false,
}) => {
  const [homeTab, setHomeTab] = useState<'homepage' | 'services' | 'locations' | 'estimate'>('homepage');
  const [facadeColor, setFacadeColor] = useState<{ name: string; hex: string; trim: string }>({
    name: 'Georgian Navy',
    hex: '#051329',
    trim: '#F4F1EA',
  });
  const [estimateProperty, setEstimateProperty] = useState('Single-Family Residence');
  const [estimateScope, setEstimateScope] = useState('Interior: Full Repaint');
  const [estimateSubmitted, setEstimateSubmitted] = useState(false);

  const [ecomTab, setEcomTab] = useState<'listings' | 'detail' | 'cart' | 'checkout'>('listings');
  const [selectedFinish, setSelectedFinish] = useState<{ name: string; color: string }>({
    name: 'Brushed Architectural Bronze',
    color: '#8C6D46',
  });
  const [cartQty, setCartQty] = useState(2);

  const [dashTab, setDashTab] = useState<'inventory' | 'sales' | 'purchases' | 'analytics' | 'admin'>('inventory');
  const [stockFilter, setStockFilter] = useState<'all' | 'low'>('all');

  if (demoType === 'home-services') {
    const swatches = [
      { name: 'Georgian Navy', hex: '#051329', trim: '#F4F1EA' },
      { name: 'Oxford Slate', hex: '#334155', trim: '#F8FAFC' },
      { name: 'Warm Limestone', hex: '#D8D2C5', trim: '#051329' },
      { name: 'Heritage Sage', hex: '#4A5D4E', trim: '#F4F1EA' },
    ];

    return (
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm text-left overflow-hidden">
        {/* Top Bar */}
        <div className="bg-[#051329] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#0D5BEF] text-white">
              01
            </span>
            <span className="font-heading text-sm font-semibold text-white">
              Kensington Residential Finishes (Demo)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'homepage', label: 'Homepage' },
                { id: 'services', label: 'Services' },
                { id: 'locations', label: 'Locations' },
                { id: 'estimate', label: 'Estimate' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setHomeTab(t.id)}
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  homeTab === t.id
                    ? 'bg-[#0D5BEF] text-white font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Site Header */}
        <div className="px-5 py-3 border-b border-slate-200 bg-[#F8FAFC] flex items-center justify-between text-xs">
          <div className="font-heading font-bold text-[#051329] tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: facadeColor.hex }} />
            <span>KENSINGTON &amp; CO.</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-slate-600">
            <button type="button" onClick={() => setHomeTab('homepage')} className="hover:text-[#051329] font-medium">Overview</button>
            <button type="button" onClick={() => setHomeTab('services')} className="hover:text-[#051329] font-medium">Services</button>
            <button type="button" onClick={() => setHomeTab('locations')} className="hover:text-[#051329] font-medium">Areas</button>
            <button
              type="button"
              onClick={() => setHomeTab('estimate')}
              className="px-3 py-1 rounded bg-[#051329] text-white font-medium text-[11px]"
            >
              Request Estimate
            </button>
          </div>
        </div>

        {/* Tab Views */}
        <div className={compact ? 'p-5' : 'p-6 sm:p-8'}>
          {homeTab === 'homepage' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#0D5BEF] font-semibold">
                  01 &bull; Service Website Architecture
                </div>
                <h4 className="font-heading text-xl font-bold text-[#051329] leading-tight">
                  Architectural Interior &amp; Exterior Finishes.
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Demonstrates clear service positioning, regional SEO location pages, and an interactive estimate request flow.
                </p>

                <div className="pt-1 space-y-2">
                  <div className="font-mono text-xs text-slate-500">
                    Finish Preview: <strong className="text-[#051329]">{facadeColor.name}</strong>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {swatches.map((sw) => (
                      <button
                        key={sw.name}
                        type="button"
                        onClick={() => setFacadeColor(sw)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs ${
                          facadeColor.name === sw.name
                            ? 'border-[#051329] bg-[#051329] text-white font-medium'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-white/40 shrink-0"
                          style={{ backgroundColor: sw.hex }}
                        />
                        <span>{sw.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
                  <span>ELEVATION PREVIEW</span>
                  <span>{facadeColor.hex}</span>
                </div>
                <svg viewBox="0 0 260 150" className="w-full h-36 rounded border border-slate-200 bg-white">
                  <rect width="260" height="130" fill="#F8FAFC" />
                  <rect y="130" width="260" height="20" fill="#E2E8F0" />
                  <polygon points="35,48 130,14 225,48" fill="#0F172A" />
                  <rect
                    x="48"
                    y="48"
                    width="164"
                    height="82"
                    fill={facadeColor.hex}
                  />
                  <rect x="44" y="46" width="172" height="5" fill={facadeColor.trim} />
                  <rect x="66" y="64" width="26" height="32" fill="#0F172A" stroke={facadeColor.trim} strokeWidth="3" />
                  <rect x="168" y="64" width="26" height="32" fill="#0F172A" stroke={facadeColor.trim} strokeWidth="3" />
                  <rect x="112" y="76" width="36" height="54" fill={facadeColor.trim} />
                  <rect x="118" y="82" width="24" height="48" fill="#0F172A" />
                  <circle cx="138" cy="106" r="1.8" fill="#3898FF" />
                </svg>
                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Exterior Coating System</span>
                  <button
                    type="button"
                    onClick={() => setHomeTab('estimate')}
                    className="font-semibold text-[#0D5BEF] hover:underline"
                  >
                    Quote Finish &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

          {homeTab === 'services' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  code: '01',
                  name: 'Interior Plaster & Trim',
                  scope: 'Level-5 skim coating, dustless sanding, crown moulding enamel, and zero-VOC finishes.',
                },
                {
                  code: '02',
                  name: 'Exterior Siding & Masonry',
                  scope: 'Surface preparation, wood restoration, and weather-resistant masonry coatings.',
                },
                {
                  code: '03',
                  name: 'Cabinetry Refinishing',
                  scope: 'Fine-finish spray application, degreasing, and durable catalyzed lacquer.',
                },
                {
                  code: '04',
                  name: 'Architectural Restoration',
                  scope: 'Period woodwork stripping, limewash application, and protective exterior sealing.',
                },
              ].map((srv) => (
                <div key={srv.code} className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#0D5BEF]">{srv.code}</span>
                  <div className="font-heading text-sm font-bold text-[#051329]">{srv.name}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{srv.scope}</p>
                </div>
              ))}
            </div>
          )}

          {homeTab === 'locations' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {[
                { area: 'North District', zip: 'Heritage Plaster & Trim' },
                { area: 'Westside Estates', zip: 'Full Exterior & Stucco' },
                { area: 'Harbourview Homes', zip: 'Coastal Coatings' },
                { area: 'Central Corridor', zip: 'Interior & Cabinetry' },
              ].map((loc, idx) => (
                <div key={idx} className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-1">
                  <div className="font-semibold text-[#051329]">{loc.area}</div>
                  <div className="text-xs text-slate-500">{loc.zip}</div>
                  <div className="font-mono text-xs text-[#0D5BEF] font-semibold pt-1">
                    0{idx + 1} &bull; Active Area
                  </div>
                </div>
              ))}
            </div>
          )}

          {homeTab === 'estimate' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#051329] mb-1">Property Type</label>
                    <select
                      value={estimateProperty}
                      onChange={(e) => {
                        setEstimateProperty(e.target.value);
                        setEstimateSubmitted(false);
                      }}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white text-[#051329]"
                    >
                      <option>Single-Family Residence</option>
                      <option>Townhouse / Brownstone</option>
                      <option>Commercial Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-[#051329] mb-1">Primary Scope</label>
                    <select
                      value={estimateScope}
                      onChange={(e) => {
                        setEstimateScope(e.target.value);
                        setEstimateSubmitted(false);
                      }}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white text-[#051329]"
                    >
                      <option>Interior: Full Repaint</option>
                      <option>Exterior Siding &amp; Trim</option>
                      <option>Kitchen Cabinetry Refinishing</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEstimateSubmitted(true)}
                  className="px-4 py-2 rounded-md bg-[#051329] text-white text-xs font-semibold hover:bg-[#0D5BEF]"
                >
                  Test Estimate Submission
                </button>
              </div>
              <div className="md:col-span-5 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 text-xs space-y-2">
                <div className="font-mono text-xs uppercase text-slate-500">Scope Summary</div>
                <div><strong>Property:</strong> {estimateProperty}</div>
                <div><strong>Scope:</strong> {estimateScope}</div>
                <div><strong>Finish:</strong> {facadeColor.name}</div>
                {estimateSubmitted && (
                  <div className="p-2 rounded bg-[#0D5BEF]/10 text-[#0D5BEF] text-xs font-medium">
                    Estimate request logged with structured scope parameters.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (demoType === 'ecommerce' || demoType === 'brand-commerce') {
    const unitPrice = 340;
    const subtotal = unitPrice * cartQty;
    const finishes = [
      { name: 'Brushed Bronze', color: '#8C6D46' },
      { name: 'Machined Aluminium', color: '#94A3B8' },
      { name: 'Midnight Anodised', color: '#051329' },
    ];

    return (
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm text-left overflow-hidden">
        <div className="bg-[#051329] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#0D5BEF] text-white">
              02
            </span>
            <span className="font-heading text-sm font-semibold text-white">
              Atelier Nord Storefront (Demo)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'listings', label: 'Catalogue' },
                { id: 'detail', label: 'Product' },
                { id: 'cart', label: `Cart (${cartQty})` },
                { id: 'checkout', label: 'Checkout' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setEcomTab(t.id)}
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  ecomTab === t.id
                    ? 'bg-[#0D5BEF] text-white font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className={compact ? 'p-5' : 'p-6 sm:p-8'}>
          {ecomTab === 'listings' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  sku: '01',
                  name: 'Linear Suspension 04',
                  material: 'Brushed Bronze / Alabaster',
                  price: '$340 USD',
                  tone: '#8C6D46',
                },
                {
                  sku: '02',
                  name: 'Monolith Table Sconce',
                  material: 'Machined Aluminium',
                  price: '$290 USD',
                  tone: '#64748B',
                },
                {
                  sku: '03',
                  name: 'Articulated Wall Arm',
                  material: 'Midnight Anodised',
                  price: '$410 USD',
                  tone: '#051329',
                },
                {
                  sku: '04',
                  name: 'Atelier Floor Column',
                  material: 'Brushed Steel / Opal Glass',
                  price: '$520 USD',
                  tone: '#334155',
                },
              ].map((prod) => (
                <div
                  key={prod.sku}
                  className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex justify-between font-mono text-xs text-slate-500 mb-2">
                      <span>ITEM {prod.sku}</span>
                      <span className="text-[#0D5BEF] font-semibold">In Stock</span>
                    </div>
                    <div className="h-20 rounded bg-[#051329] mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 160 80" className="w-full h-full">
                        <line x1="50" y1="0" x2="50" y2="38" stroke="#64748B" strokeWidth="1.2" />
                        <line x1="110" y1="0" x2="110" y2="38" stroke="#64748B" strokeWidth="1.2" />
                        <rect x="28" y="36" width="104" height="8" rx="2" fill={prod.tone} />
                        <rect x="34" y="44" width="92" height="3" fill="#3898FF" />
                      </svg>
                    </div>
                    <div className="font-heading text-sm font-bold text-[#051329]">{prod.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{prod.material}</div>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold text-[#051329]">{prod.price}</span>
                    <button
                      type="button"
                      onClick={() => setEcomTab('detail')}
                      className="text-[#0D5BEF] font-semibold hover:underline"
                    >
                      View Product &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {ecomTab === 'detail' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 rounded-lg bg-[#051329] p-5 text-white flex flex-col justify-between min-h-[190px]">
                <div className="flex justify-between font-mono text-xs text-slate-400">
                  <span>ITEM 01</span>
                  <span className="text-[#3898FF]">2700K LED</span>
                </div>
                <svg viewBox="0 0 200 90" className="w-full h-24 my-2">
                  <line x1="60" y1="0" x2="60" y2="45" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="140" y1="0" x2="140" y2="45" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="30" y="42" width="140" height="12" rx="2" fill={selectedFinish.color} />
                  <rect x="38" y="54" width="124" height="4" fill="#3898FF" />
                </svg>
                <div className="font-mono text-xs text-slate-400 border-t border-slate-800 pt-2 flex justify-between">
                  <span>{selectedFinish.name}</span>
                  <span>1200mm</span>
                </div>
              </div>
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-heading text-lg font-bold text-[#051329]">Linear Suspension Lamp 04</h4>
                  <span className="font-mono text-sm font-semibold text-[#051329]">$340 USD</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {finishes.map((fin) => (
                    <button
                      key={fin.name}
                      type="button"
                      onClick={() => setSelectedFinish(fin)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs border ${
                        selectedFinish.name === fin.name
                          ? 'border-[#051329] bg-[#051329] text-white'
                          : 'border-slate-300 bg-white text-[#051329]'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fin.color }} />
                      <span>{fin.name}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartQty((q) => q + 1);
                    setEcomTab('cart');
                  }}
                  className="px-4 py-2 rounded-md bg-[#051329] text-white text-xs font-semibold hover:bg-[#0D5BEF]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}

          {ecomTab === 'cart' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 rounded-lg border border-slate-200 p-4 space-y-3 bg-[#F8FAFC]">
                <div className="flex items-center justify-between text-xs py-2">
                  <div>
                    <div className="font-semibold text-[#051329]">Linear Suspension Lamp 04</div>
                    <div className="text-xs text-slate-500">Finish: {selectedFinish.name}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCartQty((q) => Math.max(1, q - 1))}
                      className="w-6 h-6 rounded border border-slate-300 bg-white text-center"
                    >
                      -
                    </button>
                    <span className="font-mono">{cartQty}</span>
                    <button
                      type="button"
                      onClick={() => setCartQty((q) => q + 1)}
                      className="w-6 h-6 rounded border border-slate-300 bg-white text-center"
                    >
                      +
                    </button>
                    <span className="font-mono font-semibold w-16 text-right">${subtotal}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 rounded-lg border border-slate-200 bg-white p-4 space-y-3 text-xs">
                <div className="flex justify-between font-bold text-[#051329]">
                  <span>Total</span>
                  <span className="font-mono">${subtotal}.00 USD</span>
                </div>
                <button
                  type="button"
                  onClick={() => setEcomTab('checkout')}
                  className="w-full py-2 rounded-md bg-[#051329] text-white font-semibold text-xs hover:bg-[#0D5BEF]"
                >
                  Proceed to Checkout &rarr;
                </button>
              </div>
            </div>
          )}

          {ecomTab === 'checkout' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-1">
                <div className="font-mono text-[#0D5BEF] font-semibold">01 Shipping &amp; Fulfilment</div>
                <div className="font-medium text-[#051329]">Real-Time Address &amp; Inventory Lock</div>
              </div>
              <div className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-1">
                <div className="font-mono text-[#0D5BEF] font-semibold">02 Payment Gateway</div>
                <div className="font-medium text-[#051329]">Stripe / Apple Pay Integration (${subtotal}.00 USD)</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Project 03: Business Management Dashboard
  const inventoryRows = [
    { sku: '01', item: 'Hydraulic Valve 24V', warehouse: 'Chicago Hub', stock: 142, capacity: 160, status: 'Optimal' },
    { sku: '02', item: 'Pressure Sensor Module', warehouse: 'Toronto Hub', stock: 14, capacity: 100, status: 'Low Stock' },
    { sku: '03', item: 'Stainless Manifold Assembly', warehouse: 'Manchester Hub', stock: 68, capacity: 90, status: 'Optimal' },
    { sku: '04', item: 'Digital Flow Controller', warehouse: 'Sydney Hub', stock: 9, capacity: 80, status: 'Low Stock' },
  ];

  const filteredInventory =
    stockFilter === 'low' ? inventoryRows.filter((r) => r.status === 'Low Stock') : inventoryRows;

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm text-left overflow-hidden">
      <div className="bg-[#051329] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#0D5BEF] text-white">
            03
          </span>
          <span className="font-heading text-sm font-semibold text-white">
            Meridian Operations Portal (Demo)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {(
            [
              { id: 'inventory', label: 'Inventory' },
              { id: 'sales', label: 'Sales' },
              { id: 'purchases', label: 'Purchases' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'admin', label: 'Admin' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setDashTab(t.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium ${
                dashTab === t.id
                  ? 'bg-[#0D5BEF] text-white font-semibold'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className={compact ? 'p-5' : 'p-6 sm:p-8'}>
        {dashTab === 'inventory' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <h4 className="font-heading text-sm font-bold text-[#051329]">
                Multi-Warehouse Inventory Ledger
              </h4>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setStockFilter('all')}
                  className={`px-3 py-1 rounded border font-mono text-xs ${
                    stockFilter === 'all'
                      ? 'border-[#051329] bg-[#051329] text-white'
                      : 'border-slate-300 text-slate-600'
                  }`}
                >
                  All (04)
                </button>
                <button
                  type="button"
                  onClick={() => setStockFilter('low')}
                  className={`px-3 py-1 rounded border font-mono text-xs ${
                    stockFilter === 'low'
                      ? 'border-[#051329] bg-[#051329] text-white'
                      : 'border-slate-300 text-slate-600'
                  }`}
                >
                  Low Stock (02)
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 font-mono text-xs uppercase text-slate-500 bg-[#F8FAFC]">
                    <th className="py-2.5 px-3">No.</th>
                    <th className="py-2.5 px-3">Component</th>
                    <th className="py-2.5 px-3">Hub</th>
                    <th className="py-2.5 px-3">Stock</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredInventory.map((row) => (
                    <tr key={row.sku} className="hover:bg-[#F8FAFC]">
                      <td className="py-2.5 px-3 font-mono font-semibold text-[#0D5BEF]">{row.sku}</td>
                      <td className="py-2.5 px-3 text-[#051329] font-medium">{row.item}</td>
                      <td className="py-2.5 px-3 text-slate-500">{row.warehouse}</td>
                      <td className="py-2.5 px-3 font-mono text-[#051329]">{row.stock} units</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded ${
                            row.status === 'Low Stock'
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-blue-50 text-[#0D5BEF] font-semibold'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {dashTab === 'sales' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {[
              { id: '01', account: 'Northstar Mechanical Ltd', stage: 'Dispatched', total: '$14,200' },
              { id: '02', account: 'Albion Civil Engineering', stage: 'Packing', total: '$8,650' },
              { id: '03', account: 'Pacific Rim Logistics', stage: 'Approved', total: '$22,400' },
              { id: '04', account: 'Vanguard Marine Systems', stage: 'Invoiced', total: '$11,900' },
            ].map((so) => (
              <div key={so.id} className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-1">
                <div className="flex justify-between font-mono text-xs text-[#0D5BEF] font-semibold">
                  <span>ORDER {so.id}</span>
                  <span>{so.stage}</span>
                </div>
                <div className="font-semibold text-[#051329]">{so.account}</div>
                <div className="font-mono text-[#051329] pt-1">{so.total}</div>
              </div>
            ))}
          </div>
        )}

        {dashTab === 'purchases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              { po: '01', vendor: 'Stuttgart Fluidics GmbH', eta: 'ETA: 4 Days', items: '60x Pressure Sensor Modules' },
              { po: '02', vendor: 'Midwest Alloy Castings', eta: 'Verified', items: '120x Stainless Manifold Assemblies' },
            ].map((p) => (
              <div key={p.po} className="rounded-lg border border-slate-200 p-4 bg-[#F8FAFC] space-y-1">
                <div className="flex justify-between font-mono text-xs text-[#0D5BEF] font-semibold">
                  <span>PO {p.po}</span>
                  <span>{p.eta}</span>
                </div>
                <div className="font-semibold text-[#051329]">{p.vendor}</div>
                <div className="text-slate-600">{p.items}</div>
              </div>
            ))}
          </div>
        )}

        {dashTab === 'analytics' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { label: 'Active SKUs', val: '1,420' },
              { label: 'Regional Hubs', val: '04' },
              { label: 'Open POs', val: '12' },
              { label: 'Pending Dispatch', val: '18' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200 p-3.5 bg-[#F8FAFC]">
                <div className="text-xs text-slate-500">{stat.label}</div>
                <div className="font-mono text-base font-bold text-[#051329] mt-1">{stat.val}</div>
              </div>
            ))}
          </div>
        )}

        {dashTab === 'admin' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              { role: '01. Operations Director', access: 'Full Inventory & PO Approval' },
              { role: '02. Warehouse Coordinator', access: 'Stock Receiving & Dispatch' },
              { role: '03. Sales Desk', access: 'Order Creation & Customer CRM' },
              { role: '04. Finance & Audit', access: 'Ledger Reconciliation & Reports' },
            ].map((r) => (
              <div key={r.role} className="rounded-lg border border-slate-200 p-3.5 bg-[#F8FAFC]">
                <div className="font-semibold text-[#051329]">{r.role}</div>
                <div className="text-xs text-slate-600 mt-1">{r.access}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
