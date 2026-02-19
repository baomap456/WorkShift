/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role, User } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @Roles(Role.ADMIN) // Chỉ ADMIN mới có quyền tạo người dùng mới
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @Roles(Role.ADMIN) 
  findAll(): Promise<Omit<User, 'password'>[]> {
    return this.userService.findAllUser();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.STAFF) // ADMIN và STAFF đều có thể xem thông tin người dùng (nhưng STAFF sẽ bị filter bớt thông tin nhạy cảm)
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Omit<User, 'password'> | null> {
    return this.userService.findOneUser(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.STAFF) // ADMIN có thể cập nhật tất cả, STAFF chỉ có thể cập nhật thông tin của chính mình (logic này sẽ được xử lý trong service)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto, @Req() req): Promise<User> {
    return this.userService.update(id, updateUserDto, req.user.role);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.remove(id);
  }
}
