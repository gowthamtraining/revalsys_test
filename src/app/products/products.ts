import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectFilteredProducts } from '../../redux/selectors/productSelectors';
import { useFilter } from '../../hooks/useFilter';
import { useSearch } from '../../hooks/useSearch';
import { usePagination } from '../../hooks/usePagination';
import { PAGE_SIZE } from '../../constants/filters';
import { useSearchParams } from 'next/navigation';

export const useProductListing = () => {
  const searchParams = useSearchParams();
  const { filters, changeCategory, clearAllFilters } = useFilter();
  const { searchTerm, setSearchTerm } = useSearch(300);
  const filteredProducts = useAppSelector(selectFilteredProducts);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const catQuery = searchParams.get('category');
    if (catQuery) {
      changeCategory(catQuery);
    }
  }, [searchParams, changeCategory]);

  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    hasPrev,
    hasNext
  } = usePagination({
    items: filteredProducts,
    pageSize: PAGE_SIZE
  });

  return {
    filters,
    searchTerm,
    setSearchTerm,
    filteredProductsCount: filteredProducts.length,
    paginatedProducts: paginatedItems,
    currentPage,
    totalPages,
    goToPage,
    hasPrev,
    hasNext,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    clearAllFilters
  };
};
export default useProductListing;
