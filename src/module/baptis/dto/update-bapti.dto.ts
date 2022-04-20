import { PartialType } from '@nestjs/swagger';
import { CreateBaptiDto } from './create-bapti.dto';

export class UpdateBaptiDto extends PartialType(CreateBaptiDto) {}
