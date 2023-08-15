/* eslint-disable prettier/prettier */
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { loginDto } from './dto/login';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private ClienteRepository: Repository<Cliente>
  ) { }


  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.ClienteRepository.create({ ...createClienteDto });
    await this.ClienteRepository.save(cliente);
    return cliente;
  }

  findAll() {
    const cliente = this.ClienteRepository.find();
    return cliente;
  }

  findOne(id: number) {
    const Cliente = this.ClienteRepository.findOne({
      where: { id },
    });
    if (!Cliente) {
      throw new BadRequestException('Curso no encontrado');
    }
    return Cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    //return `This action updates a #${id} cliente`;
    await this.ClienteRepository.update(id, updateClienteDto);
    const user = this.ClienteRepository.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('No se puede actualizar');
    }
    return user;
  }

  async remove(id: number) {
    this.ClienteRepository.delete(id);
    const cliente = await this.ClienteRepository.findOne({ where: { id } });
    if (!cliente) {
      throw new BadRequestException('No se puede eliminar');
    }
    return cliente;
  }

}

