'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Button';
import { useHero } from './useHero';

export const Hero: React.FC = () => {
  const { activeSlide, slides, nextSlide, prevSlide, setActiveSlide } = useHero();

  return (
    <section className="relative w-full overflow-hidden bg-bg-card border-b border-border-main" aria-label="Featured Promotions">
      <div className="relative h-[500px] md:h-[550px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-12 transition-all duration-700 ease-in-out ${
                isActive
                  ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                  : 'opacity-0 translate-x-8 pointer-events-none z-0'
              }`}
            >
              <div className="max-w-xl space-y-6 animate-fade-in pl-0 lg:pl-8 text-center lg:text-left mx-auto lg:mx-0">
                <span className="inline-flex px-3 py-1 text-xs font-bold tracking-widest text-brand-primary bg-brand-primary/10 rounded-full">
                  {slide.badge}
                </span>
                <div className="space-y-2">
                  <h3 className="text-txt-muted text-base md:text-lg font-medium">
                    {slide.subtitle}
                  </h3>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-txt-main leading-tight">
                    {slide.title}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-txt-muted leading-relaxed">
                  {slide.description}
                </p>
                <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link href={slide.link}>
                    <Button type="button" variant="primary" size="lg" className="group">
                      Shop Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button type="button" variant="outline" size="lg">
                      View Catalog
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex justify-center items-center h-full relative p-8">
                <div className="absolute inset-0 bg-radial-gradient from-brand-primary/10 to-transparent rounded-full filter blur-3xl w-[80%] h-[80%] m-auto"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="max-h-[340px] w-auto object-contain rounded-2xl shadow-card transform hover:scale-[1.02] transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-border-main bg-bg-card/85 text-txt-muted hover:text-txt-main hover:bg-bg-alt shadow-sm transition-all z-20 cursor-pointer hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-border-main bg-bg-card/85 text-txt-muted hover:text-txt-main hover:bg-bg-alt shadow-sm transition-all z-20 cursor-pointer hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeSlide ? 'bg-brand-primary w-6' : 'bg-txt-dim hover:bg-txt-muted'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
