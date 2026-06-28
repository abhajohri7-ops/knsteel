import Seo from '../components/Seo';
import { company, galleryImages } from '../data/site';

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Seo
        title={`About | ${company.name}`}
        description="Sanitized company story, trading focus, processing capabilities, and gallery."
        canonical="/about"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="section-kicker text-sm font-semibold text-accent">About us</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-primary">A practical steel partner since {company.established}.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Established in Ghaziabad, Kashi Nath Steels serves buyers who need dependable sourcing, clear communication, and local processing support. The company focuses on trading, inventory readiness, and steel conversion work rather than promotional metrics.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Location', company.location],
                ['Business focus', 'Wholesale trading and processing'],
                ['Services', 'Cutting, slitting, supply coordination'],
                ['Inventory', 'Large in-house stock for fast dispatch']
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</div>
                  <div className="mt-2 text-lg font-bold text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <img key={image} src={image} alt={`Company gallery ${index + 1}`} className={`w-full rounded-3xl object-cover shadow-soft ${index === 0 ? 'h-72 sm:col-span-2' : 'h-52'}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ['Company story', 'A trading business built around consistent supply, careful sourcing, and timely delivery.'],
            ['Capacity', 'Able to handle bulk buying needs, staged dispatch, and processing requests.'],
            ['Working style', 'Keep it simple: verify material, confirm requirements, and deliver reliably.']
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}