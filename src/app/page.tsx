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
import { TestimonialCard } from '../components/TestimonialCard';
import testimonialsData from '../data/testimonials.json';

export default function HomePage() {
  const featuredProducts = useAppSelector(selectFeaturedProducts);

  return (
    <div className="space-y-16 pb-16">
      <h1 className="sr-only">ElectroShow - Premium Electronics Product Showcase</h1>
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
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              initials={item.initials}
              name={item.name}
              role={item.role}
              avatarBg={item.avatarBg}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
