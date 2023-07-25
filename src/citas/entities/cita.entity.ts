import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Entity('cita')
export class Cita {
    @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  fecha: Date;

  @Column('text')
  hora: string;




  @Column('text')
  motivo: string;

  @ManyToOne(()=>Cliente,(ci)=>ci.cita)
  cliente:Cliente
}
