import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { BlesscomnService } from './blesscomn.service';
import { CreateBlesscomnDto } from './dto/create-blesscomn.dto';
import { UpdateBlesscomnDto } from './dto/update-blesscomn.dto';

@ApiTags('blesscomn')
@Controller('blesscomn')
export class BlesscomnController {
  constructor(private readonly blesscomnService: BlesscomnService) {}

  @Post()
  create(@Body() createBlesscomnDto: CreateBlesscomnDto) {
    return this.blesscomnService.create(createBlesscomnDto);
  }

  @Get()
  findAll(@Query() pageOptions: PageOptionsDto) {
    return this.blesscomnService.getAllBlesscomn(pageOptions);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blesscomnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlesscomnDto: UpdateBlesscomnDto) {
    return this.blesscomnService.update(+id, updateBlesscomnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blesscomnService.remove(+id);
  }
}
