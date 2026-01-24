import UserForm from '../_components/user-form';
import Link from 'next/link';

export default function CreateUserPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-6">
                <Link href="/users" className="text-sm text-gray-500 hover:underline">← Quay lại danh sách</Link>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">Thêm nhân viên mới</h1>
            </div>
            <UserForm />
        </div>
    );
}