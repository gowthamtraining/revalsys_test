'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import { useFooter } from './useFooter';

export const Footer: React.FC = () => {
  const {
    register,
    errors,
    submitted,
    handleSubscribe,
    successMessage
  } = useFooter();

  return (
    <footer className="bg-bg-card border-t border-border-main text-txt-muted transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
              <span className="bg-brand-primary text-white p-2 rounded-xl group-hover:scale-105 transition-all">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <span className="font-bold text-xl text-txt-main tracking-tight">
                Electro<span className="text-brand-primary">Show</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-txt-muted">
              Premium gadgets and high-performance electronics showcasing state of the art innovation, custom-tailored for your productivity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-bg-alt hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-bg-alt hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-bg-alt hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-bg-alt hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider mb-4">
              Catalog
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`${ROUTES.PRODUCTS}?category=laptop`} className="hover:text-brand-primary transition-colors font-medium">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.PRODUCTS}?category=mobile`} className="hover:text-brand-primary transition-colors font-medium">
                  Mobiles
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.PRODUCTS}?category=headphones`} className="hover:text-brand-primary transition-colors font-medium">
                  Headphones
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.PRODUCTS}?category=monitor`} className="hover:text-brand-primary transition-colors font-medium">
                  Monitors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={ROUTES.ABOUT} className="hover:text-brand-primary transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CONTACT} className="hover:text-brand-primary transition-colors font-medium">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-primary transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-primary transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-txt-main text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-txt-muted leading-relaxed">
              Subscribe to receive updates on premium new arrivals and exclusive deals.
            </p>
            {submitted ? (
              <div className="p-3 bg-brand-success/10 border border-brand-success/20 text-brand-success rounded-xl text-xs font-medium">
                {successMessage}
              </div>
            ) : (
              <div className="space-y-2">
                <form onSubmit={handleSubscribe} className="relative flex">
                  <input
                    type="text"
                    placeholder="Your email address"
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address.'
                      }
                    })}
                    className="w-full pl-4 pr-12 py-2.5 bg-bg-alt border border-border-main rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm transition-all cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
                {errors.email && (
                  <span className="text-[11px] text-brand-danger font-semibold block pl-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-main text-center text-xs text-txt-dim flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} ElectroShow Inc. All rights reserved.</p>
          <p>Created by Antigravity AI Partner</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
