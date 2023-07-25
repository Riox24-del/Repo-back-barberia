import { IsString } from "class-validator";
import { IsNumber } from "class-validator";
 
export class CreateClienteDto {
    @IsString()
    nombre:string
    @IsString()
    apellido:string
    @IsString()
    correo:string
    @IsString()
    password:string
    @IsString()
    sexo:string
    @IsNumber()
    edad:number 
   
}
