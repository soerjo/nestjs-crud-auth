import { Module } from '@nestjs/common';
import { WilayahPelayananService } from './wilayah_pelayanan.service';
import { WilayahPelayananController } from './wilayah_pelayanan.controller';
import { WilayahPelayanan } from './entities/wilayah_pelayanan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WilayahPelayanan], 'DB_MYSQL')],
  controllers: [WilayahPelayananController],
  providers: [WilayahPelayananService],
})
export class WilayahPelayananModule {}
