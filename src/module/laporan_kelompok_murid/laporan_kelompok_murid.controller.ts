import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaporanKelompokMuridService } from './laporan_kelompok_murid.service';
import { CreateLaporanKelompokMuridDto } from './dto/create-laporan_kelompok_murid.dto';
import { UpdateLaporanKelompokMuridDto } from './dto/update-laporan_kelompok_murid.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('laporan-kelompok-murid')
@Controller('laporan-kelompok-murid')
export class LaporanKelompokMuridController {
  constructor(
    private readonly laporanKelompokMuridService: LaporanKelompokMuridService,
  ) {}

  @Post()
  create(@Body() createLaporanKelompokMuridDto: CreateLaporanKelompokMuridDto) {
    return this.laporanKelompokMuridService.create(createLaporanKelompokMuridDto);
  }

  @Get()
  findAll() {
    return this.laporanKelompokMuridService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laporanKelompokMuridService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaporanKelompokMuridDto: UpdateLaporanKelompokMuridDto,
  ) {
    return this.laporanKelompokMuridService.update(+id, updateLaporanKelompokMuridDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laporanKelompokMuridService.remove(+id);
  }
}
