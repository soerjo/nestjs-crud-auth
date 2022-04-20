import { Injectable } from '@nestjs/common';
import { CreateIbadahMingguDto } from './dto/create-ibadah_minggu.dto';
import { UpdateIbadahMingguDto } from './dto/update-ibadah_minggu.dto';

@Injectable()
export class IbadahMingguService {
  create(createIbadahMingguDto: CreateIbadahMingguDto) {
    return 'This action adds a new ibadahMinggu';
  }

  findAll() {
    return `This action returns all ibadahMinggu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ibadahMinggu`;
  }

  update(id: number, updateIbadahMingguDto: UpdateIbadahMingguDto) {
    return `This action updates a #${id} ibadahMinggu`;
  }

  remove(id: number) {
    return `This action removes a #${id} ibadahMinggu`;
  }
}
