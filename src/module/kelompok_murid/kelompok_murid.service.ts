import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKelompokMuridDto } from './dto/create-kelompok_murid.dto';
import { UpdateKelompokMuridDto } from './dto/update-kelompok_murid.dto';
import { KelompokMurid } from './entities/kelompok_murid.entity';

@Injectable()
export class KelompokMuridService {
  constructor(
    @InjectRepository(KelompokMurid, 'DB_MYSQL')
    private readonly kelMuridRepo: Repository<KelompokMurid>,
  ) {}

  create(createKelompokMuridDto: CreateKelompokMuridDto) {
    return 'This action adds a new kelompokMurid';
  }

  findAll() {
    return `This action returns all kelompokMurid`;
  }

  async getByName(name: string) {
    const queryBuilder = this.kelMuridRepo.createQueryBuilder('kelMurid');
    queryBuilder.where('kelMurid.nama_kelompok_murid LIKE :name ', { name });

    return await queryBuilder.getMany();
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
