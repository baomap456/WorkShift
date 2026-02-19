import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Lấy danh sách role yêu cầu từ decorator (ví dụ: ['ADMIN'])
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu endpoint không yêu cầu role nào (công khai), cho qua
    if (!requiredRoles) {
      return true;
    }

    // 2. Lấy user từ request (đã được JwtStrategy gán vào trước đó)
    const { user } = context.switchToHttp().getRequest();

    // 3. Kiểm tra xem role của user có nằm trong danh sách yêu cầu không
    return requiredRoles.some((role) => user.role === role);
  }
}