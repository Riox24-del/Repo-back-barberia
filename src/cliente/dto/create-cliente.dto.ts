/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre: string;
  @IsString()
  apellido: string;
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  correo: string;
  @IsString()
  password: string;
  @IsString()
  sexo: string;
  @IsNumber()
  edad: number;
}
