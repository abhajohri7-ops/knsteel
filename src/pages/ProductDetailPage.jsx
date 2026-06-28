import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { productsBySlug } from '../data/products';
// import { proCategoryBySlug } from '../data/products';
import { company } from '../data/site';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = productsBySlug[slug];

  if (!product) {
    return (
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary">Product not found</h1>
        <p className="mt-4 text-slate-600">The requested product page is not available.</p>
        <Link to="/products" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white">
          Back to products
        </Link>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.shortDescription,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: company.name
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `/products/${product.slug}`,
      // url:`/products/${proCategory.slug}`,
    }
  };

  return (
    <main id="main-content" className="bg-canvas">
      <Seo
        title={`${product.title} | ${company.name}`}
        description={product.shortDescription}
        canonical={`/products/${product.slug}`}
        jsonLd={jsonLd}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="section-kicker text-sm font-semibold text-accent">Product detail</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-primary">{product.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-soft">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Price</div>
                <div className="text-2xl font-bold text-primary">{product.price.display}</div>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">{product.stockStatus}</div>
            </div>
          </div>

          <table className="mt-8 w-full rounded-3xl border border-slate-200 bg-white text-left shadow-soft">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key} className="border-b border-slate-200 last:border-b-0">
                  <th className="w-40 px-6 py-4 font-semibold text-slate-600">{key}</th>
                  <td className="px-6 py-4 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primarySoft">
              Request quote
            </Link>
            <Link to="/products" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50">
              Back to catalog
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <img src={product.images[product.x]} alt={product.title} className="h-80 w-full rounded-3xl object-cover shadow-lift sm:col-span-2" />
          {/* {product.images.slice().map((images) => (
            <img key={images} src={images} alt={`${product.title} gallery`} className="h-56 w-full rounded-3xl object-cover shadow-soft" />
          ))} */}
        </div>
      </section>
    </main>
  );
}