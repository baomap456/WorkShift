import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu phải trên 6 ký tự" }),
});

// Tự động tạo type TypeScript từ Schema này (đỡ phải viết interface thủ công)
export type LoginFormValues = z.infer<typeof LoginSchema>;