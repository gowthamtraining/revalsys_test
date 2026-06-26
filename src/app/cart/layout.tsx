import { Metadata } from 'next';
import { generateSEO } from '../../utils/seo';

export const metadata: Metadata = generateSEO({
  title: 'Shopping Cart',
  description: 'Review your selected premium electronics, adjust quantities, and proceed to a secure simulated checkout.',
  path: '/cart'
});

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
