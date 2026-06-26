import { Metadata } from 'next';
import { generateSEO } from '../../utils/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact Support',
  description: 'Get in touch with the ElectroShow support crew for questions and consultations regarding premium electronics.',
  path: '/contact'
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
