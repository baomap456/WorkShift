/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interface/login-response.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto): Promise<LoginResponse> {
        const { email, password } = loginDto;

        const user = await this.prismaService.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordUserValid = await bcrypt.compare(password, user.password);
        if (!isPasswordUserValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            type: user.type,
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                name: user.fullName,
                role: user.role,
            },
        };
    }
}
