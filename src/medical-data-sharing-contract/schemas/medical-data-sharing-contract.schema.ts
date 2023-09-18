import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MedicalData } from 'src/medical-data/schemas/medical-data.schema';
@Schema({
  timestamps: true,
})
export class MedicalDataSharingContract extends Document {
  @Prop()
  contractNr: string;

  @Prop({ type: Date }) // Changed to Date type
  validFrom: Date;

  @Prop({ type: Date }) // Changed to Date type
  validTill: Date;

  @Prop({ type: Date }) // Changed to Date type
  ins: Date;

  @Prop({ type: Types.ObjectId, ref: 'MedicalData' }) // Relationship with MedicalSpeciality
  medicaldata: MedicalData;
}

export const MedicalDataSharingContractSchema = SchemaFactory.createForClass(
  MedicalDataSharingContract,
);
