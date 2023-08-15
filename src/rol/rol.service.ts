import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol) private rolRepository: Repository<Rol>,
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createRolDto: CreateRolDto) {
    //return 'This action adds a new rol';
    const rol = this.rolRepository.create({ ...createRolDto });
    await this.rolRepository.save(rol);
    return rol;
  }

  findAll() {
    //return `This action returns all rol`;
    const roles = this.rolRepository.find();
    return roles;
  }

  findOne(id: number) {
    //return `This action returns a #${id} rol`;
    const rol = this.rolRepository.findOne({ where: { id } });
    if (!rol) {
      throw new BadRequestException(`Rol #${id} no encontrado`);
    }
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    //return `This action updates a #${id} rol`;
    await this.rolRepository.update(id, updateRolDto);
    const rol = this.rolRepository.findOne({ where: { id } });
    if (!rol) {
      throw new BadRequestException(`Rol #${id} no se puede actualizar`);
    }
    return rol;
  }

  remove(id: number) {
    this.rolRepository.delete(id);
    return `Rol #${id} eliminado`;
  }
}
