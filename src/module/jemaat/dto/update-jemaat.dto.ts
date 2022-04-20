import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateJemaatDto } from './create-jemaat.dto';

export class UpdateJemaatDto extends PartialType(CreateJemaatDto) {
  @ApiProperty()
  @IsString()
  blesscomn?: string;

  @ApiProperty()
  @IsString()
  wilayah_pelayanan?: string;

  @ApiProperty()
  @IsString()
  kelompok_murid?: string;

  @ApiProperty()
  @IsString()
  baptis?: string;
}
