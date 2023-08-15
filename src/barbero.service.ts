import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBarberoDto } from './dto/create-barbero.dto';
import { UpdateBarberoDto } from './dto/update-barbero.dto';
import { Barbero } from './entities/barbero.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class BarberoService {
  constructor(
    @InjectRepository(Barbero) private BarberoRepository: Repository<Barbero>,
  ) {}
  async barbero(termino: string) {
    const tasks = await this.BarberoRepository.find({
      where: { nombre: Like(`%${termino}%`) },
    });
    return tasks;
  }

  async create(createBarberoDto: CreateBarberoDto) {
    const barbero = this.BarberoRepository.create({ ...createBarberoDto });
    await this.BarberoRepository.save(barbero);
    return barbero;
  }
  findOne(id: number) {
    const task = this.BarberoRepository.findOne({
      where: { id },
    });
    if (!task) {
      throw new BadRequestException('Barber nout');
    }
    return task;
  }
  findAll() {
    const barbero = this.BarberoRepository.find();
    return barbero;
  }



  async remove(id: number) {
    this.BarberoRepository.delete(id);
    const task = await this.BarberoRepository.findOne({ where: { id } });
    if (!task) {
      throw new BadRequestException('No pude borrar este bareretion');
    }
    return `This action removes a #${id} barbero`;
  }
  async update(id: number, updateBarberoDto: UpdateBarberoDto) {
    await this.BarberoRepository.update(id, updateBarberoDto);
    const task = this.BarberoRepository.findOne({ where: { id } });
    if (!task) {
      throw new BadRequestException('No actualizado');
    }
    return task;
  }
}
