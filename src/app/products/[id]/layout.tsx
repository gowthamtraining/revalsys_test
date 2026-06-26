import { Metadata } from 'next';
import { generateSEO } from '../../../utils/seo';
import productsData from '../../../data/products.json';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return generateSEO({
      title: 'Product Not Found',
      description: 'The requested premium electronics item could not be found in our database.'
    });
  }

  return generateSEO({
    title: product.name,
    description: product.description,
    path: `/products/${product.id}`,
    ogImage: product.image
  });
}

export default function ProductDetailsLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
