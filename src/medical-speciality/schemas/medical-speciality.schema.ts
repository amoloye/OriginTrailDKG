import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MedicalSpeciality extends Document {
  @Prop()
  legalCode: string;

  @Prop()
  name: string;
}

export const MedicalSpecialitySchema =
  SchemaFactory.createForClass(MedicalSpeciality);
