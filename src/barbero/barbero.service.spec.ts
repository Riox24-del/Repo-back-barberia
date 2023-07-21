import { Test, TestingModule } from '@nestjs/testing';
import { BarberoService } from './barbero.service';

describe('BarberoService', () => {
  let service: BarberoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarberoService],
    }).compile();

    service = module.get<BarberoService>(BarberoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
