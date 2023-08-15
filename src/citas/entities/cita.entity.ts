import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Entity('cita')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text',{unique:true})
  fecha: Date;

  @Column('text',{unique:true})
  hora: string;

  @Column('text')
  motivo: string;

  @ManyToOne(() => Cliente, (ci) => ci.cita)
  cliente: Cliente;
}
