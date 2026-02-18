import UserForm from '../../_components/user-form';
import Link from 'next/link';
import { User } from '../../types';
import { notFound } from 'next/navigation'; // Import hàm notFound

async function getUserById(id: string): Promise<User | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, { cache: 'no-store' });
    if (res.status === 404) return null; // Trả về null nếu không thấy
    if (!res.ok) throw new Error('Backend Error');
    return res.json();
}

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUserById(id);

    if (!user) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-6">
                <Link href="/users" className="text-sm text-gray-500 hover:underline">← Quay lại danh sách</Link>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">Cập nhật hồ sơ nhân viên</h1>
            </div>
            <UserForm user={user} />
        </div>
    );
}