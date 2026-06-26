import { Metadata } from 'next';
import { generateSEO } from '../../utils/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Us',
  description: 'Learn more about ElectroShow, our mission to power digital workspaces, and our commitment to high-performance electronics.',
  path: '/about'
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
