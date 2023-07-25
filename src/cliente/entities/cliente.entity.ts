import { Column, PrimaryGeneratedColumn ,Entity, OneToMany} from "typeorm";
import { Cita } from "src/citas/entities/cita.entity";

@Entity('cliente')
export class Cliente {

    @PrimaryGeneratedColumn()
    id:number
    @Column('text')
    nombre:string
    @Column('text')
    apellido:string
    @Column('text')
    correo:string
    @Column('text')
    password:string
    @Column('text')
    sexo:string
    @Column('text')
    edad:number

    @OneToMany(()=>Cita,(c)=>c.cliente)
    cita:Cita[ ]
}
