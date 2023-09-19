import { Injectable, NotFoundException } from '@nestjs/common';
import { Doctor } from './shemas/doctor.shema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';

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

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const res = new this.DoctorModel(createDoctorDto);
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

  async updateByLegalCode(legalCode: string, doctor: Doctor): Promise<Doctor> {
    return await this.DoctorModel.findByIdAndUpdate(legalCode, doctor, {
      new: true,
      runValidators: true,
    });
  }
}
