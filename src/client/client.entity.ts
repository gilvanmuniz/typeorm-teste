import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 35 })
    name: string;

    @Column({ length: 45 })
    email: string;
}
