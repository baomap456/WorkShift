/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsNotEmpty, IsEnum, IsInt, Min, IsBoolean, IsOptional } from 'class-validator';
import { EmployeeType, Role } from '@prisma/client';
export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsEnum(Role)
    role?: Role;

    @IsOptional()
    @IsEnum(EmployeeType)
    type?: EmployeeType;

    @IsOptional()
    @IsInt()
    @Min(0) // Lương không được âm
    baseSalary?: number;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}