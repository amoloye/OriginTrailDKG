import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MedicalDataSensitivitvRule } from 'src/medical-data-sensitivity-rule/schemas/medical-data-sensitivity-rule.schema';
import { MedicalDataSource } from 'src/medical-data-source/schemas/medical-data-source.schema';
import { Person } from 'src/person/schemas/person.schema';

@Schema()
export class MedicalData extends Document {
  @Prop()
  source: MedicalDataSource;

  @Prop()
  createdBy: Person;

  @Prop()
  classifier: string;

  @Prop()
  value: string;

  @Prop({ type: Date }) // Changed to Date type
  ins: Date;

  @Prop()
  sensitivityRule: MedicalDataSensitivitvRule;
}

export const MedicalDataSchema = SchemaFactory.createForClass(MedicalData);
