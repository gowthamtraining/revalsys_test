'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Star, Share2, ShoppingCart, Check, AlertTriangle } from 'lucide-react';
import { useProductDetails } from './details';
import { Formatter } from '../../../utils/formatter';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { QuantitySelector } from '../../../components/QuantitySelector';
import { ProductCard } from '../../../components/ProductCard';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { ROUTES } from '../../../constants/routes';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  const {
    product,
    isWishlisted,
    quantity,
    setQuantity,
    selectedImage,
    setSelectedImage,
    galleryImages,
    handleToggleWishlist,
    handleAddToCart,
    handleCopyLink,
    isCopied,
    relatedProducts,
    toastMessage,
    breadcrumbItems,
    isOutOfStock
  } = useProductDetails(id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="inline-flex p-4 bg-brand-danger/10 text-brand-danger rounded-full mb-4">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold text-txt-main">Product Not Found</h1>
        <p className="text-txt-muted max-w-sm mx-auto">The electronic item you are looking for does not exist or has been removed from our database.</p>
        <Link href={ROUTES.PRODUCTS} className="inline-block mt-4">
          <Button variant="primary">Return to Catalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-2xl border border-border-main bg-bg-card overflow-hidden relative shadow-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt={product.name}
              className="object-contain w-full h-full p-6 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`aspect-square rounded-xl border overflow-hidden bg-bg-card p-2 transition-all cursor-pointer ${
                  selectedImage === img
                    ? 'border-brand-primary ring-2 ring-brand-primary/20'
                    : 'border-border-main hover:border-txt-muted'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={`${product.name} perspective ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              {product.category}
            </span>
            {product.featured && <Badge variant="accent">Featured Product</Badge>}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-extrabold text-txt-main tracking-tight leading-tight">
              {product.name}
            </h1>
            <button
              type="button"
              onClick={handleCopyLink}
              className={`p-2.5 rounded-xl border border-border-main bg-bg-card hover:bg-bg-alt text-txt-muted hover:text-txt-main transition-all cursor-pointer shadow-sm ${
                isCopied ? 'text-brand-success border-brand-success/30 bg-brand-success/5' : ''
              }`}
              aria-label="Share product link"
            >
              {isCopied ? <Check className="w-5 h-5 text-brand-success" /> : <Share2 className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${
                    idx < Math.round(product.rating) ? 'fill-current' : 'text-border-main'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-txt-main">
              {Formatter.formatRating(product.rating)}
            </span>
            <span className="text-sm text-txt-dim">| Verified customer ratings</span>
          </div>

          <div className="flex items-baseline gap-4 py-2 border-y border-border-main">
            <span className="text-3xl font-bold text-txt-main">
              {Formatter.formatCurrency(product.price)}
            </span>
            {isOutOfStock ? (
              <Badge variant="danger">Out of Stock</Badge>
            ) : product.stock <= 5 ? (
              <Badge variant="info">Only {product.stock} items left!</Badge>
            ) : (
              <Badge variant="success">In Stock ({product.stock} available)</Badge>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
              Description
            </h2>
            <p className="text-sm text-txt-muted leading-relaxed">
              {product.description}
            </p>
          </div>

          {!isOutOfStock && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-txt-dim">Quantity</span>
                <QuantitySelector
                  quantity={quantity}
                  max={product.stock}
                  onChange={setQuantity}
                />
              </div>
              <div className="flex-grow">
                <Button
                  type="button"
                  onClick={handleAddToCart}
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 h-10 rounded-lg shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Shopping Cart
                </Button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleToggleWishlist}
                  className={`p-3 h-10 border rounded-lg flex items-center justify-center shadow-sm transition-all cursor-pointer ${
                    isWishlisted
                      ? 'bg-brand-danger/10 border-brand-danger text-brand-danger'
                      : 'bg-bg-card border-border-main text-txt-muted hover:text-brand-danger hover:bg-bg-alt'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4 pt-6 border-t border-border-main">
            <h2 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
              Specifications
            </h2>
            <div className="border border-border-main rounded-2xl overflow-hidden bg-bg-card shadow-sm">
              <table className="min-w-full divide-y divide-border-main text-sm">
                <tbody className="divide-y divide-border-main">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <tr key={key} className="hover:bg-bg-alt transition-colors">
                      <td className="px-6 py-3 font-semibold text-txt-muted w-1/3 border-r border-border-main">
                        {key}
                      </td>
                      <td className="px-6 py-3 text-txt-main">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-10 border-t border-border-main">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-txt-main tracking-tight">
              Related Electronics
            </h2>
            <p className="text-txt-muted text-sm">
              Discover other high-performance products from the {product.category} category.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-card border border-brand-primary/30 text-txt-main px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in ring-4 ring-brand-primary/10">
          <span className="p-1 bg-brand-primary text-white rounded-lg">
            <ShoppingCart className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
