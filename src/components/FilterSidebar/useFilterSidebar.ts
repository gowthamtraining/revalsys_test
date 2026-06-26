import React from 'react';
import { useFilter } from '../../hooks/useFilter';

export const useFilterSidebar = () => {
  const {
    filters,
    changeCategory,
    changeSort,
    changeMinPrice,
    changeMaxPrice,
    clearAllFilters
  } = useFilter();

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value) || 0;
    changeMinPrice(val);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value) || 0;
    changeMaxPrice(val);
  };

  return {
    filters,
    changeCategory,
    changeSort,
    clearAllFilters,
    handleMinPriceChange,
    handleMaxPriceChange
  };
};
export default useFilterSidebar;
