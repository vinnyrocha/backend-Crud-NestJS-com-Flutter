import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudnestjsModule } from './crudnestjs/crudnestjs.module';

@Module({
  imports: [CrudnestjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
