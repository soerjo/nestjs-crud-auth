import { PartialType } from '@nestjs/swagger';
import { CreateKelompokMuridDto } from './create-kelompok_murid.dto';

export class UpdateKelompokMuridDto extends PartialType(CreateKelompokMuridDto) {}
