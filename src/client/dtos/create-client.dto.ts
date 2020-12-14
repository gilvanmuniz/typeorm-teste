import { IsEmail, IsNotEmpty } from 'class-validator';

export class ClientCreateDtro {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
}