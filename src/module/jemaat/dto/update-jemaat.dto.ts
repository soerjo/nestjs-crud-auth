import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateJemaatDto } from './create-jemaat.dto';

export class UpdateJemaatDto extends PartialType(CreateJemaatDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  blesscomn?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  wilayah_pelayanan?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  kelompok_murid?: string;
}
