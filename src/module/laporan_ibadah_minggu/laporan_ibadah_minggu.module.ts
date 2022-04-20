import { Module } from '@nestjs/common';
import { LaporanIbadahMingguService } from './laporan_ibadah_minggu.service';
import { LaporanIbadahMingguController } from './laporan_ibadah_minggu.controller';
import { LaporanIbadahMinggu } from './entities/laporan_ibadah_minggu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LaporanIbadahMinggu], 'DB_MYSQL')],
  controllers: [LaporanIbadahMingguController],
  providers: [LaporanIbadahMingguService],
})
export class LaporanIbadahMingguModule {}
