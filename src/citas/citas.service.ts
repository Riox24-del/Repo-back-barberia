import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Cita } from './entities/cita.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class CitasService {
  constructor(@InjectRepository(Cita) private citaRepository: Repository<Cita>,
  @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>) {}
 
  async create(createCitaDto: CreateCitaDto) {
    // const cita = this.citaRepository.create(createCitaDto);
    // return this.citaRepository.save(cita);
    const cliente=await this.clienteRepository.findOne({
      where:{
        id:createCitaDto.clienteid
      }
    });
    console.log(cliente);
  
     const cita=this.citaRepository.create({...createCitaDto,
    cliente:cliente});
  await this.citaRepository.save(cita);
  return cita;
    }
  
  
  async findAll(): Promise<Cita[]> {
    return this.citaRepository.find();
  }

  async findOne(id: number) {
    const cita=this.citaRepository.findOne({
      where:{id}});
      if(!cita){
        throw new BadRequestException("Task no encontrado");
      }
     return cita;
  }

  // async findOne(id: number): Promise<Cita> {
  //   return this.citaRepository.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.citaRepository.delete(id);
  // }

  update(id: number, updateCitaDto: UpdateCitaDto) {
    return `This action updates a #${id} cita`;
  }

  remove(id: number) {
    return `This action removes a #${id} cita`;
  }
}
