import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudnestjsService } from './crudnestjs.service';
import { CreateCrudnestjDto } from './dto/create-crudnestj.dto';
import { UpdateCrudnestjDto } from './dto/update-crudnestj.dto';

@Controller('crudnestjs')
export class CrudnestjsController {
  constructor(private readonly crudnestjsService: CrudnestjsService) {}

  @Post()
  create(@Body() createCrudnestjDto: CreateCrudnestjDto) {
    return this.crudnestjsService.create(createCrudnestjDto);
  }

  @Get()
  findAll() {
    return this.crudnestjsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudnestjsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudnestjDto: UpdateCrudnestjDto) {
    return this.crudnestjsService.update(+id, updateCrudnestjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudnestjsService.remove(+id);
  }
}
