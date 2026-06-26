import { useState, useEffect } from 'react';

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Supercharged Performance.',
    subtitle: 'MacBook Pro M3 Series',
    description: 'Experience pure computing power with the new M3 Max chip. Designed for devs, creators, and professionals who demand the absolute best.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    link: '/products/prod-1',
    badge: 'NEW ARRIVAL'
  },
  {
    id: 2,
    title: 'The Era of Mobile AI.',
    subtitle: 'Galaxy S24 Ultra',
    description: 'Experience photo translation, magic note summaries, and zoom capabilities wrapped in a sleek titanium frame with Snapdragon 8 Gen 3.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    link: '/products/prod-4',
    badge: 'BEST SELLER'
  },
  {
    id: 3,
    title: 'Industry-Leading ANC.',
    subtitle: 'Sony WH-1000XM5',
    description: 'Immerse yourself in high-fidelity sound. Features dual processors controlling 8 microphones for unparalleled noise cancellation.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    link: '/products/prod-6',
    badge: 'HOT DEAL'
  }
];

export const useHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return {
    activeSlide,
    setActiveSlide,
    slides: HERO_SLIDES,
    nextSlide,
    prevSlide
  };
};
export default useHero;
