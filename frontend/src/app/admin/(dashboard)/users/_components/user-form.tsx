'use client';

import { createUser, updateUser } from '../actions';
import { useFormStatus } from 'react-dom';
import { User, EmployeeType, Role } from '../types';
import { useState } from 'react';

interface UserFormProps {
    user?: User;
}

function SubmitButton({ isUpdate }: { isUpdate: boolean }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-70 font-semibold"
        >
            {pending ? 'Đang lưu...' : isUpdate ? 'Cập nhật' : 'Tạo mới'}
        </button>
    );
}

export default function UserForm({ user }: UserFormProps) {
    const [empType, setEmpType] = useState<EmployeeType>(user?.employeeType || EmployeeType.PART_TIME);

    const handleSubmit = async (formData: FormData) => {
        if (user) {
            await updateUser(Number(user.id), formData);
        }
        else {
            await createUser(formData);
        }
    }

    return (
        <form action={handleSubmit} className="space-y-6 border border-gray-200 p-8 rounded-xl bg-white shadow-md">

            {/* 1. Họ tên */}
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-1.5">
                    Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                    name="fullName"
                    defaultValue={user?.fullName}
                    className="block w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                />
            </div>

            {/* 2. Email (Readonly khi sửa) */}
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-1.5">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                    // [SỬA]: Dù nền xám (bg-gray-100) nhưng chữ phải đậm (text-gray-700) mới đọc được
                    className={`block w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 ${
                        user ? 'bg-gray-100 text-gray-700 cursor-not-allowed font-medium' : ''
                    }`}
                    required
                    readOnly={!!user}
                    placeholder="email@example.com"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 3. Loại nhân viên */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1.5">Loại hợp đồng</label>
                    <div className="relative">
                        <select
                            name="type"
                            value={empType}
                            onChange={(e) => setEmpType(e.target.value as EmployeeType)}
                            className="block w-full rounded-lg border border-gray-300 p-3 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                            <option value={EmployeeType.PART_TIME}>Part Time (Thời vụ)</option>
                            <option value={EmployeeType.FULL_TIME}>Full Time (Chính thức)</option>
                        </select>
                        {/* Mũi tên dropdown custom cho đẹp */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {/* 4. Lương */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1.5">
                        {empType === EmployeeType.FULL_TIME
                            ? 'Lương Cứng (VNĐ/Tháng)'
                            : 'Lương Theo Giờ (VNĐ/Giờ)'}
                    </label>
                    <input
                        name="baseSalary"
                        type="number"
                        defaultValue={user?.baseSalary || (empType === EmployeeType.PART_TIME ? 25000 : 5000000)}
                        className="block w-full rounded-lg border border-gray-300 p-3 text-gray-900 font-medium focus:ring-2 focus:ring-blue-500"
                        required
                        min="0"
                    />
                    {/* [SỬA]: Đổi text-xs (quá nhỏ) thành text-sm và màu đậm hơn (gray-600) */}
                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {empType === EmployeeType.FULL_TIME
                            ? 'Nhân viên nhận đủ số tiền này mỗi tháng.'
                            : 'Tính theo tổng số giờ làm việc thực tế.'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 5. Vai trò */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1.5">Vai trò hệ thống</label>
                    <div className="relative">
                        <select
                            name="role"
                            defaultValue={user?.role || Role.STAFF}
                            className="block w-full rounded-lg border border-gray-300 p-3 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                            <option value={Role.STAFF}>Nhân viên</option>
                            <option value={Role.ADMIN}>Quản trị viên (Admin)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {/* 6. Trạng thái */}
                <div className="flex items-center pt-8">
                    <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition">
                        <input
                            type="checkbox"
                            name="isActive"
                            defaultChecked={user?.isActive ?? true}
                            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-base font-medium text-gray-900">Đang hoạt động (Active)</span>
                    </label>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
                <SubmitButton isUpdate={!!user} />
            </div>
        </form>
    );
}