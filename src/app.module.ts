import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users/users.module';

import { DbMysql } from 'src/db/dbMysql';
import { JemaatModule } from './module/jemaat/jemaat.module';
import { DbPostgres } from './db/dbPostgres';
import { WilayahPelayananModule } from './module/wilayah_pelayanan/wilayah_pelayanan.module';
import { BlesscomnModule } from './module/blesscomn/blesscomn.module';
import { IbadahMingguModule } from './module/ibadah_minggu/ibadah_minggu.module';
import { LaporanIbadahMingguModule } from './module/laporan_ibadah_minggu/laporan_ibadah_minggu.module';
import { KelompokMuridModule } from './module/kelompok_murid/kelompok_murid.module';
import { LaporanKelompokMuridModule } from './module/laporan_kelompok_murid/laporan_kelompok_murid.module';
import { BaptisModule } from './module/baptis/baptis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ name: 'DB_MYSQL', useClass: DbMysql }),
    TypeOrmModule.forRootAsync({ name: 'DB_POSTGRES', useClass: DbPostgres }),
    BlesscomnModule,
    WilayahPelayananModule,
    UsersModule,
    JemaatModule,
    BaptisModule,
    // IbadahMingguModule,
    // LaporanIbadahMingguModule,
    // KelompokMuridModule,
    // LaporanKelompokMuridModule,
  ],
})
export class AppModule {}
