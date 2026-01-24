'use client';

import { User, EmployeeType } from '../types';
import Link from 'next/link';
import { deleteUser } from '../actions';

export default function UserList({ users }: { users: User[] }) {
    if (users.length === 0) return <p className="text-center py-10">Chưa có nhân viên nào.</p>;

    return (
        <div className="overflow-x-auto border rounded-lg shadow-sm">
            <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Họ tên / Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại HĐ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lương Cơ Bản</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">{user.fullName}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                                <div className="text-xs text-gray-400 mt-1">{user.role}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.employeeType === EmployeeType.FULL_TIME ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {user.employeeType === EmployeeType.FULL_TIME ? 'Full Time' : 'Part Time'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(user.baseSalary)}
                                <span className="text-gray-500 text-xs ml-1">
                                    /{user.employeeType === EmployeeType.FULL_TIME ? 'tháng' : 'giờ'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`text-sm ${user.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link href={`/users/${user.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                    Sửa
                                </Link>
                                <button
                                    onClick={() => {
                                        if (confirm('Xóa nhân viên này?')) deleteUser(user.id);
                                    }}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
