import { company, navItems } from '../data/site';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center bg-white">
            <img src = '/images/KN-Logo.png' alt = "abab" loading="lazy" className="h-11 w-11  object-cover" /> 
              </div>
              <div className="text-xl font-bold text-white">{company.name}</div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">{company.description}</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white">Quick links</h2>
            <div className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className="w-fit text-slate-400 transition hover:text-white">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white">Contact</h2>
            <div className="space-y-2 text-sm text-slate-400">
              <p>{company.address}</p>
              <p>
                <a className="transition hover:text-white" href={`tel:${company.phone.replace(/\s+/g, '')}`}>
                  {company.phone}
                </a>
              </p>
              <p>
                <a className="transition hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
              <p>
                Designed and Developed by{' '}
                <a href="https://chitranceinfotech.com" target="_blank" rel="noreferrer" className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-accent">
                  Chitrance Infotech
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}