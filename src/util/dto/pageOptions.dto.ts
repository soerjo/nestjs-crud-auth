import { ApiProperty, ApiPropertyOptional, ApiQuery } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class PageOptionsDto {
  @ApiPropertyOptional()
  @IsEnum(Order)
  @IsOptional()
  order?: Order = Order.ASC;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  take?: number = 5;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
