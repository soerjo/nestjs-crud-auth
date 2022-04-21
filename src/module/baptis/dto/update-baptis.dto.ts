import { PartialType } from '@nestjs/swagger';
import { CreateBaptisDto } from './create-baptis.dto';

export class UpdateBaptisDto extends PartialType(CreateBaptisDto) {}
