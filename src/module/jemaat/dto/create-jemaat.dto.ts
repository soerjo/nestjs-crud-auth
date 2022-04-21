import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Gender, Role } from '../interfaces/jemaat.interface';

export class CreateJemaatDto {
  id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_lengkap: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_panggilan: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ enum: Gender })
  @IsString()
  @IsOptional()
  jenis_kelamin: Gender = Gender.LAKI_LAKI;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  umur: number;

  @ApiProperty({ enum: Role })
  @IsString()
  @IsOptional()
  role: Role = Role.JEMAAT;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  tanggal_lahir: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  tempat_lahir?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  alamat?: string;

  @ApiProperty()
  @IsDateString()
  @Type(() => Date)
  @IsOptional()
  tanggal_lahir_baru?: Date;
}
