import { useState, useEffect } from 'react';
import { useFilter } from './useFilter';
import { useDebounce } from './useDebounce';

export const useSearch = (debounceDelay: number = 300) => {
  const { filters, changeSearch } = useFilter();
  const [searchTerm, setSearchTerm] = useState<string>(filters.search);
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  useEffect(() => {
    changeSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, changeSearch]);

  useEffect(() => {
    setSearchTerm(filters.search);
  }, [filters.search]);

  return {
    searchTerm,
    setSearchTerm
  };
};
