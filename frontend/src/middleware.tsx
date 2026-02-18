import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// 1. CẤU HÌNH ROUTE
// -------------------------------------------------------------

// Những trang ai cũng vào được
const PUBLIC_PATHS = new Set(['/login', '/register', '/', '/forgot-password']);

// Những trang chỉ ADMIN mới được vào
// Nhờ đặt folder là "src/app/admin", ta chỉ cần bắt prefix "/admin" là bảo vệ được tất cả.
const ADMIN_PATHS_PREFIX = '/admin';

// Secret Key
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secret-key-mac-dinh');

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // -------------------------------------------------------------
  // BƯỚC 1: KIỂM TRA PUBLIC
  // -------------------------------------------------------------
  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  // -------------------------------------------------------------
  // BƯỚC 2: KIỂM TRA ĐĂNG NHẬP
  // -------------------------------------------------------------
  const token = request.cookies.get('accessToken')?.value;

  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // -------------------------------------------------------------
  // BƯỚC 3: KIỂM TRA QUYỀN (Authorization)
  // -------------------------------------------------------------
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userRole = payload.role as string; // 'ADMIN' | 'STAFF'

    // Logic kiểm tra quyền Admin:
    // Chỉ cần 1 dòng này là chặn được hết /admin/users, /admin/shifts...
    const isTryingAccessAdmin = pathname.startsWith(ADMIN_PATHS_PREFIX);

    if (isTryingAccessAdmin && userRole !== 'ADMIN') {
      // Staff cố vào trang Admin -> Đá về Dashboard của Staff
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // --- LOGIC CHO STAFF ---
    // Mặc định: Đã đăng nhập + Không vi phạm trang Admin = Được phép vào (employee) routes

    const response = NextResponse.next();
    response.headers.set('x-user-role', userRole);
    return response;

  } catch (error) {
    console.error('Middleware Auth Error:', error);
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('accessToken');
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};