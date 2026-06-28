import { Link } from 'react-router-dom';

export default function ProductCard({ product, onViewDetails }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={product.images[product.x]}
          alt={product.title}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{product.category}</p>
            <h3 className="mt-2 text-2xl font-bold text-primary">{product.title}</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{product.stockStatus}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Price</div>
            <div className="text-lg font-bold text-primary">{product.price.display}</div>
          </div>

          <div className="flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => onViewDetails(product)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View details
            </button>
            <Link
              to={`/products/${product.slug}`}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primarySoft"
            >
              Open page
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}