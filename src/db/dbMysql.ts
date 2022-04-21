import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { BaptisEntity } from 'src/module/baptis/entities/bapti.entity';
import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';
import { Blesscomn } from 'src/module/blesscomn/entities/blesscomn.entity';
import { IbadahMinggu } from 'src/module/ibadah_minggu/entities/ibadah_minggu.entity';
import { KelompokMurid } from 'src/module/kelompok_murid/entities/kelompok_murid.entity';
import { LaporanIbadahMinggu } from 'src/module/laporan_ibadah_minggu/entities/laporan_ibadah_minggu.entity';
import { LaporanKelompokMurid } from 'src/module/laporan_kelompok_murid/entities/laporan_kelompok_murid.entity';
import { WilayahPelayanan } from 'src/module/wilayah_pelayanan/entities/wilayah_pelayanan.entity';

export class DbMysql implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'DB_MYSQL',
      type: 'mysql',
      port: +process.env.SERVER_DB_MYSQL_PORT || 3306,
      username: process.env.SERVER_DB_MYSQL_USERNAME,
      password: process.env.SERVER_DB_MYSQL_PASSWORD,
      database: process.env.SERVER_DB_MYSQL_DATABASE,
      entities: [
        JemaatEntity,
        BaptisEntity,
        WilayahPelayanan,
        Blesscomn,
        // IbadahMinggu,
        // KelompokMurid,
        // LaporanKelompokMurid,
        // LaporanIbadahMinggu,
      ],
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    };
  }
}
