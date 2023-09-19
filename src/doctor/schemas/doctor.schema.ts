import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MedicalSpeciality } from 'src/medical-speciality/schemas/medical-speciality.schema';

@Schema({
  timestamps: true,
})
export class Doctor extends Document {
  @Prop()
  legalCode: string;

  @Prop({ type: Date }) // Changed to Date type
  licenseValidTill: Date;

  @Prop({ type: Types.ObjectId, ref: 'MedicalSpeciality' }) // Relationship with MedicalSpeciality
  speciality: MedicalSpeciality;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
