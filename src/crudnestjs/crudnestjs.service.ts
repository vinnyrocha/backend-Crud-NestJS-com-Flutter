import { Injectable } from '@nestjs/common';
import { CreateCrudnestjDto } from './dto/create-crudnestj.dto';
import { UpdateCrudnestjDto } from './dto/update-crudnestj.dto';

@Injectable()
export class CrudnestjsService {
  create(createCrudnestjDto: CreateCrudnestjDto) {
    return 'This action adds a new crudnestj';
  }

  findAll() {
    return `This action returns all crudnestjs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudnestj`;
  }

  update(id: number, updateCrudnestjDto: UpdateCrudnestjDto) {
    return `This action updates a #${id} crudnestj`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudnestj`;
  }
}
