import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarberoService } from './barbero.service';
import { CreateBarberoDto } from './dto/create-barbero.dto';
import { UpdateBarberoDto } from './dto/update-barbero.dto';

@Controller('barbero')
export class BarberoController {
  constructor(private readonly barberoService: BarberoService) {}

  @Post('barberoNuevo')
  create(@Body() createBarberoDto: CreateBarberoDto) {
    return this.barberoService.create(createBarberoDto);
  }

  @Get()
  findAll() {
    return this.barberoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barberoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarberoDto: UpdateBarberoDto) {
    return this.barberoService.update(+id, updateBarberoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barberoService.remove(+id);
  }
}
