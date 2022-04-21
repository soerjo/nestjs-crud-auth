import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/util/dto/page.dto';
import { PageMetaDto } from 'src/util/dto/pageMeta.dto';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { Repository, TypeORMError } from 'typeorm';
import { BaptisEntity } from '../baptis/entities/bapti.entity';
import { BlesscomnService } from '../blesscomn/blesscomn.service';
import { KelompokMurid } from '../kelompok_murid/entities/kelompok_murid.entity';
import { KelompokMuridService } from '../kelompok_murid/kelompok_murid.service';
import { WilayahPelayananService } from '../wilayah_pelayanan/wilayah_pelayanan.service';
import { CreateJemaatDto } from './dto/create-jemaat.dto';
import { UpdateJemaatDto } from './dto/update-jemaat.dto';
import { JemaatEntity } from './entities/jemaat.entity';

@Injectable()
export class JemaatService {
  constructor(
    @InjectRepository(JemaatEntity, 'DB_MYSQL')
    private jemaatRepo: Repository<JemaatEntity>,

    @Inject(forwardRef(() => BlesscomnService))
    private blesscomnService: BlesscomnService,

    @Inject(forwardRef(() => WilayahPelayananService))
    private wilPelayananService: WilayahPelayananService,
  ) {}

  async createJemaat(createJemaatDto: CreateJemaatDto) {
    const { nama_lengkap } = createJemaatDto;
    const newJemaat = this.jemaatRepo.create({ ...createJemaatDto });

    const checkDuplicate = await this.getByName(nama_lengkap);
    if (checkDuplicate)
      throw new BadRequestException(`can not duplicate data! name: ${nama_lengkap} has registed`);

    return await this.jemaatRepo.save(newJemaat);
  }

  async getAllJemaat(pageOptions: PageOptionsDto) {
    const { order, name, skip, take } = pageOptions;
    const queryBuilder = this.jemaatRepo.createQueryBuilder('jemaat');

    queryBuilder.orderBy('jemaat.createdAt', order).skip(skip).take(take);
    if (name) {
      queryBuilder.where('jemaat.nama_lengkap like :name', { name: `%${name}%` });
    }

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ pageOptions, itemCount });
    return new PageDto(entities, pageMetaDto);
  }

  async getJemaatById(id: string) {
    return await this.jemaatRepo.findOne(id);
  }

  async getByName(name: string) {
    return await this.jemaatRepo.findOne({ nama_lengkap: name });
  }

  async updateJemaat(id: string, updateJemaatDto: UpdateJemaatDto) {
    const { blesscomn, wilayah_pelayanan, kelompok_murid } = updateJemaatDto;
    const jemaat = await this.getJemaatById(id);
    if (!jemaat) throw new BadRequestException('jemaat is not found!');

    // const blesscomnEntity = await this.blesscomnService.getByName(blesscomn);
    // const wilPelayananEntity = await this.wilPelayananService.getByName(wilayah_pelayanan);
    // const kelMuridEntity = await this.kelMuridService.getByName(kelompok_murid);

    // jemaat.blesscomn = blesscomnEntity;
    // jemaat.wilayah_pelayanan = wilPelayananEntity;
    // jemaat.kelompok_murid = [...kelMuridEntity];

    return await this.jemaatRepo.save({ ...jemaat });
  }

  async removeJemaat(id: string) {
    const jemaat = await this.getJemaatById(id);
    if (!jemaat) throw new BadRequestException(`jemaat is not found with id: ${id}`);

    await this.jemaatRepo.remove(jemaat);
  }
}
