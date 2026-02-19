/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Role, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const RESTRICTED_FIELDS_CONFIG: Partial<Record<keyof UpdateUserDto, string>> = {
  role: 'Bạn không có quyền thay đổi chức vụ (Role)',
  baseSalary: 'Bạn không có quyền thay đổi lương cơ bản',
  type: 'Bạn không có quyền thay đổi loại hợp đồng',
  isActive: 'Bạn không có quyền kích hoạt/vô hiệu hóa tài khoản',
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async createUser(dataUser: CreateUserDto): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dataUser.email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const rawPassword = dataUser.password || "DefaultPassword@123"; // Thay thế bằng hàm băm mật khẩu thực tế

    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    return this.prisma.user.create({
      data: {
        ...dataUser,
        password: hashedPassword,
      },
    });
  }

  findAllUser(): Promise<Omit<User, 'password'>[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        type: true,
        baseSalary: true,
        isActive: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOneUser(idUser: number): Promise<Omit<User, 'password'> | null> {
    return this.prisma.user.findUnique({
      where: { id: idUser },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        type: true,
        baseSalary: true,
        isActive: true,
        createdAt: true,
      },
    });
  }


  async update(id: number, updateUserDto: UpdateUserDto,currentUserRole: Role): Promise<User> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    if (currentUserRole !== Role.ADMIN) {
      const updates = Object.keys(updateUserDto); 

      for (const field of updates) {
        const errorMessage = RESTRICTED_FIELDS_CONFIG[field];
        
        if (errorMessage) {
          console.warn(`[Security Alert] Non-admin user trying to update forbidden field: ${field}`);
          throw new ForbiddenException(errorMessage);
        }
      }
    }

    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new NotFoundException(`Không tìm thấy User ID ${id} để update`, error);
    }
  }

  async remove(id: number): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Không tìm thấy User ID ${id} để xóa`, error);
    }
  }
}
