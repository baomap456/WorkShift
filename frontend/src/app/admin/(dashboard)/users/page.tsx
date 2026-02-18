import Link from 'next/link';
import UserList from './_components/user-list';
import { User } from './types';

async function getUsers(): Promise<User[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý Nhân sự</h1>
                    <p className="text-gray-500 text-sm">Danh sách nhân viên toàn hệ thống</p>
                </div>
                <Link
                    href="/users/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm font-medium"
                >
                    + Thêm nhân viên
                </Link>
            </div>

            <UserList users={users} />
        </div>
    );
}