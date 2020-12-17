import { Controller, Get, Post, Request, Req, Body, Put, Delete} from '@nestjs/common';
import { ClientService } from './client.service'
import { Client } from './client.entity'
import { ClientCreateDtro } from './dtos/create-client.dto';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService:ClientService){}

    @Get()
    async findClient():Promise<Client[]>{
       return await this.clientService.getClient()
    }

    @Get('/id')
    async findClientById(id:number):Promise<Client>{
        return await this.clientService.getClientById(id);
    }

    // @Post()
    // async createClient(@Req() request:Request):Promise<Client>{
    //     //console.log( 'teste:  ' +  request)
    //     return this.clientService.createClient(request.body as any);
    // } 
    
    @Post()
    async createClient(@Body() clientDto:ClientCreateDtro):Promise<Client>{        
        return this.clientService.createClient(clientDto);
    }

    @Put('/:id')
    async updateClient(id:number, @Body() clientDto:ClientCreateDtro):Promise<Client>{
        return this.clientService.updateClient(id, clientDto);
    }

    @Delete('/:id')
    async deleteClient(id:number):Promise<void>{
        return this.clientService.deleteClient(id);
    }
    
}
