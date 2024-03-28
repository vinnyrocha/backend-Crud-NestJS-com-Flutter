import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudnestjDto } from './create-crudnestj.dto';

export class UpdateCrudnestjDto extends PartialType(CreateCrudnestjDto) {}
