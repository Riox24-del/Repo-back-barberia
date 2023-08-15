import { IsString } from 'class-validator';
import { FindOperator } from 'typeorm/find-options/FindOperator';

export class CreateRolDto {
  @IsString()
  tipo: string;
  static id: number | FindOperator<number>;
}
