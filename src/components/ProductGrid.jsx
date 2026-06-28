import ProductCard from './ProductCard';

export default function ProductGrid({ products, onViewDetails }) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
        No products match the current filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}