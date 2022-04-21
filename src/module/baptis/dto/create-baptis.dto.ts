import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDateString, IsDate, IsOptional } from 'class-validator';

export class CreateBaptisDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  waktu: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_ayah: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_ibu: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  alamat_ortu: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  saksi01: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  saksi02: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  surat_baptis?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dibaptis_oleh: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama: string;
}
