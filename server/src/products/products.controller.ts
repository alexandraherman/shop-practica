import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Controller('/products')
export class ProductsController {
  
    constructor(private readonly productsService: ProductsService) {}


  @Get()
  async findAll(): Promise<Product[]> {
    console.log("alo")
    return this.productsService.findAll();
  }
 
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(parseInt(id, 10));
  }
 
  @Post()
  async create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(parseInt(id, 10), productData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(parseInt(id, 10));
  }
}
