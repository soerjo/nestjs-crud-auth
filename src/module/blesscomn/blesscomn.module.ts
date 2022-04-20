import { Module } from '@nestjs/common';
import { BlesscomnService } from './blesscomn.service';
import { BlesscomnController } from './blesscomn.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blesscomn } from './entities/blesscomn.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blesscomn], 'DB_MYSQL')],
  controllers: [BlesscomnController],
  providers: [BlesscomnService],
})
export class BlesscomnModule {}
