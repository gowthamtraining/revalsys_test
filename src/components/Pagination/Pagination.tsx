import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  hasPrev,
  hasNext
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-1.5 py-6">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        className="p-2 border border-border-main rounded-lg bg-bg-card hover:bg-bg-alt text-txt-muted hover:text-txt-main disabled:opacity-40 disabled:hover:bg-bg-card transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const pageNum = idx + 1;
        const isActive = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all cursor-pointer ${isActive
                ? 'bg-brand-primary border-brand-primary text-white shadow-sm'
                : 'border-border-main bg-bg-card hover:bg-bg-alt text-txt-muted hover:text-txt-main'
              }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        className="p-2 border border-border-main rounded-lg bg-bg-card hover:bg-bg-alt text-txt-muted hover:text-txt-main disabled:opacity-40 disabled:hover:bg-bg-card transition-colors cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
export default Pagination;
