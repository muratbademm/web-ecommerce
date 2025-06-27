import { Product } from './product';

describe('Product', () => {
it('should create an instance', () => {
    const product = new Product(
      'sku123',                  // sku
      'Test Product',            // name
      'A sample product',        // description
      99.99,                     // unitPrice
      'http://example.com/img',  // imageUrl
      true,                      // active
      10,                        // unitInStock
      new Date(),                // dateCreated
      new Date()                 // lastUpdated
    );
    
    expect(product).toBeTruthy();
  });
});