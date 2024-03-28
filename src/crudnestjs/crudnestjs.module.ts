import { Module } from '@nestjs/common';
import { CrudnestjsService } from './crudnestjs.service';
import { CrudnestjsController } from './crudnestjs.controller';

@Module({
  controllers: [CrudnestjsController],
  providers: [CrudnestjsService],
})
export class CrudnestjsModule {}
