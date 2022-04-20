import { Module } from '@nestjs/common';
import { JemaatService } from './jemaat.service';
import { JemaatController } from './jemaat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JemaatEntity } from './entities/jemaat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JemaatEntity], 'DB_MYSQL')],
  controllers: [JemaatController],
  providers: [JemaatService],
})
export class JemaatModule {}
