import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Product } from './entity/product.entity'
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private readonly prodRepository:Repository<Product>){}

    async findProduct(){
        return await this.prodRepository.find()
    }

    async findProductById(id:number){
        return await this.prodRepository.findOne(id);
    }

    async createProduct( createProdDto:CreateProductDto){
        console.log(createProdDto)
        return await this.prodRepository.save(createProdDto);
    }
    
    async updateProduct(id:number, createProdDto:CreateProductDto){
         await this.prodRepository.update(id, createProdDto);
         return await this.prodRepository.findOne(id);
    }

    async deleteProduct(id:number){
        return await this.prodRepository.delete(id);
    }

}
