import { Injectable } from '@nestjs/common';
import { CreateWilayahPelayananDto } from './dto/create-wilayah_pelayanan.dto';
import { UpdateWilayahPelayananDto } from './dto/update-wilayah_pelayanan.dto';

@Injectable()
export class WilayahPelayananService {
  create(createWilayahPelayananDto: CreateWilayahPelayananDto) {
    return 'This action adds a new wilayahPelayanan';
  }

  findAll() {
    return `This action returns all wilayahPelayanan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wilayahPelayanan`;
  }

  update(id: number, updateWilayahPelayananDto: UpdateWilayahPelayananDto) {
    return `This action updates a #${id} wilayahPelayanan`;
  }

  remove(id: number) {
    return `This action removes a #${id} wilayahPelayanan`;
  }
}
