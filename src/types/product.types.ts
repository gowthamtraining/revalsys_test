export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  specifications: ProductSpecification;
  image: string;
  featured: boolean;
  stock: number;
}
