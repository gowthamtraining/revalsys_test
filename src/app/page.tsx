'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Headphones, RotateCcw, Star } from 'lucide-react';
import { useAppSelector } from '../redux/hooks';
import { selectFeaturedProducts } from '../redux/selectors/productSelectors';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { Button } from '../components/Button';
import categoriesData from '../data/categories.json';
import { ROUTES } from '../constants/routes';

export default function HomePage() {
  const featuredProducts = useAppSelector(selectFeaturedProducts);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <Hero />

      {/* Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-txt-main tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-3 text-txt-muted text-sm leading-relaxed">
            Discover a wide range of premium electronics designed to elevate your everyday tech experience.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={`${ROUTES.PRODUCTS}?category=${cat.slug}`}
              className="group flex flex-col items-center p-5 bg-bg-card border border-border-main rounded-2xl hover:border-brand-primary hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-bg-alt text-brand-primary group-hover:bg-brand-primary group-hover:text-white rounded-xl mb-3 transition-colors duration-300 font-bold uppercase text-lg">
                {cat.name.substring(0, 2)}
              </span>
              <h3 className="font-semibold text-sm text-txt-main group-hover:text-brand-primary transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-txt-main tracking-tight">
              Featured Products
            </h2>
            <p className="mt-2 text-txt-muted text-sm leading-relaxed">
              Explore our handpicked selection of top-rated, high-performance gadgets.
            </p>
          </div>
          <Link href={ROUTES.PRODUCTS}>
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <ProductGrid products={featuredProducts.slice(0, 4)} />
        ) : (
          <p className="text-txt-muted text-center py-12">No featured products available.</p>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-bg-alt border-y border-border-main py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-txt-main tracking-tight">
              Why Choose ElectroShow
            </h2>
            <p className="mt-3 text-txt-muted text-sm leading-relaxed">
              We offer premium quality products, top-tier warranties, and outstanding customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-xs flex flex-col items-center text-center space-y-4">
              <span className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
                <Truck className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-txt-main text-base">Free Shipping</h3>
              <p className="text-sm text-txt-muted leading-relaxed">
                Enjoy free, insured, and tracked shipping on all orders over $100.
              </p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-xs flex flex-col items-center text-center space-y-4">
              <span className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-txt-main text-base">Secure Checkout</h3>
              <p className="text-sm text-txt-muted leading-relaxed">
                All transactions are fully encrypted and protected using state-of-the-art encryption.
              </p>
            </div>

            <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-xs flex flex-col items-center text-center space-y-4">
              <span className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
                <Headphones className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-txt-main text-base">24/7 Service</h3>
              <p className="text-sm text-txt-muted leading-relaxed">
                Our support crew is always available to answer your product and shipping queries.
              </p>
            </div>

            <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-xs flex flex-col items-center text-center space-y-4">
              <span className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
                <RotateCcw className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-txt-main text-base">Easy Returns</h3>
              <p className="text-sm text-txt-muted leading-relaxed">
                Not satisfied with your order? Get a stress-free replacement or refund within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-txt-main tracking-tight">
            Loved by Customers
          </h2>
          <p className="mt-3 text-txt-muted text-sm leading-relaxed">
            Read real, unaltered testimonials from verified electronic buyers and tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-txt-muted italic leading-relaxed">
                "The MacBook Pro M3 was delivered in pristine condition within 2 days! The customer service was exceptionally supportive. Highly recommend ElectroShow."
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border-main pt-4">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                JD
              </div>
              <div>
                <h4 className="font-semibold text-sm text-txt-main">John Doe</h4>
                <p className="text-xs text-txt-dim">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-txt-muted italic leading-relaxed">
                "Finding key mechanical keyboards in stock is usually tough, but ElectroShow had the Keychron Q1 Pro ready to ship. Phenomenal website experience."
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border-main pt-4">
              <div className="w-10 h-10 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                AS
              </div>
              <div>
                <h4 className="font-semibold text-sm text-txt-main">Alice Smith</h4>
                <p className="text-xs text-txt-dim">UI/UX Designer</p>
              </div>
            </div>
          </div>

          <div className="bg-bg-card p-6 rounded-2xl border border-border-main shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-txt-muted italic leading-relaxed">
                "My Sony headphones are fantastic. Using Redux cart worked flawlessly, and local storage remembered my checkout options. Pure technical excellence!"
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border-main pt-4">
              <div className="w-10 h-10 bg-brand-success text-white rounded-full flex items-center justify-center font-bold text-sm">
                MB
              </div>
              <div>
                <h4 className="font-semibold text-sm text-txt-main">Marcus Brown</h4>
                <p className="text-xs text-txt-dim">Audio Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
