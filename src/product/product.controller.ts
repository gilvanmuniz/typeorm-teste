import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Product } from './entity/product.entity'
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('product')
export class ProductController {

    constructor( private readonly prodService: ProductService){}

    @Get()
    async findByProduct():Promise<Product[]>{
        return await this.prodService.findProduct();
    }

    @Get('/:id')
    async findProductById(id:number):Promise<Product>{
        return await this.prodService.findProductById(id);
    }

    @Post()
    async createProduct(@Body() prodDto:CreateProductDto ):Promise<Product>{
        return await this.prodService.createProduct(prodDto);
    }

    @Put('/:id')
    async updateProduct(id:number, @Body() prodDto:CreateProductDto){
        return await this.prodService.updateProduct(id,prodDto);
    }
}
