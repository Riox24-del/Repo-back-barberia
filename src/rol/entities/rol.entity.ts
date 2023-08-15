import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Column, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  tipo: string;
  @Column('bool', { default: false })
  estate: boolean;
  @OneToMany(() => Cliente, (c) => c.rol)
  cliente: Cliente[];
}
