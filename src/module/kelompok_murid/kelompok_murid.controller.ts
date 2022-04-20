import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KelompokMuridService } from './kelompok_murid.service';
import { CreateKelompokMuridDto } from './dto/create-kelompok_murid.dto';
import { UpdateKelompokMuridDto } from './dto/update-kelompok_murid.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kelompok-murid')
@Controller('kelompok-murid')
export class KelompokMuridController {
  constructor(private readonly kelompokMuridService: KelompokMuridService) {}

  @Post()
  create(@Body() createKelompokMuridDto: CreateKelompokMuridDto) {
    return this.kelompokMuridService.create(createKelompokMuridDto);
  }

  @Get()
  findAll() {
    return this.kelompokMuridService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kelompokMuridService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKelompokMuridDto: UpdateKelompokMuridDto,
  ) {
    return this.kelompokMuridService.update(+id, updateKelompokMuridDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kelompokMuridService.remove(+id);
  }
}
