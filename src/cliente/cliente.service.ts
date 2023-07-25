import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private ClienteRepository:Repository<Cliente>,
){}
  
  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.ClienteRepository.create({ ...createClienteDto });
    await this.ClienteRepository.save(cliente);
    return cliente;
  }


  findAll() {
    const cliente=this.ClienteRepository.find();
    return cliente
  }

  findOne(id: number) {
    const Cliente=this.ClienteRepository.findOne({
      where:{id}});
      if(!Cliente){
        throw new BadRequestException("Curso no encontrado");
      }
     return Cliente;
    }
  
  
  

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
