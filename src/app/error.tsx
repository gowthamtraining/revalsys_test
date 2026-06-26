'use client';

import React, { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Unhandled app error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-5 animate-fade-in">
      <div className="p-4 bg-brand-danger/10 text-brand-danger rounded-full mb-2">
        <AlertCircle className="w-12 h-12" />
      </div>
      <h1 className="text-2xl font-extrabold text-txt-main tracking-tight">Something Went Wrong</h1>
      <p className="text-txt-muted text-sm max-w-md leading-relaxed">
        An unexpected error occurred in this application view. If this problem persists, please check your network connection or contact support.
      </p>
      <div className="flex gap-4">
        <Button type="button" variant="primary" onClick={reset}>
          Try Again
        </Button>
        <Button type="button" variant="outline" onClick={() => {
          if (typeof window !== 'undefined') window.location.href = '/';
        }}>
          Return Home
        </Button>
      </div>
    </div>
  );
}
