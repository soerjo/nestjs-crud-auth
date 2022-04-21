import { forwardRef, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/util/dto/page.dto';
import { PageMetaDto } from 'src/util/dto/pageMeta.dto';
import { PageOptionsDto } from 'src/util/dto/pageOptions.dto';
import { Repository } from 'typeorm';
import { JemaatService } from '../jemaat/jemaat.service';
import { CreateBlesscomnDto } from './dto/create-blesscomn.dto';
import { UpdateBlesscomnDto } from './dto/update-blesscomn.dto';
import { Blesscomn } from './entities/blesscomn.entity';

@Injectable()
export class BlesscomnService {
  constructor(
    @InjectRepository(Blesscomn, 'DB_MYSQL')
    private blesscomnRepo: Repository<Blesscomn>,

    @Inject(forwardRef(() => JemaatService))
    private jemaatService: JemaatService,
  ) {}

  create(createBlesscomnDto: CreateBlesscomnDto) {
    return 'This action adds a new blesscomn';
  }

  async getAllBlesscomn(pageOptions: PageOptionsDto) {
    const { order, name, skip, take } = pageOptions;
    const queryBuilder = this.blesscomnRepo.createQueryBuilder('blesscomn');

    queryBuilder.orderBy('blesscomn.createdAt', order).skip(skip).take(take);
    if (name) {
      queryBuilder.where('blesscomn.name like :name', { name: `%${name}%` });
    }

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ pageOptions, itemCount });
    return new PageDto(entities, pageMetaDto);
  }

  async getByName(name: string) {
    return await this.blesscomnRepo.findOne({ name });
  }

  findOne(id: number) {
    return `This action returns a #${id} blesscomn`;
  }

  async getOneBcByName(name: string) {
    return await this.blesscomnRepo.findOne({ name });
  }

  update(id: number, updateBlesscomnDto: UpdateBlesscomnDto) {
    return `This action updates a #${id} blesscomn`;
  }

  remove(id: number) {
    return `This action removes a #${id} blesscomn`;
  }
}
