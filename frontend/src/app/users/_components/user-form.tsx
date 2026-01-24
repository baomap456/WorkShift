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
        <form action={handleSubmit} className="space-y-6 border p-6 rounded-lg bg-white shadow-sm">

            {/* 1. Họ tên */}
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Họ và tên</label>
                <input
                    name="fullName"
                    defaultValue={user?.fullName}
                    className="block w-full rounded-md border border-gray-300 p-2.5"
                    required
                    placeholder="Nguyễn Văn A"
                />
            </div>

            {/* 2. Email (Readonly khi sửa) */}
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Email</label>
                <input
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                    className={`block w-full rounded-md border border-gray-300 p-2.5 ${user ? 'bg-gray-100 text-gray-500' : ''}`}
                    required
                    readOnly={!!user}
                    placeholder="email@example.com"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 3. Loại nhân viên (Có onChange để update State) */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Loại hợp đồng</label>
                    <select
                        name="type"
                        value={empType}
                        onChange={(e) => setEmpType(e.target.value as EmployeeType)}
                        className="block w-full rounded-md border border-gray-300 p-2.5 bg-white"
                    >
                        <option value={EmployeeType.PART_TIME}>Part Time (Thời vụ)</option>
                        <option value={EmployeeType.FULL_TIME}>Full Time (Chính thức)</option>
                    </select>
                </div>

                {/* 4. Lương (Label thay đổi theo State) */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">
                        {empType === EmployeeType.FULL_TIME
                            ? 'Lương Cứng (VNĐ/Tháng)'
                            : 'Lương Theo Giờ (VNĐ/Giờ)'}
                    </label>
                    <input
                        name="baseSalary"
                        type="number"
                        defaultValue={user?.baseSalary || (empType === EmployeeType.PART_TIME ? 25000 : 5000000)}
                        className="block w-full rounded-md border border-gray-300 p-2.5"
                        required
                        min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        {empType === EmployeeType.FULL_TIME
                            ? 'Nhận đủ hàng tháng.'
                            : 'Tính theo số giờ làm việc.'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 5. Vai trò */}
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Vai trò</label>
                    <select
                        name="role"
                        defaultValue={user?.role || Role.STAFF}
                        className="block w-full rounded-md border border-gray-300 p-2.5 bg-white"
                    >
                        <option value={Role.STAFF}>Nhân viên</option>
                        <option value={Role.ADMIN}>Quản trị viên (Admin)</option>
                    </select>
                </div>

                {/* 6. Trạng thái */}
                <div className="flex items-center pt-8">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="isActive"
                            defaultChecked={user?.isActive ?? true}
                            className="w-5 h-5 text-blue-600 rounded"
                        />
                        <span className="font-medium text-gray-900">Đang hoạt động</span>
                    </label>
                </div>
            </div>

            <div className="pt-4">
                <SubmitButton isUpdate={!!user} />
            </div>
        </form>
    );
}