import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    service = new ProductsService();
  });

  it('deberia devolver el precio con descuento', () => {
    const price = service.getDiscountedPrice(1, '10%');
    expect(price).toBe(1.35);
  });

  it('deberia devolver el precio con iva', () => {
    const iva = service.getIva(3);
    expect(iva).toBe(13);
  });

  it('no acepte descuentos mayores al 100%', () => {
    expect(() => service.getDiscountedPrice(1, '101%')).toThrow('Discount must be less than 100%');
  });
});
