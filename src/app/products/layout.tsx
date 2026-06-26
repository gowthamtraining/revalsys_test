import { Metadata } from 'next';
import { generateSEO } from '../../utils/seo';

export const metadata: Metadata = generateSEO({
  title: 'Product Catalog',
  description: 'Explore our catalog of premium electronic products, including laptops, mobiles, wearable watches, custom keyboards, and monitors.',
  path: '/products'
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
