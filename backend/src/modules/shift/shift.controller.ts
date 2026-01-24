/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { ShiftService } from "./shift.service";
import { CreateShiftDto } from "./dto/create-shift.dto";
import { UpdateShiftDto } from "./dto/update-shift.dto";
import { Shift as ShiftModel } from '@prisma/client';

@Controller("shift")
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) { }

  @Post()
  create(@Body() createShiftDto: CreateShiftDto): Promise<ShiftModel> {
    return this.shiftService.create(createShiftDto);
  }

  @Get()
  findAll(): Promise<ShiftModel[]> {
    return this.shiftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ShiftModel | null> {
    return this.shiftService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateShiftDto: UpdateShiftDto): Promise<ShiftModel> {
    return this.shiftService.update(id, updateShiftDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.shiftService.remove(id);
  }
}
