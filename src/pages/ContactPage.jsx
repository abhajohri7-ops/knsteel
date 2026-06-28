import { useState } from 'react';
import Seo from '../components/Seo';
import { company } from '../data/site';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content" className="bg-canvas">
      <Seo title={`Contact | ${company.name}`} description="Contact form, address, phone, email, and embedded map." canonical="/contact" />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="rounded-3xl bg-primary p-8 text-white shadow-lift">
            <p className="section-kicker text-sm font-semibold text-slate-300">Contact</p>
            <h1 className="mt-4 text-4xl font-extrabold">Get in touch with the steel team.</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Share your requirements and the team will respond with sourcing, processing, or quote support.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Office</div>
                <p className="mt-2 leading-7 text-slate-200">{company.address}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Phone</div>
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="mt-2 block text-lg font-semibold text-white">
                  {company.phone}
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Email</div>
                <a href={`mailto:${company.email}`} className="mt-2 block text-lg font-semibold text-white">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/10">
              <iframe
                title="Kashi Nath Steels location map"
                src="https://maps.google.com/maps?q=Kashi%20Nath%20Steels%20Ghaziabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                className="block"
              />
            </div>
          </aside>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-3xl font-bold text-primary">Request a quote</h2>
            <p className="mt-3 text-slate-600">This form starts blank and does not prefill product data.</p>

            {submitted ? (
              <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                Your inquiry has been queued. A representative will follow up shortly.
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">First name</span>
                    <input type="text" required className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Last name</span>
                    <input type="text" required className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Email</span>
                    <input type="email" required className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Company</span>
                    <input type="text" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-sm font-semibold text-slate-700">Message</span>
                  <textarea required rows="6" placeholder="Tell us what you need, quantities, and timing." className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                </label>

                <button type="submit" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primarySoft">
                  Send inquiry
                </button>
              </form>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}