import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WilayahPelayananService } from './wilayah_pelayanan.service';
import { CreateWilayahPelayananDto } from './dto/create-wilayah_pelayanan.dto';
import { UpdateWilayahPelayananDto } from './dto/update-wilayah_pelayanan.dto';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';

@ApiTags('wilayah-pelayanan')
@Controller('wilayah-pelayanan')
export class WilayahPelayananController {
  constructor(private readonly wilayahPelayananService: WilayahPelayananService) {}

  @Post()
  create(@Body() createWilayahPelayananDto: CreateWilayahPelayananDto) {
    return this.wilayahPelayananService.createWilPelayanan(createWilayahPelayananDto);
  }

  @Get()
  findAll(@Query() pageOptions: PageOptionsDto) {
    return this.wilayahPelayananService.getAllWilPelayanan(pageOptions);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wilayahPelayananService.getByIdWilayah(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWilayahPelayananDto: UpdateWilayahPelayananDto) {
    return this.wilayahPelayananService.update(id, updateWilayahPelayananDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wilayahPelayananService.remove(id);
  }
}
