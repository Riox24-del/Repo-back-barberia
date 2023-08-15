/* eslint-disable prettier/prettier */
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Cita } from 'src/citas/entities/cita.entity';
import { Rol } from 'src/rol/entities/rol.entity';

@Entity()
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

  @OneToMany(() => Cita, (c) => c.cliente)
  cita: Cita[];
  @ManyToOne(() => Rol, (r) => r.cliente)
  rol: Rol;
}
