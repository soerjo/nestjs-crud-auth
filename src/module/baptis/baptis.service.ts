import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/util/dto/page.dto';
import { PageMetaDto } from 'src/util/dto/pageMeta.dto';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { Repository } from 'typeorm';
import { JemaatService } from '../jemaat/jemaat.service';
import { CreateBaptisDto } from './dto/create-baptis.dto';
import { UpdateBaptisDto } from './dto/update-baptis.dto';
import { BaptisEntity } from './entities/bapti.entity';

@Injectable()
export class BaptisService {
  constructor(
    @InjectRepository(BaptisEntity, 'DB_MYSQL')
    private baptisRepo: Repository<BaptisEntity>,
    private jemaatService: JemaatService,
  ) {}

  async create(createBaptisDto: CreateBaptisDto) {
    const { nama } = createBaptisDto;
    const newBaptisData = this.baptisRepo.create({ ...createBaptisDto });
    const jemaatData = await this.jemaatService.getByName(nama);

    const checkDuplicate = await this.getOneBaptisByName(jemaatData.nama_lengkap);
    if (!jemaatData) throw new BadRequestException(`jemaat with name: ${nama} is not found!`);
    if (checkDuplicate)
      throw new BadRequestException(`can not duplicate data! name: ${nama} has regirted`);

    newBaptisData.jemaat = jemaatData;

    return await this.baptisRepo.save({ ...newBaptisData });
  }

  async getAllBaptisan(pageOptions: PageOptionsDto) {
    const { order, name, skip, take } = pageOptions;
    const queryBuilder = this.baptisRepo.createQueryBuilder('baptis');

    queryBuilder
      .orderBy('baptis.createdAt', order)
      .leftJoin('baptis.jemaat', 'jemaat')
      .addSelect('jemaat.nama_lengkap')
      .skip(skip)
      .take(take);

    if (name) {
      queryBuilder.where('jemaat.nama_lengkap like :name', { name: `%${name}%` });
    }

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ pageOptions, itemCount });
    return new PageDto(entities, pageMetaDto);
  }

  async getOneBaptisData(id: string) {
    const queryBuilder = this.baptisRepo.createQueryBuilder('baptis');

    queryBuilder
      .where('baptis.id = :id', { id })
      .leftJoin('baptis.jemaat', 'jemaat')
      .addSelect('jemaat.nama_lengkap');

    return await queryBuilder.getOne();
  }

  async getOneBaptisByName(name: string) {
    const queryBuilder = this.baptisRepo.createQueryBuilder('baptis');
    queryBuilder.leftJoin('baptis.jemaat', 'jemaat').where('jemaat.nama_lengkap = :name', { name });

    return await queryBuilder.getOne();
  }

  async updateBaptisData(id: string, updateBaptisDto: UpdateBaptisDto) {
    const { nama } = updateBaptisDto;
    const baptisData = await this.getOneBaptisData(id);
    if (!baptisData)
      throw new BadRequestException(`can not update! baptis data id: ${id} is not found!`);
    const jemaatData = await this.jemaatService.getByName(nama);

    const checkDuplicate = await this.getOneBaptisByName(jemaatData.nama_lengkap);
    if (!jemaatData) throw new BadRequestException(`jemaat with name: ${nama} is not found!`);
    if (checkDuplicate)
      throw new BadRequestException(`can not duplicate data! name: ${nama} has regirted`);

    baptisData.jemaat = jemaatData;

    return await this.baptisRepo.save({ ...baptisData });
  }

  async removeBaptisData(id: string) {
    const baptisData = await this.getOneBaptisData(id);
    if (!baptisData) throw new BadRequestException(`can not update baptis data with id: ${id}`);

    await this.baptisRepo.remove(baptisData);

    return {
      status: 200,
      message: `data baptis id: ${id}, has deleted!`,
      data: {
        nama: baptisData.jemaat.nama_lengkap,
        tanggal_baptis: baptisData.waktu,
      },
    };
  }
}
