import { Module } from '@nestjs/common';
import { KelompokMuridService } from './kelompok_murid.service';
import { KelompokMuridController } from './kelompok_murid.controller';
import { KelompokMurid } from './entities/kelompok_murid.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KelompokMurid], 'DB_MYSQL')],
  controllers: [KelompokMuridController],
  providers: [KelompokMuridService],
})
export class KelompokMuridModule {}
