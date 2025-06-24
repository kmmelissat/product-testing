import { Injectable } from '@nestjs/common';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Tomatitos',
      price: 1.5,
      description: 'Tomatitos are a type of tomato that are small and round.',
    },
    {
      id: 2,
      name: 'Fresitas',
      price: 6,
      description: 'Fresitas are a type of fresas that are small and round.',
    },
    {
      id: 3,
      name: 'Manzanitas',
      price: 3.5,
      description: 'Manzanas are a type of apple that are small and round.',
    },
  ];

  getDiscountedPrice(productId: number, discount: number): number {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product.price * (1 - discount / 100);
  }
}
