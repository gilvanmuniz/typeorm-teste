import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany

} from 'typeorm';
import { Product } from './../../product/entity/product.entity'


@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 35 })
    name: string;

    @OneToMany(type => Product, category => Client)
    produto: Product[];

    @Column({ length: 45 })
    email: string;

}
