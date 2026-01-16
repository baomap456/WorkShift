import { Metadata } from 'next';
import LoginForm from './_components/login-form'; // Import từ folder ngay bên cạnh

export const metadata: Metadata = {
    title: 'Đăng nhập hệ thống',
};

export default function LoginPage() {
    return (
        <section>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Đăng nhập</h3>
            {/* Gọi Client Component form xử lý logic */}
            <LoginForm />
        </section>
    );
}