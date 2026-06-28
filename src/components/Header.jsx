import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, company } from '../data/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            KN
          </div> */}
          <div>
            <img src = '/images/KN-Logo.png' alt = "abab" loading="lazy" className="h-11 w-11  object-cover" /> </div>
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight text-primary sm:text-2xl">{company.name}</div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Steel trading and processing</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 font-semibold text-white shadow-soft transition hover:bg-primarySoft"
          >
            Request quote
          </NavLink>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('knsteel:show-accessibility-toolbar'))}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
            aria-label="Show accessibility toolbar"
          >
            Accessibility
          </button>
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      <div id="mobile-nav" className={`${mobileOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white md:hidden`}>
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-medium ${isActive ? 'bg-slate-100 text-primary' : 'text-slate-700 hover:bg-slate-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('knsteel:show-accessibility-toolbar'))}
              className="rounded-xl px-4 py-3 text-left font-medium text-slate-700 hover:bg-slate-50"
              aria-label="Show accessibility toolbar"
            >
              Accessibility
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}