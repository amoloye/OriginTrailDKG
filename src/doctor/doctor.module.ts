import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { PersonModule } from '../person/person.module';
import { DoctorService } from './doctor.service';

@Module({
  providers: [DoctorService],
  exports: [DoctorService],
  imports: [PersonModule],
  controllers: [DoctorController],
})
export class DoctorModule {}
