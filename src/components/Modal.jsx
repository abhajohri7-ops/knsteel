import { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previous = document.activeElement;
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previous?.focus?.();
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button type="button" className="absolute inset-0 modal-backdrop" aria-label="Close modal backdrop" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 id="modal-title" className="text-xl font-bold text-primary">
            {title}
          </h2>
          <button type="button" className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}