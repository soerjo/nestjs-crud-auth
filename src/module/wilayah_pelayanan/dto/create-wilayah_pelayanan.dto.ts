import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWilayahPelayananDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_wilayah_pelayanan: string;

  @ApiPropertyOptional()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  namaBlessComn: string[];
}
