import { Injectable } from '@nestjs/common';
import { CreateLaporanKelompokMuridDto } from './dto/create-laporan_kelompok_murid.dto';
import { UpdateLaporanKelompokMuridDto } from './dto/update-laporan_kelompok_murid.dto';

@Injectable()
export class LaporanKelompokMuridService {
  create(createLaporanKelompokMuridDto: CreateLaporanKelompokMuridDto) {
    return 'This action adds a new laporanKelompokMurid';
  }

  findAll() {
    return `This action returns all laporanKelompokMurid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laporanKelompokMurid`;
  }

  update(id: number, updateLaporanKelompokMuridDto: UpdateLaporanKelompokMuridDto) {
    return `This action updates a #${id} laporanKelompokMurid`;
  }

  remove(id: number) {
    return `This action removes a #${id} laporanKelompokMurid`;
  }
}
