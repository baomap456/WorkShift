/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
export class CreateShiftDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsDateString()
    startTime: string;
    @IsDateString()
    endTime: string;
    @IsNotEmpty()
    unitPrice: number;
}
