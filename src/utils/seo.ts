import { Metadata } from 'next';
import { METADATA } from '../constants/metadata';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export const generateSEO = ({
  title,
  description,
  path = '',
  ogImage
}: SEOProps = {}): Metadata => {
  const pageTitle = title ? `${title} | ${METADATA.SITE_NAME}` : METADATA.DEFAULT_TITLE;
  const pageDesc = description || METADATA.DEFAULT_DESC;
  const canonicalUrl = `${METADATA.SITE_URL}${path}`;
  const image = ogImage || `${METADATA.SITE_URL}/images/og-default.jpg`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: METADATA.KEYWORDS,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: METADATA.SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
};
