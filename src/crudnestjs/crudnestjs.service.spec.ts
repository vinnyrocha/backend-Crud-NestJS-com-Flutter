import { Test, TestingModule } from '@nestjs/testing';
import { CrudnestjsService } from './crudnestjs.service';

describe('CrudnestjsService', () => {
  let service: CrudnestjsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudnestjsService],
    }).compile();

    service = module.get<CrudnestjsService>(CrudnestjsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
