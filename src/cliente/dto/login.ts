import {  IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,} from "class-validator";

export class loginDto {
    @IsString()
    correo:string
    @IsString()
    password:string
}