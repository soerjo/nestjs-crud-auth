import { PartialType } from '@nestjs/swagger';
import { CreateIbadahMingguDto } from './create-ibadah_minggu.dto';

export class UpdateIbadahMingguDto extends PartialType(CreateIbadahMingguDto) {}
