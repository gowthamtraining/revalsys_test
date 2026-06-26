'use client';

import { User, KeyRound, ShieldAlert, LogIn } from 'lucide-react';
import { useLoginPage } from './login';
import { Button } from '../../components/Button';

export default function LoginPage() {
  const {
    register,
    errors,
    handleUserLogin,
    handleGuestLogin,
    toastMessage
  } = useLoginPage();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 p-8 bg-bg-card border border-border-main rounded-2xl shadow-sm transition-all animate-fade-in relative">
        <div className="text-center">
          <span className="inline-flex p-3 bg-brand-primary/10 text-brand-primary rounded-2xl mb-4">
            <User className="w-8 h-8" />
          </span>
          <h1 className="text-3xl font-extrabold text-txt-main tracking-tight">
            Welcome to ElectroShow
          </h1>
          <p className="mt-2 text-sm text-txt-muted leading-relaxed">
            Log in to manage your cart, wishlist, and experience secure simulated checkouts.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleUserLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-xs font-semibold text-txt-muted block mb-1">
                Username
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-txt-dim">
                  <User className="w-5 h-5" />
                </span>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register('username', {
                    required: 'Username is required.',
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 characters.'
                    }
                  })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-bg-alt border rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:ring-1 transition-all ${errors.username
                      ? 'border-brand-danger focus:border-brand-danger focus:ring-brand-danger/20'
                      : 'border-border-main focus:border-brand-primary focus:ring-brand-primary'
                    }`}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-brand-danger font-semibold mt-1.5 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password-sim" className="text-xs font-semibold text-txt-muted block mb-1">
                Password (Simulated)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-txt-dim">
                  <KeyRound className="w-5 h-5" />
                </span>
                <input
                  id="password-sim"
                  type="password"
                  disabled
                  placeholder="No password required for simulation"
                  className="w-full pl-10 pr-4 py-2.5 bg-bg-alt border border-border-main rounded-xl text-sm text-txt-dim select-none"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <LogIn className="w-4 h-4" />
            Sign In as Registered User
          </Button>
        </form>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border-main"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-3 bg-bg-card text-txt-dim font-bold tracking-wider">Or</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full py-3 bg-bg-alt border border-border-main text-txt-main font-semibold rounded-xl text-sm hover:bg-bg-alt/60 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
          >
            Check in as Guest User
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-card border border-brand-primary/30 text-txt-main px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in ring-4 ring-brand-primary/10">
          <span className="p-1 bg-brand-primary text-white rounded-lg">
            <User className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
