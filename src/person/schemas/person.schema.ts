import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Person extends Document {
  @Prop()
  personalCode: string;

  @Prop()
  emailAddress: string;

  @Prop()
  name: string;

  @Prop()
  familyName: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
