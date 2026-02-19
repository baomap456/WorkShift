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
  UseGuards,
} from "@nestjs/common";
import { ShiftService } from "./shift.service";
import { CreateShiftDto } from "./dto/create-shift.dto";
import { UpdateShiftDto } from "./dto/update-shift.dto";
import { Role, Shift as ShiftModel } from '@prisma/client';
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { Roles } from "../auth/decorators/roles.decorator";

@Controller("shifts")
@UseGuards(JwtAuthGuard, RolesGuard)
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) { }

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() createShiftDto: CreateShiftDto): Promise<ShiftModel> {
    return this.shiftService.create(createShiftDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.STAFF)
  findAll(): Promise<ShiftModel[]> {
    return this.shiftService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.STAFF)
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ShiftModel | null> {
    return this.shiftService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateShiftDto: UpdateShiftDto): Promise<ShiftModel> {
    return this.shiftService.update(id, updateShiftDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.shiftService.remove(id);
  }
}
