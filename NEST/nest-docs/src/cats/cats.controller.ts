import {
  Controller,
  Get,
  Post,
  Body,
  ForbiddenException,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { HttpExceptionFilter } from '../http-exception.filter';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
    // throw new ForbiddenException();
  }
}
