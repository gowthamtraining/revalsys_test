import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbProps } from './types';


export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-5 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-txt-muted hover:text-brand-primary transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-txt-dim mx-1" />
              {isLast || !item.href ? (
                <span className="text-txt-main font-medium select-none capitalize" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-txt-muted hover:text-brand-primary transition-colors capitalize">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
