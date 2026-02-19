'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// [MỚI] Import types để đảm bảo type-safety
// Giả sử file types.ts nằm cùng thư mục này
import { LoginPayload, LoginResponse } from './types/auth';

export async function login(prevState: any, formData: FormData) {
  // Ép kiểu về string để TypeScript hiểu đúng
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  const callbackUrl = formData.get('callbackUrl')?.toString() || '/dashboard';

  // [MỚI] Tạo payload có type rõ ràng
  const loginData: LoginPayload = { email, password };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData), // [MỚI] Gửi object đã được type-check
      cache: 'no-store',
    });

    if (!res.ok) {
      return { error: 'Email hoặc mật khẩu không chính xác!' };
    }

    // [MỚI] Ép kiểu kết quả trả về để có gợi ý code (Intellisense)
    const data = await res.json() as LoginResponse; 

    // Lúc này bạn gõ data. sẽ thấy gợi ý accessToken và user ngay lập tức
    const cookieStore = await cookies();
    
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      path: '/',      
      maxAge: 60 * 60 * 24 * 7, 
    });

  } catch (error) {
    console.error('Login Error:', error);
    return { error: 'Lỗi kết nối đến server!' };
  }

  redirect(callbackUrl);
}