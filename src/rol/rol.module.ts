import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Rol } from './entities/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RolController],
  providers: [RolService],
  imports: [
    TypeOrmModule.forFeature([Rol]),
    TypeOrmModule.forFeature([Cliente]),
  ],
})
export class RolModule {}
