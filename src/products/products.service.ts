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
      price: 100,
      description: 'Manzanitas are a type of apple that are small and round.',
    },
  ];

  getDiscountedPrice(productId: number, discount: string | number): number {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }

    let discountValue: number;
    if (typeof discount === 'string') {
      discountValue = parseFloat(discount.replace('%', ''));
    } else {
      discountValue = discount;
    }

    if (discountValue > 100) {
      throw new Error('Discount must be less than 100%');
    }

    return product.price * (1 - discountValue / 100);
  }

  getIva(productId: number): number {
    const product = this.products.find((p) => p.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }

    return product.price * 0.13;
  }
}
