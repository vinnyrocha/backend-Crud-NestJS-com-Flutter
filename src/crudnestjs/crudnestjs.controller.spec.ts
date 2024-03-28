import { Test, TestingModule } from '@nestjs/testing';
import { CrudnestjsController } from './crudnestjs.controller';
import { CrudnestjsService } from './crudnestjs.service';

describe('CrudnestjsController', () => {
  let controller: CrudnestjsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudnestjsController],
      providers: [CrudnestjsService],
    }).compile();

    controller = module.get<CrudnestjsController>(CrudnestjsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
