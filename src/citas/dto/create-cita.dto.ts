import {
  IsDateString,
  IsNotEmpty,
  IsString,
  isNotEmpty,
} from 'class-validator';

export class CreateCitaDto {
  @IsDateString()
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsString()
  motivo: string;

  clienteid: number;
}
