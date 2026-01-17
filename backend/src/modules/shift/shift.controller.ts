/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ShiftService } from "./shift.service";
import { CreateShiftDto } from "./dto/create-shift.dto";
import { UpdateShiftDto } from "./dto/update-shift.dto";
import { Shift as ShiftModel } from "../../generated/prisma";

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
  findOne(@Param('id') id: string): Promise<ShiftModel | null> {
    return this.shiftService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto): Promise<ShiftModel> {
    return this.shiftService.update({ id: Number(id) }, updateShiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.shiftService.remove({ id: Number(id) });
  }
}
