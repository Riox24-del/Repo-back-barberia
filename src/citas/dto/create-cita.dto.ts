import { IsDateString,  IsString } from 'class-validator';

export class CreateCitaDto {
    @IsDateString()
  fecha: String;

  @IsString()
  hora: string;

  @IsString()
  motivo: string;

  clienteid:number
}
