import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setCategory,
  setSearch,
  setSort,
  setMinPrice,
  setMaxPrice,
  setPriceRange,
  resetFilters
} from '../redux/slices/filterSlice';
import { selectFilters } from '../redux/selectors/productSelectors';

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const changeCategory = (category: string) => {
    dispatch(setCategory(category));
  };

  const changeSearch = (search: string) => {
    dispatch(setSearch(search));
  };

  const changeSort = (sort: string) => {
    dispatch(setSort(sort));
  };

  const changeMinPrice = (price: number) => {
    dispatch(setMinPrice(price));
  };

  const changeMaxPrice = (price: number) => {
    dispatch(setMaxPrice(price));
  };

  const changePriceRange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };

  const clearAllFilters = () => {
    dispatch(resetFilters());
  };

  return {
    filters,
    changeCategory,
    changeSearch,
    changeSort,
    changeMinPrice,
    changeMaxPrice,
    changePriceRange,
    clearAllFilters
  };
};
