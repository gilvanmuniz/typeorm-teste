import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { TypeOrmModule }  from '@nestjs/typeorm'
import { ClientController } from './client.controller';
import { Client } from './client.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientController],
  exports:[ClientService]
})
export class ClientModule {}
