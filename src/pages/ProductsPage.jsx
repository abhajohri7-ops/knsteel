import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import ProductGrid from '../components/ProductGrid';
import Seo from '../components/Seo';
import { products } from '../data/products';
import { company } from '../data/site';

const pageSize = 6;

function matchesSearch(product, query) {
  const haystack = [
    product.title,
    product.category,
    product.shortDescription,
    product.longDescription,
    product.stockStatus,
    ...product.tags,
    ...Object.values(product.specs)
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function rankRelevance(product, query) {
  if (!query) {
    return 0;
  }

  const lower = query.toLowerCase();
  const title = product.title.toLowerCase();
  const category = product.category.toLowerCase();

  if (title === lower) return 100;
  if (title.includes(lower)) return 80;
  if (category.includes(lower)) return 60;
  if (product.tags.some((tag) => tag.toLowerCase().includes(lower))) return 40;
  return 10;
}

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [filters, setFilters] = useState({ material: [], form: [], finish: [] });
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [category, filters, query, sort]);

  const categories = ['All', ...new Set(products.map((product) => product.category))];

  let filtered = products.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category;
    const searchMatch = !query || matchesSearch(product, query);
    const materialMatch = filters.material.length === 0 || filters.material.some((value) => product.tags.includes(value));
    const formMatch = filters.form.length === 0 || filters.form.some((value) => product.tags.includes(value));
    const finishMatch = filters.finish.length === 0 || filters.finish.some((value) => product.tags.includes(value));

    return categoryMatch && searchMatch && materialMatch && formMatch && finishMatch;
  });

  if (sort === 'relevance') {
    filtered = [...filtered].sort((left, right) => rankRelevance(right, query) - rankRelevance(left, query));
  } else if (sort === 'price-asc') {
    filtered = [...filtered].sort((left, right) => left.price.value - right.price.value);
  } else if (sort === 'price-desc') {
    filtered = [...filtered].sort((left, right) => right.price.value - left.price.value);
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleProducts = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleFilter = (group, option) => {
    setFilters((current) => {
      const values = current[group].includes(option)
        ? current[group].filter((entry) => entry !== option)
        : [...current[group], option];

      return { ...current, [group]: values };
    });
  };

  const clearFilters = () => {
    setCategory('All');
    setFilters({ material: [], form: [], finish: [] });
    setQuery('');
    setSort('relevance');
  };

  return (
    <main id="main-content" className="bg-canvas">
      <Seo
        title={`Products | ${company.name}`}
        description="Search, filter, and compare the local steel catalog from Kashi Nath Steels."
        canonical="/products"
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-kicker text-sm font-semibold text-slate-300">Products</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl">Browse the complete local steel catalog.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Search by title, tags, category, or specs. Filter by material, form, and finish, then open a modal or local detail page for each product.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <label className="sr-only" htmlFor="product-search">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, category, tags, or specs"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base shadow-soft"
            />
          </div>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft lg:w-72">
            <span className="whitespace-nowrap text-sm font-semibold text-slate-600">Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent text-sm font-medium text-primary">
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price low to high</option>
              <option value="price-desc">Price high to low</option>
            </select>
          </label>
        </div>

        <FilterBar categories={categories} activeCategory={category} onCategoryChange={setCategory} filters={filters} onFilterChange={toggleFilter} onClear={clearFilters} />

        <div className="mt-8 flex items-center justify-between gap-4 text-sm text-slate-600">
          <p>
            Showing <span className="font-semibold text-primary">{visibleProducts.length}</span> of{' '}
            <span className="font-semibold text-primary">{filtered.length}</span> products
          </p>
          <Link to="/contact" className="font-semibold text-primary hover:text-primarySoft">
            Need a quote? Contact sales
          </Link>
        </div>

        <div className="mt-6">
          <ProductGrid products={visibleProducts} onViewDetails={setSelectedProduct} />
        </div>

        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </section>

      <Modal open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} title={selectedProduct?.title || 'Product'}>
        {selectedProduct && (
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <img src={selectedProduct.images[selectedProduct.x]} alt={selectedProduct.title} className="h-72 w-full rounded-3xl object-cover" />
              {/* <div className="grid grid-cols-3 gap-3">
                {selectedProduct.images.map((image) => (
                  <img key={image} src={image} alt={`${selectedProduct.title} view`} className="h-24 w-full rounded-2xl object-cover" />
                ))}
              </div> */}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{selectedProduct.category}</p>
              <h3 className="mt-2 text-3xl font-bold text-primary">{selectedProduct.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{selectedProduct.longDescription}</p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Price</div>
                    <div className="text-2xl font-bold text-primary">{selectedProduct.price.display}</div>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">{selectedProduct.stockStatus}</div>
                </div>
              </div>

              <table className="mt-6 w-full text-left text-sm">
                <tbody>
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <tr key={key} className="border-b border-slate-200 last:border-b-0">
                      <th className="py-3 pr-4 font-semibold text-slate-600">{key}</th>
                      <td className="py-3 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primarySoft">
                  Request quote
                </Link>
                <Link to={`/products/${selectedProduct.slug}`} className="rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                  Open detail page
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}