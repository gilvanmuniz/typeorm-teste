import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientCreateDtro } from './dtos/create-client.dto';

@Injectable()
export class ClientService {

    constructor(@InjectRepository(Client) private clientRpository:Repository<Client>){}
    
    async getClient(): Promise<Client[]> {
        return this.clientRpository.find();
    }

    async getClientById(id:number): Promise<Client>{
        return this.clientRpository.findOne(id);
    }

    async createClient(clientCreateDto:ClientCreateDtro):Promise<Client>{            
        return this.clientRpository.save(clientCreateDto);
    }

    async updateClient(_id:number, clientDto:ClientCreateDtro){
        const post = this.getClientById(_id);
        const editedPost = Object.assign(post, clientDto);
        return this.clientRpository.save(editedPost);
    }

    async deleteClient(_id:number){
        await this.clientRpository.delete(_id);
    }
        
}

