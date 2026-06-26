import React from 'react';
import { LoaderProps } from './type';



export const Loader: React.FC<LoaderProps> = ({ variant = 'spinner', count = 1 }) => {
  if (variant === 'spinner') {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (variant === 'skeleton-card') {
    return (
      <div className="bg-bg-card rounded-2xl border border-border-main p-4 shadow-card animate-pulse space-y-4">
        <div className="aspect-square bg-bg-alt rounded-xl w-full"></div>
        <div className="h-4 bg-bg-alt rounded w-2/3"></div>
        <div className="h-4 bg-bg-alt rounded w-1/2"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-bg-alt rounded w-1/3"></div>
          <div className="h-8 bg-bg-alt rounded-lg w-1/3"></div>
        </div>
      </div>
    );
  }

  if (variant === 'skeleton-grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, idx) => (
          <Loader key={idx} variant="skeleton-card" />
        ))}
      </div>
    );
  }

  if (variant === 'skeleton-details') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 animate-pulse">
        <div className="space-y-4">
          <div className="aspect-square bg-bg-alt rounded-2xl w-full"></div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="aspect-square bg-bg-alt rounded-lg"></div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-4 bg-bg-alt rounded w-1/4"></div>
          <div className="h-8 bg-bg-alt rounded w-3/4"></div>
          <div className="h-5 bg-bg-alt rounded w-1/3"></div>
          <div className="h-6 bg-bg-alt rounded w-1/4"></div>
          <div className="h-20 bg-bg-alt rounded w-full"></div>
          <div className="h-10 bg-bg-alt rounded-lg w-1/2"></div>
          <div className="border-t border-border-main pt-6 space-y-3">
            <div className="h-4 bg-bg-alt rounded w-1/3"></div>
            <div className="h-4 bg-bg-alt rounded w-1/2"></div>
            <div className="h-4 bg-bg-alt rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
export default Loader;
