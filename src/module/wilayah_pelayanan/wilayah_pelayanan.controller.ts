import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WilayahPelayananService } from './wilayah_pelayanan.service';
import { CreateWilayahPelayananDto } from './dto/create-wilayah_pelayanan.dto';
import { UpdateWilayahPelayananDto } from './dto/update-wilayah_pelayanan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wilayah-pelayanan')
@Controller('wilayah-pelayanan')
export class WilayahPelayananController {
  constructor(private readonly wilayahPelayananService: WilayahPelayananService) {}

  @Post()
  create(@Body() createWilayahPelayananDto: CreateWilayahPelayananDto) {
    return this.wilayahPelayananService.create(createWilayahPelayananDto);
  }

  @Get()
  findAll() {
    return this.wilayahPelayananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wilayahPelayananService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWilayahPelayananDto: UpdateWilayahPelayananDto,
  ) {
    return this.wilayahPelayananService.update(+id, updateWilayahPelayananDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wilayahPelayananService.remove(+id);
  }
}
