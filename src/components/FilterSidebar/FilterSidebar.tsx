'use client';

import React from 'react';
import categoriesData from '../../data/categories.json';
import { SORT_OPTIONS } from '../../constants/filters';
import { X, SlidersHorizontal } from 'lucide-react';
import { useFilterSidebar } from './useFilterSidebar';
import { FilterSidebarProps } from './types';


export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen = false,
  onClose,
  className = ''
}) => {
  const {
    filters,
    changeCategory,
    changeSort,
    clearAllFilters,
    handleMinPriceChange,
    handleMaxPriceChange
  } = useFilterSidebar();

  return (
    <aside
      className={`w-full bg-bg-card border border-border-main rounded-2xl p-6 shadow-sm space-y-6 ${isOpen ? 'block' : 'hidden lg:block'
        } ${className}`}
    >
      <div className="flex items-center justify-between pb-4 border-b border-border-main">
        <h3 className="font-bold text-txt-main text-lg flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-brand-primary" />
          Filters
        </h3>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-full hover:bg-bg-alt text-txt-muted hover:text-txt-main transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
          Categories
        </h4>
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => changeCategory('all')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${filters.category === 'all'
              ? 'bg-brand-primary/10 text-brand-primary font-semibold'
              : 'text-txt-muted hover:text-txt-main hover:bg-bg-alt'
              }`}
          >
            All Categories
          </button>
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => changeCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${filters.category === cat.slug
                ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                : 'text-txt-muted hover:text-txt-main hover:bg-bg-alt'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
          Price Range
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="min-price" className="text-xs font-semibold text-txt-dim block mb-1">
              Min ($)
            </label>
            <input
              id="min-price"
              type="number"
              min="0"
              value={filters.minPrice}
              onChange={handleMinPriceChange}
              className="w-full px-3 py-2 border border-border-main bg-bg-alt rounded-xl text-sm text-txt-main focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="text-xs font-semibold text-txt-dim block mb-1">
              Max ($)
            </label>
            <input
              id="max-price"
              type="number"
              min="0"
              value={filters.maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full px-3 py-2 border border-border-main bg-bg-alt rounded-xl text-sm text-txt-main focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
          Sort By
        </h4>
        <select
          value={filters.sort}
          onChange={(e) => changeSort(e.target.value)}
          className="w-full px-3 py-2 bg-bg-alt border border-border-main rounded-xl text-sm text-txt-main focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={clearAllFilters}
        className="w-full py-2.5 px-4 bg-bg-alt border border-border-main text-txt-main font-semibold rounded-xl text-sm hover:bg-bg-alt/50 active:scale-[0.98] transition-all cursor-pointer"
      >
        Reset Filters
      </button>
    </aside>
  );
};
export default FilterSidebar;
