/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class loginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  correo: string;
  @IsString()
  password: string;
}
