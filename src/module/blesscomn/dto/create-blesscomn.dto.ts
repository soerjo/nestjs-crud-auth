import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBlesscomnDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  leader: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  vice_leader?: string[];

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  jemaat?: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  wilayah_pelayanan: string;
}
