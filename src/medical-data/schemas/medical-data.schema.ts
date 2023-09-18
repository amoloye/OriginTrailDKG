import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MedicalDataSource extends Document {
  @Prop()
  source : MedicalDataSource;

  @Prop()
  createdBy : Person;

  @Prop()
  classifier : string;

  @Prop()
  value : string;

  @Prop()
  ins : Datetime;

  @Prop()
  sensitivityRule : MedicalDataSensitivitvRule;
}

export const MedicalDataSourceSchema =
  SchemaFactory.createForClass(MedicalDataSource);