import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Lấy danh sách các Role được yêu cầu (từ decorator @Roles)
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // 2. Nếu API không yêu cầu role nào cụ thể => Cho qua luôn
    if (!requiredRoles) {
      return true;
    }

    // 3. Lấy thông tin User từ Request (đã được JwtAuthGuard gán vào trước đó)
    const { user } = context.switchToHttp().getRequest();

    // 4. Kiểm tra xem User có role phù hợp không
    return requiredRoles.some((role) => user.role === role);
  }
}