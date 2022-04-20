import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JemaatService } from './jemaat.service';
import { CreateJemaatDto } from './dto/create-jemaat.dto';
import { UpdateJemaatDto } from './dto/update-jemaat.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jemaat')
@Controller('jemaat')
export class JemaatController {
  constructor(private readonly jemaatService: JemaatService) {}

  @Post()
  create(@Body() createJemaatDto: CreateJemaatDto) {
    return this.jemaatService.createJemaat(createJemaatDto);
  }

  @Get()
  findAll() {
    return this.jemaatService.getJemaat();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jemaatService.getJemaatById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJemaatDto: UpdateJemaatDto) {
    return this.jemaatService.updateJemaat(id, updateJemaatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jemaatService.removeJemaat(id);
  }
}
