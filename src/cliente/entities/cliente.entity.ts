import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  nombre: string;
  @Column('text')
  apellido: string;
  @Column('text')
  correo: string;
  @Column('text')
  password: string;
  @Column('text')
  sexo: string;
  @Column('text')
  edad: number;
}
