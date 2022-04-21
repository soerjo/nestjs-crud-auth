import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { PageDto } from 'src/util/dto/page.dto';
import { PageMetaDto } from 'src/util/dto/pageMeta.dto';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { Repository } from 'typeorm';
import { BlesscomnService } from '../blesscomn/blesscomn.service';
import { Blesscomn } from '../blesscomn/entities/blesscomn.entity';
import { CreateWilayahPelayananDto } from './dto/create-wilayah_pelayanan.dto';
import { UpdateWilayahPelayananDto } from './dto/update-wilayah_pelayanan.dto';
import { WilayahPelayanan } from './entities/wilayah_pelayanan.entity';

@Injectable()
export class WilayahPelayananService {
  constructor(
    @InjectRepository(WilayahPelayanan, 'DB_MYSQL')
    private readonly wilpelayananRepo: Repository<WilayahPelayanan>,
    private readonly blesscomnService: BlesscomnService,
  ) {}

  async createWilPelayanan(createWilayahPelayananDto: CreateWilayahPelayananDto) {
    const { namaBlessComn, nama_wilayah_pelayanan } = createWilayahPelayananDto;

    const checkDuplicateData = this.getByName(nama_wilayah_pelayanan);
    if (checkDuplicateData)
      throw new BadRequestException(`duplicate data with name: ${nama_wilayah_pelayanan}`);

    const blesscomn: Blesscomn[] = [];
    for (const name of namaBlessComn) {
      const dataBc = await this.blesscomnService.getByName(name);
      if (dataBc) blesscomn.push(dataBc);
    }

    const createWilPelayanan = this.wilpelayananRepo.create({ nama_wilayah_pelayanan });
    createWilPelayanan.blesscomn = blesscomn;

    return await this.wilpelayananRepo.save(createWilPelayanan);
  }

  async getAllWilPelayanan(pageOptions: PageOptionsDto) {
    const { order, name, skip, take } = pageOptions;
    const queryBuilder = this.wilpelayananRepo.createQueryBuilder('wilayah');

    queryBuilder.orderBy('wilayah.createdAt', order).skip(skip).take(take);
    if (name) {
      queryBuilder.where('wilayah.nama_wilayah_pelayanan like :name', { name: `%${name}%` });
    }

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ pageOptions, itemCount });
    return new PageDto(entities, pageMetaDto);
  }

  async getByName(name: string) {
    return await this.wilpelayananRepo.findOne({ nama_wilayah_pelayanan: name });
  }

  async getByIdWilayah(id: string) {
    return await this.wilpelayananRepo.findOne(id);
  }

  async update(id: string, updateWilayahPelayananDto: UpdateWilayahPelayananDto) {
    const wilayah = await this.getByIdWilayah(id);
    if (!wilayah) throw new BadRequestException(`wilaya id: ${id} is not found`);

    return await this.wilpelayananRepo.save({ ...updateWilayahPelayananDto, id });
  }

  async remove(id: string) {
    const wilayah = await this.getByIdWilayah(id);
    if (!wilayah) throw new BadRequestException(`wilaya id: ${id} is not found`);

    await this.wilpelayananRepo.remove(wilayah);
  }
}
