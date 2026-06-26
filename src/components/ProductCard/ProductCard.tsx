'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { ProductCardProps } from './ProductCard.types';
import { Formatter } from '../../utils/formatter';
import { ROUTES } from '../../constants/routes';
import { useProductCard } from './useProductCard';
import { Badge } from '../Badge';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    isWishlisted,
    isOutOfStock,
    handleWishlistToggle,
    handleAddToCart
  } = useProductCard(product);

  return (
    <div className="group relative bg-bg-card rounded-2xl border border-border-main overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full animate-fade-in">
      <Link href={ROUTES.PRODUCT_DETAILS(product.id)} className="block relative aspect-square overflow-hidden bg-bg-alt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.featured && <Badge variant="accent">Featured</Badge>}
          {isOutOfStock ? (
            <Badge variant="danger">Out of Stock</Badge>
          ) : product.stock <= 5 ? (
            <Badge variant="info">Low Stock</Badge>
          ) : null}
        </div>
        
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full border shadow-sm transition-all duration-300 z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-brand-danger border-brand-danger text-white scale-110'
              : 'bg-bg-card border-border-main text-txt-muted hover:text-brand-danger hover:bg-bg-alt'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className="w-4 h-4 fill-current" />
        </button>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-1.5">
          {product.category}
        </span>
        <Link href={ROUTES.PRODUCT_DETAILS(product.id)} className="block group-hover:text-brand-primary transition-colors mb-2">
          <h4 className="font-semibold text-txt-main text-base line-clamp-1">
            {product.name}
          </h4>
        </Link>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`w-3.5 h-3.5 ${
                  idx < Math.round(product.rating) ? 'fill-current' : 'text-border-main'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-txt-muted">
            {Formatter.formatRating(product.rating)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-main">
          <span className="text-lg font-bold text-txt-main">
            {Formatter.formatCurrency(product.price)}
          </span>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
              isOutOfStock
                ? 'bg-bg-alt text-txt-dim cursor-not-allowed border border-border-main'
                : 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md hover:scale-105 active:scale-95'
            }`}
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
