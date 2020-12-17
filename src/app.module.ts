import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { databaseProviders } from './config/database.providers';
import { ProductModule } from './product/product.module';

@Module({
  imports: [   
     
    TypeOrmModule.forRoot(),
    ClientModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule {}
