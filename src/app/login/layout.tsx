import { Metadata } from 'next';
import { generateSEO } from '../../utils/seo';

export const metadata: Metadata = generateSEO({
  title: 'Simulated Sign In',
  description: 'Sign in to your simulated registered or guest account to access cart persistence and wishlist parameters.',
  path: '/login'
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
