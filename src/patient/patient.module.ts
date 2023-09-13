import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PersonModule } from '../person/person.module';
import { PatientService } from './patient.service';

@Module({
  providers: [PatientService],
  exports: [PatientService],
  imports: [PersonModule],
  controllers: [PatientController],
})
export class PatientModule {}
