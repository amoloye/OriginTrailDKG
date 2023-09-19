import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from './schemas/doctor.schema';

@Module({
  providers: [DoctorService],
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),
  ],
  controllers: [DoctorController],
})
export class DoctorModule {}
