import { PartialType } from '@nestjs/mapped-types';
import { CreateBarberoDto } from './create-barbero.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateBarberoDto extends PartialType(CreateBarberoDto) {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;
  @IsString()
  correo: string;
  @IsString()
  password: string;
  @IsString()
  sexo: string;
  @IsNumber()
  edad: number;
}
