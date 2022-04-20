import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';
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

  @ApiProperty({ enum: Gender })
  @IsString()
  jenis_kelamin: Gender = Gender.LAKI_LAKI;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  umur: number;

  @ApiProperty({ enum: Role })
  @IsString()
  role?: Role = Role.JEMAAT;

  @ApiProperty()
  @IsDateString()
  @Type(() => Date)
  @IsNotEmpty()
  tanggal_lahir: Date;

  @ApiProperty()
  @IsDateString()
  @Type(() => Date)
  tempat_lahir?: string;

  @ApiProperty()
  @IsString()
  alamat?: string;

  @ApiProperty()
  @IsDateString()
  @Type(() => Date)
  tanggal_lahir_baru?: Date;
}
