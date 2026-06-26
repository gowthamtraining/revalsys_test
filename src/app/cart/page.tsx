'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Trash2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCartPage } from './cart.ts';
import { Formatter } from '../../utils/formatter';
import { ROUTES } from '../../constants/routes';
import { QuantitySelector } from '../../components/QuantitySelector';
import { EmptyState } from '../../components/EmptyState';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

export default function CartPage() {
  const {
    items,
    subtotal,
    shipping,
    tax,
    total,
    adjustQuantity,
    removeFromCart,
    handleCheckout,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    confirmCheckout
  } = useCartPage();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          title="Your Shopping Cart is Empty"
          description="It looks like you haven't added any premium electronics to your cart yet. Explore our catalog and pick the best gadgets!"
          actionText="Explore Catalog"
          onActionClick={() => {
            if (typeof window !== 'undefined') window.location.href = ROUTES.PRODUCTS;
          }}
          icon={ShoppingCart}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-txt-main tracking-tight">
          Your Shopping Cart
        </h1>
        <p className="text-txt-muted text-sm mt-1">
          Review your items and complete checkout
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="border border-border-main rounded-2xl overflow-hidden bg-bg-card shadow-xs divide-y divide-border-main">
            {items.map((item) => (
              <div key={item.product.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-bg-alt/30 transition-colors">
                <div className="flex items-center gap-4 flex-grow">
                  <div className="w-16 h-16 rounded-xl border border-border-main bg-bg-alt p-1 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                      {item.product.category}
                    </span>
                    <h3 className="font-semibold text-txt-main text-sm sm:text-base line-clamp-1">
                      <Link href={ROUTES.PRODUCT_DETAILS(item.product.id)} className="hover:text-brand-primary transition-colors font-medium">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-xs font-semibold text-txt-muted mt-0.5">
                      {Formatter.formatCurrency(item.product.price)} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto font-medium">
                  <QuantitySelector
                    quantity={item.quantity}
                    max={item.product.stock}
                    onChange={(val) => adjustQuantity(item.product.id, val)}
                  />
                  <div className="text-right w-20 flex-shrink-0">
                    <span className="font-bold text-txt-main text-sm sm:text-base block">
                      {Formatter.formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 border border-border-main hover:border-brand-danger/30 hover:bg-brand-danger/5 text-txt-dim hover:text-brand-danger rounded-xl transition-all cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link href={ROUTES.PRODUCTS} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover transition-colors pl-2">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-bg-card border border-border-main rounded-2xl p-6 shadow-sm space-y-6">
            <h2 className="font-bold text-txt-main text-lg pb-4 border-b border-border-main">
              Order Summary
            </h2>
            
            <div className="space-y-3.5 text-sm text-txt-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-txt-main">{Formatter.formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                {shipping === 0 ? (
                  <span className="font-semibold text-brand-success">Free Shipping</span>
                ) : (
                  <span className="font-semibold text-txt-main">{Formatter.formatCurrency(shipping)}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span>Estimated Sales Tax (8%)</span>
                <span className="font-semibold text-txt-main">{Formatter.formatCurrency(tax)}</span>
              </div>
              
              <div className="border-t border-border-main pt-4 flex justify-between text-base font-bold text-txt-main">
                <span>Grand Total</span>
                <span>{Formatter.formatCurrency(total)}</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleCheckout}
              variant="primary"
              className="w-full py-3 text-sm font-semibold shadow-sm cursor-pointer"
            >
              Proceed to Secure Checkout
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        title="Secure Checkout"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-3 bg-brand-success/10 text-brand-success rounded-full">
            <CheckCircle2 className="w-12 h-12 animate-bounce" />
          </div>
          <h3 className="text-xl font-bold text-txt-main">Order Successfully Placed!</h3>
          <p className="text-sm text-txt-muted leading-relaxed">
            Your simulated order with total sum of <strong className="text-txt-main">{Formatter.formatCurrency(total)}</strong> was placed successfully. No real payments are processed.
          </p>
          <div className="pt-4 w-full">
            <Button
              type="button"
              onClick={confirmCheckout}
              variant="primary"
              className="w-full py-2.5 font-semibold"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
