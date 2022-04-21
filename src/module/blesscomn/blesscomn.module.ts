import { forwardRef, Module } from '@nestjs/common';
import { BlesscomnService } from './blesscomn.service';
import { BlesscomnController } from './blesscomn.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blesscomn } from './entities/blesscomn.entity';
import { JemaatModule } from '../jemaat/jemaat.module';

@Module({
  imports: [TypeOrmModule.forFeature([Blesscomn], 'DB_MYSQL'), forwardRef(() => JemaatModule)],
  controllers: [BlesscomnController],
  providers: [BlesscomnService],
  exports: [BlesscomnService],
})
export class BlesscomnModule {}
