'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { SearchBarProps } from './type';



export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search products...',
  className = ''
}) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={`relative flex items-center w-full max-w-md ${className}`}>
      <span className="absolute left-3 text-txt-dim pointer-events-none">
        <Search className="w-5 h-5" />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-bg-card border border-border-main rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary shadow-sm transition-all"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 p-1 rounded-full text-txt-dim hover:text-txt-main hover:bg-bg-alt transition-colors cursor-pointer"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
