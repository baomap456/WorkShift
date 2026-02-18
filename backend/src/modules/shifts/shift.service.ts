/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Shift } from '@prisma/client';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftService {
  constructor(private prisma: PrismaService) { }
  async create(data: CreateShiftDto): Promise<Shift> {
    return this.prisma.shift.create({
      data,
    })
  }

  findAll(): Promise<Shift[]> {
    return this.prisma.shift.findMany();
  }

  async findOne(idShift: number): Promise<Shift | null> {
    return this.prisma.shift.findUnique({
      where: { id: idShift },
    });
  }

  update(idShift: number, data: UpdateShiftDto): Promise<Shift> {
    return this.prisma.shift.update({
      where: { id: idShift },
      data,
    });
  }

  async remove(idShift: number): Promise<void> {
    await this.prisma.shift.delete({
      where: { id: idShift },
    });
  }
}
