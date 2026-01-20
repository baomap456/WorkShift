'use client';

import { createShift, updateShift } from '../actions';
import { useFormStatus } from 'react-dom';
import { Shift } from '../types';
import { int } from 'zod';

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
                <label className="block text-sm font-medium text-gray-700">Tên ca</label>
                <input
                    name="name"
                    defaultValue={initialData?.name}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    required
                    placeholder="Ví dụ: Ca Sáng"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Bắt đầu</label>
                    <input
                        name="startTime"
                        type="datetime-local"
                        defaultValue={initialData?.startTime}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Kết thúc</label>
                    <input
                        name="endTime"
                        type="datetime-local"
                        defaultValue={initialData?.endTime}
                        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                        required
                    />
                </div>
            </div>

            <div className="pt-2">
                <SubmitButton isUpdate={!!initialData} />
            </div>
        </form>
    );
}