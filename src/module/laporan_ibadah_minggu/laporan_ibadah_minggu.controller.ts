import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaporanIbadahMingguService } from './laporan_ibadah_minggu.service';
import { CreateLaporanIbadahMingguDto } from './dto/create-laporan_ibadah_minggu.dto';
import { UpdateLaporanIbadahMingguDto } from './dto/update-laporan_ibadah_minggu.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('laporan-ibadah-minggu')
@Controller('laporan-ibadah-minggu')
export class LaporanIbadahMingguController {
  constructor(private readonly laporanIbadahMingguService: LaporanIbadahMingguService) {}

  @Post()
  create(@Body() createLaporanIbadahMingguDto: CreateLaporanIbadahMingguDto) {
    return this.laporanIbadahMingguService.create(createLaporanIbadahMingguDto);
  }

  @Get()
  findAll() {
    return this.laporanIbadahMingguService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laporanIbadahMingguService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaporanIbadahMingguDto: UpdateLaporanIbadahMingguDto,
  ) {
    return this.laporanIbadahMingguService.update(+id, updateLaporanIbadahMingguDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laporanIbadahMingguService.remove(+id);
  }
}
