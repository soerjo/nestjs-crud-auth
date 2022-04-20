import { Injectable } from '@nestjs/common';
import { CreateLaporanIbadahMingguDto } from './dto/create-laporan_ibadah_minggu.dto';
import { UpdateLaporanIbadahMingguDto } from './dto/update-laporan_ibadah_minggu.dto';

@Injectable()
export class LaporanIbadahMingguService {
  create(createLaporanIbadahMingguDto: CreateLaporanIbadahMingguDto) {
    return 'This action adds a new laporanIbadahMinggu';
  }

  findAll() {
    return `This action returns all laporanIbadahMinggu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laporanIbadahMinggu`;
  }

  update(id: number, updateLaporanIbadahMingguDto: UpdateLaporanIbadahMingguDto) {
    return `This action updates a #${id} laporanIbadahMinggu`;
  }

  remove(id: number) {
    return `This action removes a #${id} laporanIbadahMinggu`;
  }
}
