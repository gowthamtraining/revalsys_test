'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Heart, Sun, Moon, User, LogOut, LogIn } from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import { useNavbar } from './useNavbar';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    auth,
    theme,
    mobileMenuOpen,
    setMobileMenuOpen,
    handleLogout,
    handleThemeToggle,
    toggleMobileMenu
  } = useNavbar();

  return (
    <header className="sticky top-0 z-50 w-full glassmorphic border-b border-border-main transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
              <span className="bg-brand-primary text-white p-2 rounded-xl group-hover:scale-105 transition-all">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <span className="font-bold text-xl text-txt-main tracking-tight group-hover:text-brand-primary transition-colors">
                Electro<span className="text-brand-primary">Show</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <Link href={ROUTES.HOME} className="text-txt-muted hover:text-brand-primary transition-colors font-medium">
              Home
            </Link>
            <Link href={ROUTES.PRODUCTS} className="text-txt-muted hover:text-brand-primary transition-colors font-medium">
              Products
            </Link>
            <Link href={ROUTES.ABOUT} className="text-txt-muted hover:text-brand-primary transition-colors font-medium">
              About
            </Link>
            <Link href={ROUTES.CONTACT} className="text-txt-muted hover:text-brand-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="p-2 rounded-xl text-txt-muted hover:text-txt-main hover:bg-bg-alt transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              href={ROUTES.PRODUCTS}
              className="p-2 rounded-xl text-txt-muted hover:text-txt-main hover:bg-bg-alt transition-all relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-danger text-white rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-bg-card">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href={ROUTES.CART}
              className="p-2 rounded-xl text-txt-muted hover:text-txt-main hover:bg-bg-alt transition-all relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-bg-card">
                  {cartCount}
                </span>
              )}
            </Link>

            {auth.isLoggedIn ? (
              <div className="flex items-center gap-3 pl-3 border-l border-border-main font-medium">
                <span className="text-sm text-txt-muted max-w-[100px] truncate">
                  Hi, {auth.username}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="p-2 rounded-xl text-txt-muted hover:text-brand-danger hover:bg-bg-alt transition-all cursor-pointer"
                  aria-label="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                href={ROUTES.LOGIN}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md transition-all"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="p-2 rounded-xl text-txt-muted hover:bg-bg-alt cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link href={ROUTES.CART} className="p-2 rounded-xl text-txt-muted hover:bg-bg-alt relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-bg-card">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-xl text-txt-muted hover:bg-bg-alt cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-main bg-bg-card animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link
              href={ROUTES.HOME}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-txt-muted hover:text-brand-primary hover:bg-bg-alt"
            >
              Home
            </Link>
            <Link
              href={ROUTES.PRODUCTS}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-txt-muted hover:text-brand-primary hover:bg-bg-alt"
            >
              Products
            </Link>
            <Link
              href={ROUTES.ABOUT}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-txt-muted hover:text-brand-primary hover:bg-bg-alt"
            >
              About
            </Link>
            <Link
              href={ROUTES.CONTACT}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-txt-muted hover:text-brand-primary hover:bg-bg-alt"
            >
              Contact
            </Link>
            
            <div className="border-t border-border-main pt-4 px-3 flex flex-col gap-3 font-medium">
              {auth.isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2 py-2">
                    <User className="w-5 h-5 text-txt-muted" />
                    <span className="text-base font-semibold text-txt-main">
                      {auth.username} {auth.isGuest && '(Guest)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-brand-danger/10 hover:bg-brand-danger/20 text-brand-danger font-semibold rounded-xl text-sm transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href={ROUTES.LOGIN}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold rounded-xl text-sm transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
