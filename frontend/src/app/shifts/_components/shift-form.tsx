'use client';

import { createShift, updateShift } from '../actions';
import { useFormStatus } from 'react-dom';
import { Shift } from '../types';
import { int } from 'zod';
import { formatTimeForInput } from '../utils';

interface ShiftFormProps {
    initialData?: Shift;
}

function SubmitButton({ isUpdate }: { isUpdate: boolean }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-70"
        >
            {pending ? 'Đang xử lý...' : isUpdate ? 'Cập nhật Ca' : 'Tạo Ca Mới'}
        </button>
    );
}

export default function ShiftForm({ initialData }: ShiftFormProps) {
    const handleSubmit = async (formData: FormData) => {
        if (initialData) {
            await updateShift(initialData.id, formData);
        } else {
            await createShift(formData);
        }
    };

    return (
        <form action={handleSubmit} className="space-y-4 border p-6 rounded-lg bg-white shadow-sm">
            <div>
                <label className="block text-sm font-medium text-gray-900 font-bold">Tên ca</label>
                <input
                    name="name"
                    defaultValue={initialData?.name}
                    className="mt-1 block w-full rounded-md border border-gray-300 text-gray-900 p-2.5"
                    required
                    placeholder="Ví dụ: Ca Sáng"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-900 font-bold">Bắt đầu</label>
                    <input
                        name="startTime"
                        type="time"
                        defaultValue={formatTimeForInput(initialData?.startTime)}
                        className="mt-1 block w-full rounded-md border border-gray-300 text-gray-900 p-2.5"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 font-bold">Kết thúc</label>
                    <input
                        name="endTime"
                        type="time"
                        defaultValue={formatTimeForInput(initialData?.endTime)}
                        className="mt-1 block w-full rounded-md border border-gray-300 text-gray-900 p-2.5"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 font-bold">Tiền/giờ</label>
                    <input
                        name="unitPrice"
                        defaultValue={initialData?.unitPrice}
                        className="mt-1 block w-full rounded-md border border-gray-300 text-gray-900 p-2.5"
                        required
                        placeholder="Ví dụ: 100000"
                    />
                </div>

            </div>

            <div className="pt-2">
                <SubmitButton isUpdate={!!initialData} />
            </div>
        </form>
    );
}