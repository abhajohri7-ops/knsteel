import { useEffect, useState } from 'react';
import { company } from '../data/site';

const storageKey = 'knsteel-accessibility';

const defaultPrefs = {
  textScale: 'base',
  contrast: false,
  dyslexic: false,
  reduceMotion: false,
  dismissed: false
};

function readPrefs() {
  if (typeof window === 'undefined') {
    return defaultPrefs;
  }

  try {
    return { ...defaultPrefs, ...JSON.parse(window.localStorage.getItem(storageKey) || '{}') };
  } catch {
    return defaultPrefs;
  }
}

function applyPrefs(prefs) {
  const root = document.documentElement;
  root.dataset.textScale = prefs.textScale;
  root.dataset.contrast = prefs.contrast ? 'high' : 'normal';
  root.dataset.dyslexic = prefs.dyslexic ? 'true' : 'false';
  root.dataset.reduceMotion = prefs.reduceMotion ? 'true' : 'false';
}

export default function AccessibilityToolbar() {
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = readPrefs();
    setPrefs(stored);
    applyPrefs(stored);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleShowToolbar = () => {
      setPrefs((current) => ({ ...current, dismissed: false }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('knsteel:show-accessibility-toolbar', handleShowToolbar);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('knsteel:show-accessibility-toolbar', handleShowToolbar);
    };
  }, []);

  useEffect(() => {
    applyPrefs(prefs);
    window.localStorage.setItem(storageKey, JSON.stringify(prefs));
  }, [prefs]);

  const update = (patch) => setPrefs((current) => ({ ...current, ...patch }));

  const hidden = scrolled || prefs.dismissed;

  return (
    <div
      className={`toolbar-shell glass-panel border-b border-slate-200/70 ${hidden ? 'toolbar-hidden' : ''}`}
      role="region"
      aria-label="Accessibility toolbar"
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2  border-slate-200 bg-white/80 px-3 py-1.5 text-slate-700 shadow-sm">
              Accessibility tools
            </span>
            <button
              type="button"
              onClick={() => update({ dismissed: true })}
              className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50"
              aria-label="Dismiss accessibility toolbar"
            >
              Hide toolbar
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2" aria-label="Accessibility preferences">
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1">
              <button
                type="button"
                onClick={() => update({ textScale: 'small' })}
                aria-pressed={prefs.textScale === 'small'}
                className={`rounded-full px-3 py-1.5 font-semibold ${prefs.textScale === 'small' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => update({ textScale: 'base' })}
                aria-pressed={prefs.textScale === 'base'}
                className={`rounded-full px-3 py-1.5 font-semibold ${prefs.textScale === 'base' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => update({ textScale: 'large' })}
                aria-pressed={prefs.textScale === 'large'}
                className={`rounded-full px-3 py-1.5 font-semibold ${prefs.textScale === 'large' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                A+
              </button>
            </div>

            <button
              type="button"
              onClick={() => update({ contrast: !prefs.contrast })}
              aria-pressed={prefs.contrast}
              className={`rounded-full border px-3 py-1.5 font-medium ${prefs.contrast ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white/90 text-slate-700 hover:bg-slate-50'}`}
            >
              High contrast
            </button>

            <button
              type="button"
              onClick={() => update({ dyslexic: !prefs.dyslexic })}
              aria-pressed={prefs.dyslexic}
              className={`rounded-full border px-3 py-1.5 font-medium ${prefs.dyslexic ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white/90 text-slate-700 hover:bg-slate-50'}`}
            >
              Dyslexic font
            </button>

            <button
              type="button"
              onClick={() => update({ reduceMotion: !prefs.reduceMotion })}
              aria-pressed={prefs.reduceMotion}
              className={`rounded-full border px-3 py-1.5 font-medium ${prefs.reduceMotion ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white/90 text-slate-700 hover:bg-slate-50'}`}
            >
              Reduce motion
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <a className="hover:text-primary" href={`tel:${company.phone.replace(/\s+/g, '')}`}>
              {company.phone}
            </a>
            <a className="hover:text-primary" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
