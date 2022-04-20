import { PartialType } from '@nestjs/swagger';
import { CreateLaporanKelompokMuridDto } from './create-laporan_kelompok_murid.dto';

export class UpdateLaporanKelompokMuridDto extends PartialType(CreateLaporanKelompokMuridDto) {}
