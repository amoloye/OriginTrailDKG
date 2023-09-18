import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MedicalDataSource extends Document {
  @Prop()
  id: string;

  @Prop()
  enabled: boolean;
}

export const MedicalDataSourceSchema =
  SchemaFactory.createForClass(MedicalDataSource);