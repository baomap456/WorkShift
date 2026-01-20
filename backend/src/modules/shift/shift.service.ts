/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Shift, Prisma } from '@prisma/client';

@Injectable()
export class ShiftService {
  constructor(private prisma: PrismaService) { }
  async create(data: Prisma.ShiftCreateInput): Promise<Shift> {
    return this.prisma.shift.create({
      data,
    })
  }

  findAll(): Promise<Shift[]> {
    return this.prisma.shift.findMany();
  }

  async findOne(idShift: Prisma.ShiftWhereUniqueInput): Promise<Shift | null> {
    return this.prisma.shift.findUnique({
      where: idShift,
    });
  }

  update(idShift: Prisma.ShiftWhereUniqueInput, data: Prisma.ShiftUpdateInput): Promise<Shift> {
    return this.prisma.shift.update({
      where: idShift,
      data,
    });
  }

  async remove(idShift: Prisma.ShiftWhereUniqueInput): Promise<void> {
    await this.prisma.shift.delete({
      where: idShift,
    });
  }
}
