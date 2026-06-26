import React from 'react';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { ROUTES } from '../constants/routes';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-6 space-y-6 animate-fade-in">
      <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-full mb-2">
        <HelpCircle className="w-14 h-14" />
      </div>
      <h1 className="text-3xl font-extrabold text-txt-main tracking-tight">404 - Page Not Found</h1>
      <p className="text-txt-muted text-sm max-w-sm leading-relaxed">
        The electronics page or showcase layout you are searching for does not exist. It might have been relocated or deleted.
      </p>
      <div className="flex gap-4">
        <Link href={ROUTES.HOME}>
          <Button type="button" variant="primary">Go to Homepage</Button>
        </Link>
        <Link href={ROUTES.PRODUCTS}>
          <Button type="button" variant="outline">Browse Products</Button>
        </Link>
      </div>
    </div>
  );
}
