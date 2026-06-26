import { Product } from '../types/product.types';
import { FilterOptions } from '../types/api.types';

export const ProductService = {
  filterProducts: (products: Product[], filters: FilterOptions): Product[] => {
    return products.filter((product) => {
      // Category filter
      if (filters.category && filters.category !== 'all') {
        if (product.category.toLowerCase() !== filters.category.toLowerCase()) {
          return false;
        }
      }

      // Search filter
      if (filters.search) {
        const query = filters.search.toLowerCase().trim();
        const inName = product.name.toLowerCase().includes(query);
        const inDesc = product.description.toLowerCase().includes(query);
        const inCat = product.category.toLowerCase().includes(query);
        if (!inName && !inDesc && !inCat) {
          return false;
        }
      }

      // Min Price filter
      if (filters.minPrice > 0 && product.price < filters.minPrice) {
        return false;
      }

      // Max Price filter
      if (filters.maxPrice > 0 && product.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  },

  sortProducts: (products: Product[], sortOption: string): Product[] => {
    const sorted = [...products];
    switch (sortOption) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted; // default sorting or featured
    }
  },

  paginateProducts: (products: Product[], page: number, pageSize: number): Product[] => {
    const startIndex = (page - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  },

  getRelatedProducts: (products: Product[], currentProduct: Product, limit: number = 4): Product[] => {
    return products
      .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
      .slice(0, limit);
  }
};
