import { Link } from 'react-router-dom';
import { products } from '../data/products';
import {proCat } from '../data/products';
import { company, galleryImages } from '../data/site';
// function FeaturedCarousel() {
//   const items = products.slice(0, 6);

//   return (
//     <div className="flex gap-5 overflow-x-auto pb-2 carousel-scrollbar snap-x snap-mandatory">
//       {items.map((products) => (
//         <article key={products.id} className="min-w-[280px] snap-start rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
//           <img src={products.images[products.x]} alt={products.title} />
//           <div className="mt-4">
//             <h3 className="mt-2 text-xl font-bold text-primary">{products.title}</h3>
//             <p className="mt-2 text-sm leading-6 text-slate-600">{products.shortDescription}</p>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// }

function FeaturedCarousel() {
  const items = proCat.slice(0, 3);

  return (
    <div className="flex gap-5 overflow-x-auto pb-2 carousel-scrollbar snap-x snap-mandatory">
      {items.map((proCat) => (
        <article key={proCat.id} className="min-w-[280px] snap-start rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <a herf="site.js?filter=coated">
        <img src={proCat.images[proCat.y]} alt={proCat.title} />
          </a>
          <div className="mt-4">
            <h3 className="mt-2 text-xl font-bold text-primary">{proCat.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{proCat.shortDescription}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              Trusted since {company.established}
            </span>
            <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Premium steel supply for infrastructure, fabrication, and industrial projects.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Kashi Nath Steels supplies bars, pipes, plates, coils, and special grades with local product pages, quote requests, and a clean accessibility-first experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="rounded-full bg-white px-6 py-3.5 font-semibold text-primary transition hover:bg-slate-100">
                Explore products
              </Link>
              <Link to="/contact" className="rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-primary">
                Contact sales
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-50">
            <img src={galleryImages[0]} alt="Company location" className="h-1000 w-full rounded-3xl object-cover shadow-lift sm:col-span-2" loading="lazy" />
            {/* <img src={galleryImages[1]} alt="Company board" className="h-48 w-full rounded-3xl object-cover shadow-soft" loading="lazy" />
            <img src={galleryImages[2]} alt="Company board" className="h-48 w-full rounded-3xl object-cover shadow-soft" loading="lazy" /> */}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lift md:grid-cols-3 md:p-8">
          {[
            ['Established', '2006'],
            ['Product range', 'Bars, pipes, plates, coils'],
            ['Service focus', 'Trading, cutting, slitting']
          ].map(([label, value]) => (
            <div key={label} className="text-center md:border-l md:border-slate-200 md:first:border-l-0">
              <p className="text-4xl font-bold text-primary">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-kicker text-sm font-semibold text-accent">Highlights</p>
          <h2 className="mt-3 text-4xl font-bold text-primary">Built for a cleaner buying journey.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The redesign keeps the original industrial tone while making the site easier to scan, compare, and contact from any device.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Local product catalog', 'Search, filter, sort, and open product details without leaving the site.'],
            ['Accessible controls', 'Toolbar preferences persist across pages and adapt to user needs.'],
            ['Modern delivery', 'Reusable components, client-side routing, and a build workflow.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker text-sm font-semibold text-accent">Featured products</p>
              <h2 className="mt-3 text-3xl font-bold text-primary">Core products in a browsable carousel.</h2>
            </div>
            <Link to="/products" className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex">
              View catalog
            </Link>
          </div>
          <FeaturedCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker text-sm font-semibold text-accent">About</p>
            <h2 className="mt-3 text-4xl font-bold text-primary">Reliable trading, processing, and dispatch support.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Established in Ghaziabad, the company focuses on wholesale steel trading, source verification, and processing services such as cutting and slitting.
            </p>
            <Link to="/about" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primarySoft">
              Read company story
            </Link>
          </div>
          {/* <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.slice(3).map((src, index) => (
              <img key={src} src={src} alt={`Company gallery ${index + 1}`} loading="lazy" className="h-56 w-full rounded-3xl object-cover shadow-soft" />
            ))}
          </div> */}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ['Quality checks', 'Material verification before dispatch.'],
            ['Logistics support', 'Road shipment coordination and tracking.'],
            ['Inventory depth', 'Large in-house stock for quicker fulfillment.'],
            ['Processing services', 'Precision cutting and slitting on request.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}