import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { PersonModule } from './person/person.module';
import { MedicalSpecialityModule } from './medical-speciality/medical-speciality.module';
import { MedicaldataModule } from './medicaldata/medicaldata.module';
import { MedicalDataSourceModule } from './medical-data-source/medical-data-source.module';
import { MedicalDataModule } from './medical-data/medical-data.module';
import { MedicalDataSensitivityRuleModule } from './medical-data-sensitivity-rule/medical-data-sensitivity-rule.module';
import { MedicalDataSensitivityLevelModule } from './medical-data-sensitivity-level/medical-data-sensitivity-level.module';
import { MedicalDataSharingContractModule } from './medical-data-sharing-contract/medical-data-sharing-contract.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    DoctorModule,
    PatientModule,
    PersonModule,
    MedicalSpecialityModule,
    MedicaldataModule,
    MedicalDataSourceModule,
    MedicalDataModule,
    MedicalDataSensitivityRuleModule,
    MedicalDataSensitivityLevelModule,
    MedicalDataSharingContractModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
