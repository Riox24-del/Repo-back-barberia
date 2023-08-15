import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from './create-rol.dto';
import { IsString } from 'class-validator';

export class UpdateRolDto extends PartialType(CreateRolDto) {
  @IsString()
  tipo: string;
}
