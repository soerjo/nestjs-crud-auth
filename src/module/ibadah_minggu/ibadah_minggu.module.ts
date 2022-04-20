import { Module } from '@nestjs/common';
import { IbadahMingguService } from './ibadah_minggu.service';
import { IbadahMingguController } from './ibadah_minggu.controller';
import { IbadahMinggu } from './entities/ibadah_minggu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IbadahMinggu], 'DB_MYSQL')],
  controllers: [IbadahMingguController],
  providers: [IbadahMingguService],
})
export class IbadahMingguModule {}
