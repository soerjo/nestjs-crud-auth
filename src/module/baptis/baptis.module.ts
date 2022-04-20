import { Module } from '@nestjs/common';
import { BaptisService } from './baptis.service';
import { BaptisController } from './baptis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaptisEntity } from './entities/bapti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BaptisEntity], 'DB_MYSQL')],
  controllers: [BaptisController],
  providers: [BaptisService],
})
export class BaptisModule {}
