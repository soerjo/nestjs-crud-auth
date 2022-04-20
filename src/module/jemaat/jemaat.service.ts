import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';
import { CreateJemaatDto } from './dto/create-jemaat.dto';
import { UpdateJemaatDto } from './dto/update-jemaat.dto';
import { JemaatEntity } from './entities/jemaat.entity';

@Injectable()
export class JemaatService {
  constructor(
    @InjectRepository(JemaatEntity, 'DB_MYSQL')
    private readonly jemaatRepo: Repository<JemaatEntity>,
  ) {}

  async createJemaat(createJemaatDto: CreateJemaatDto) {
    try {
      return await this.jemaatRepo.save(createJemaatDto);
    } catch (error) {
      if (error instanceof TypeORMError) {
        return error.message;
      }

      throw new InternalServerErrorException(error);
    }
  }

  async getJemaat() {
    return await this.jemaatRepo.find();
  }

  async getJemaatById(id: string) {
    return await this.jemaatRepo.findOne(id);
  }

  async updateJemaat(id: string, updateJemaatDto: UpdateJemaatDto) {
    const jemaat = await this.getJemaatById(id);
    if (!jemaat) return 'jemaat is not found, can not update data!';

    return await this.jemaatRepo.save({});
  }

  async removeJemaat(id: string) {
    const jemaat = await this.getJemaatById(id);
    if (!jemaat) return 'jemaat is not found, can not delete data!';

    return await this.jemaatRepo.remove(jemaat);
  }
}
