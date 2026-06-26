export const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Customer Rating', value: 'rating' },
  { label: 'Name: A to Z', value: 'name-asc' },
  { label: 'Name: Z to A', value: 'name-desc' }
];

export const FILTER_DEFAULTS = {
  category: 'all',
  search: '',
  sort: 'featured',
  minPrice: 0,
  maxPrice: 3000
};

export const PAGE_SIZE = 8;
