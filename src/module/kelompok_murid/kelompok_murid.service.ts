import { Injectable } from '@nestjs/common';
import { CreateKelompokMuridDto } from './dto/create-kelompok_murid.dto';
import { UpdateKelompokMuridDto } from './dto/update-kelompok_murid.dto';

@Injectable()
export class KelompokMuridService {
  create(createKelompokMuridDto: CreateKelompokMuridDto) {
    return 'This action adds a new kelompokMurid';
  }

  findAll() {
    return `This action returns all kelompokMurid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kelompokMurid`;
  }

  update(id: number, updateKelompokMuridDto: UpdateKelompokMuridDto) {
    return `This action updates a #${id} kelompokMurid`;
  }

  remove(id: number) {
    return `This action removes a #${id} kelompokMurid`;
  }
}
