import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IbadahMingguService } from './ibadah_minggu.service';
import { CreateIbadahMingguDto } from './dto/create-ibadah_minggu.dto';
import { UpdateIbadahMingguDto } from './dto/update-ibadah_minggu.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ibadah-minggu')
@Controller('ibadah-minggu')
export class IbadahMingguController {
  constructor(private readonly ibadahMingguService: IbadahMingguService) {}

  @Post()
  create(@Body() createIbadahMingguDto: CreateIbadahMingguDto) {
    return this.ibadahMingguService.create(createIbadahMingguDto);
  }

  @Get()
  findAll() {
    return this.ibadahMingguService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ibadahMingguService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIbadahMingguDto: UpdateIbadahMingguDto) {
    return this.ibadahMingguService.update(+id, updateIbadahMingguDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ibadahMingguService.remove(+id);
  }
}
