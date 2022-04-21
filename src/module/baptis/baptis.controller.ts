import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { BaptisService } from './baptis.service';
import { CreateBaptisDto } from './dto/create-baptis.dto';
import { UpdateBaptisDto } from './dto/update-baptis.dto';

@ApiTags('baptis')
@Controller('baptis')
export class BaptisController {
  constructor(private readonly baptisService: BaptisService) {}

  @Post()
  create(@Body() createBaptisDto: CreateBaptisDto) {
    return this.baptisService.create(createBaptisDto);
  }

  @Get()
  findAll(@Query() query: PageOptionsDto) {
    return this.baptisService.getAllBaptisan(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baptisService.getOneBaptisData(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaptisDto: UpdateBaptisDto) {
    return this.baptisService.updateBaptisData(id, updateBaptisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baptisService.removeBaptisData(id);
  }
}
