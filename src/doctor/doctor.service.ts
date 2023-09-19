import { Injectable, NotFoundException } from '@nestjs/common';
import { Doctor } from './schemas/doctor.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name)
    private DoctorModel: mongoose.Model<Doctor>,
  ) {}

  async findAll(): Promise<Doctor[]> {
    const doctors = await this.DoctorModel.find();
    return doctors;
  }

  //   async create(doctor: Doctor): Promise<Doctor> {
  //     const res = await this.DoctorModel.create(doctor);
  //     return res;
  //   }

  async create(doctorDto: DoctorDto): Promise<Doctor> {
    const res = new this.DoctorModel(doctorDto);
    return res.save();
  }

  async findByLegalCode(legalCode: string): Promise<Doctor | null> {
    try {
      const doctor = await this.DoctorModel.findById(legalCode).exec();
      return doctor;
    } catch (error) {
      throw new NotFoundException(`Doctor with ID '${legalCode}' not found`);
    }
  }

  async updateByLegalCode(
    legalCode: string,
    doctorDto: DoctorDto,
  ): Promise<Doctor> {
    const doctor = await this.DoctorModel.findByIdAndUpdate(
      legalCode,
      doctorDto,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID '${legalCode}' not found`);
    }
    return doctor;
  }
}
