import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Doctor } from 'src/doctor/schemas/doctor.schema';
import { Person } from 'src/person/schemas/person.schema';

@Schema()
export class Patient extends Document {
  @Prop()
  ailment: string;

  @Prop()
  report: string; //doctor'sReport

  @Prop({ type: Types.ObjectId, ref: 'Person' }) // Relationship with Person
  person: Person;

  @Prop({ type: Types.ObjectId, ref: 'Doctor' }) // Relationship with Doctor
  doctor: Doctor;
}
export const PatientSchema = SchemaFactory.createForClass(Patient);
