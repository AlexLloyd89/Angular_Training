import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private ProductService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const genId = this.ProductService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: genId };
  }

  @Get()
  getAllProducts() {
    return this.ProductService.fetchProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.ProductService.fetchOneProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.ProductService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.ProductService.deleteProduct(prodId);
    return null;
  }
}
