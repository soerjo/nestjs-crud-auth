import { PartialType } from '@nestjs/swagger';
import { CreateWilayahPelayananDto } from './create-wilayah_pelayanan.dto';

export class UpdateWilayahPelayananDto extends PartialType(CreateWilayahPelayananDto) {}
