import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity, 'DB_POSTGRES')
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      return await this.userRepo.save(createUserDto);
    } catch (error) {
      if (error instanceof TypeORMError) {
        return error.message;
      }

      throw new InternalServerErrorException(error);
    }
  }

  async getUser() {
    return await this.userRepo.find();
  }

  async getUserById(id: string) {
    return await this.userRepo.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const jemaat = await this.getUserById(id);
    if (!jemaat) return 'jemaat is not found, can not update data!';

    return await this.userRepo.save({ ...updateUserDto, id });
  }

  async remove(id: string) {
    const jemaat = await this.getUserById(id);
    if (!jemaat) return 'jemaat is not found, can not delete data!';

    return await this.userRepo.remove(jemaat);
  }
}
