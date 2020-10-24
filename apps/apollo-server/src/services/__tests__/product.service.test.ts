import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { FetchMock } from 'jest-fetch-mock';

describe('Product Service', () => {
  let service = new ProductService();

  it('should get all products', async () => {
    // Arrange
    const mockResponse: Product[] = [
      {
        id: 1,
        name: 'Iphone',
        image: 'http://fakeurl',
        price: '2,000.00 TL',
        cargoType: 'FREE',
        isLiked: false,
      },
    ];
    (fetch as FetchMock).mockResponse(JSON.stringify(mockResponse));

    // Act
    const response = await service.getAllProducts();

    // Assertion
    expect(response).toEqual(mockResponse);
    expect((fetch as FetchMock).mock.calls[0][0]).toEqual('http://localhost:4001/products');
    expect((fetch as FetchMock).mock.calls[0][1]?.method).toEqual('get');
  });
});
