import type { Metadata } from 'next';
import { Providers } from '../lib/providers';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { generateSEO } from '../utils/seo';
import './globals.css';

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-bg-main text-txt-main">
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
