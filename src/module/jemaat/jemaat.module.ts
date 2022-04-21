import { forwardRef, Module } from '@nestjs/common';
import { JemaatService } from './jemaat.service';
import { JemaatController } from './jemaat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JemaatEntity } from './entities/jemaat.entity';
import { KelompokMuridService } from '../kelompok_murid/kelompok_murid.service';
import { KelompokMuridModule } from '../kelompok_murid/kelompok_murid.module';
import { WilayahPelayananModule } from '../wilayah_pelayanan/wilayah_pelayanan.module';
import { BlesscomnModule } from '../blesscomn/blesscomn.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JemaatEntity], 'DB_MYSQL'),
    forwardRef(() => BlesscomnModule),
    forwardRef(() => WilayahPelayananModule),
  ],
  controllers: [JemaatController],
  providers: [JemaatService],
  exports: [JemaatService],
})
export class JemaatModule {}
