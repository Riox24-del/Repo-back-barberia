import { Test, TestingModule } from '@nestjs/testing';
import { BarberoController } from './barbero.controller';
import { BarberoService } from './barbero.service';

describe('BarberoController', () => {
  let controller: BarberoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarberoController],
      providers: [BarberoService],
    }).compile();

    controller = module.get<BarberoController>(BarberoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
