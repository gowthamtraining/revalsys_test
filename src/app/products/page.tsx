'use client';

import React, { Suspense } from 'react';
import { SlidersHorizontal, Inbox } from 'lucide-react';
import { useProductListing } from './products';
import { SearchBar } from '../../components/SearchBar';
import { ProductGrid } from '../../components/ProductGrid';
import { Pagination } from '../../components/Pagination';
import { EmptyState } from '../../components/EmptyState';
import { Loader } from '../../components/Loader';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Button } from '../../components/Button';

function ProductCatalogContent() {
  const {
    searchTerm,
    setSearchTerm,
    filteredProductsCount,
    paginatedProducts,
    currentPage,
    totalPages,
    goToPage,
    hasPrev,
    hasNext,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    clearAllFilters
  } = useProductListing();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-txt-main tracking-tight">
            Electronics Catalog
          </h1>
          <p className="text-txt-muted text-sm mt-1">
            Showing {filteredProductsCount} premium products
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search gadgets, accessories..."
            className="flex-grow sm:flex-grow-0"
          />
          <Button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            variant="outline"
            className="lg:hidden flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-primary" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterSidebar
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
          />
        </div>

        <div className="lg:col-span-3 space-y-8">
          {paginatedProducts.length > 0 ? (
            <>
              <ProductGrid products={paginatedProducts} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
                hasPrev={hasPrev}
                hasNext={hasNext}
              />
            </>
          ) : (
            <EmptyState
              title="No Products Found"
              description="We couldn't find any products matching your active filters. Try adjusting your search query or reset filters."
              actionText="Reset Filters"
              onActionClick={clearAllFilters}
              icon={Inbox}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalogPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16"><Loader variant="spinner" /></div>}>
      <ProductCatalogContent />
    </Suspense>
  );
}
