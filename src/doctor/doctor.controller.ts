import { DoctorService } from './doctor.service';
import { Doctor } from './schemas/doctor.schema';
import { DoctorDto } from './dto/doctor.dto';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('doctor') //this is the url route, i.e /doctor
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get()
  async getAllDoctors(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Post()
  async createDoctor(
    @Body()
    doctor: DoctorDto,
  ): Promise<Doctor> {
    return this.doctorService.create(doctor);
  }

  @Get(':legalCode') // This route parameter will capture the ID from the URL
  async getDoctorById(@Param('legalCode') legalCode: string): Promise<Doctor> {
    const doctor = await this.doctorService.findByLegalCode(legalCode);

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID '${legalCode}' not found`);
    }

    return doctor;
  }

  @Put(':legalCode')
  async doctorDto(
    @Param('legalCode')
    legalCode: string,
    @Body()
    doctorDto: DoctorDto,
  ): Promise<Doctor> {
    return this.doctorService.updateByLegalCode(legalCode, doctorDto);
  }
}
