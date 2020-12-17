import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './../../client/entities/client.entity';

@Entity()
export class Product{
   
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    price:number

    @ManyToOne(type => Client, produto => Product, { eager:true })
    @JoinColumn()
    category:Client

    @CreateDateColumn({ type:'timestamp'})
    created_at:Date
    
}