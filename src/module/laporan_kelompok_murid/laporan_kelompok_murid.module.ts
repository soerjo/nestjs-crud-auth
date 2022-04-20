import { Module } from '@nestjs/common';
import { LaporanKelompokMuridService } from './laporan_kelompok_murid.service';
import { LaporanKelompokMuridController } from './laporan_kelompok_murid.controller';
import { LaporanKelompokMurid } from './entities/laporan_kelompok_murid.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LaporanKelompokMurid], 'DB_MYSQL')],
  controllers: [LaporanKelompokMuridController],
  providers: [LaporanKelompokMuridService],
})
export class LaporanKelompokMuridModule {}
