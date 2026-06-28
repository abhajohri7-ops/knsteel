import { filterGroups } from '../data/site';

export default function FilterBar({ categories, activeCategory, onCategoryChange, filters, onFilterChange, onClear }) {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Categories</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${active ? 'bg-primary text-white' : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                aria-pressed={active}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filterGroups.map((group) => (
          <fieldset key={group.key} className="rounded-2xl border border-slate-200 p-4">
            <legend className="px-1 text-sm font-semibold text-primary">{group.label}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.options.map((option) => {
                const active = filters[group.key].includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onFilterChange(group.key, option)}
                    aria-pressed={active}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium ${active ? 'bg-accent text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600">
        <p>Multi-select filters update the catalog live.</p>
        <button type="button" className="font-semibold text-primary hover:text-primarySoft" onClick={onClear}>
          Clear filters
        </button>
      </div>
    </div>
  );
}