import { forwardRef, Module } from '@nestjs/common';
import { BaptisService } from './baptis.service';
import { BaptisController } from './baptis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaptisEntity } from './entities/bapti.entity';
import { JemaatModule } from '../jemaat/jemaat.module';

@Module({
  imports: [TypeOrmModule.forFeature([BaptisEntity], 'DB_MYSQL'), JemaatModule],
  controllers: [BaptisController],
  providers: [BaptisService],
})
export class BaptisModule {}
