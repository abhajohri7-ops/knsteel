export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>
      {pages.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onPageChange(value)}
          aria-current={value === page ? 'page' : undefined}
          className={`rounded-full px-4 py-2 font-medium ${value === page ? 'bg-primary text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
        >
          {value}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
}