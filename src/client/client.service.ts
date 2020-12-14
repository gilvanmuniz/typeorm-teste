import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientCreateDtro } from './dtos/create-client.dto';

@Injectable()
export class ClientService {

    constructor(@InjectRepository(Client) private clientRpository:Repository<Client>){}

    async getUsers(client: Client): Promise<Client[]> {
        return this.clientRpository.find();
    }


    async getUserById(client:Client, id:number): Promise<Client>{
        return this.clientRpository.findOne(id);
    }

    async createClient(clientCreateDto:ClientCreateDtro):Promise<Client>{
            return this.clientRpository.create(clientCreateDto);
    }
        
}
