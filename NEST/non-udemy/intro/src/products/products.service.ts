import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  fetchProducts() {
    return [...this.products];
  }

  fetchOneProduct(prodId: string) {
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }

  updateProduct(prodId: string, title: string, desc: string, price: number) {
    const product = this.findProduct(prodId)[0];
    const index = this.findProduct(prodId)[1];
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.desc = desc;
    }
    if (price) {
      updatedProduct.pirce = price;
    }
    this.products[index] = updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);

    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('could not find product');
    }
    return [product, productIndex];
  }

  deleteProduct(prodId: string) {
    const [product, index] = this.findProduct(prodId);
    this.products.splice(index, 1);
  }
}
