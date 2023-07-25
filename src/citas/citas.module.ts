import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Cita, Cliente])],
  controllers: [CitasController],
  providers: [CitasService]
})
export class CitasModule {

}
