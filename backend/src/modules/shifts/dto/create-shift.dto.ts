/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsDateString, Min, IsNumber } from 'class-validator';
export class CreateShiftDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDateString()
    startTime: string;

    @IsDateString()
    endTime: string;

    @IsNotEmpty()
    @Min(0)
    @IsNumber()
    unitPrice: number;
}
