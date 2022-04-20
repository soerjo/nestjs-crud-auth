import { PartialType } from '@nestjs/swagger';
import { CreateLaporanIbadahMingguDto } from './create-laporan_ibadah_minggu.dto';

export class UpdateLaporanIbadahMingguDto extends PartialType(CreateLaporanIbadahMingguDto) {}
