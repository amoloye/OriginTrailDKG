import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum MedicalDataSensitivityLevel {
  PRIVATE = 'Private',
  OPENTOSPECIFICDOCTOR = 'OpenToSpecificDoctor',
  OPENTOMEDICALSPECIALITY = 'OpenToMedicalSpeciality',
  OPENTOEVERYONE = 'OpenToEveryone',
}
@Schema()
export class MedicalDataSensitivitvRule extends Document {
  @Prop()
  level: MedicalDataSensitivityLevel;

  @Prop()
  value: string;
}

export const MedicalDataSensitivitvRuleSchema = SchemaFactory.createForClass(
  MedicalDataSensitivitvRule,
);
