// backend/src/modules/auth/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET'), // Lấy bí mật từ .env
    });
  }

  async validate(payload: any) {
    // Khi token hợp lệ, hàm này sẽ trả về thông tin user
    // req.user trong Controller sẽ chính là cái này
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}