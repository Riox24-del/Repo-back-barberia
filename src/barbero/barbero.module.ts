import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BarberoService } from './barbero.service';
import { BarberoController } from './barbero.controller';
import { Barbero } from './entities/barbero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Barbero])],
  controllers: [BarberoController],
  providers: [BarberoService],
})
export class BarberoModule {}
