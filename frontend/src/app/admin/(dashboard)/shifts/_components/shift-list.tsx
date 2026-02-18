'use client';

import { Shift } from '../types';
import Link from 'next/link';
import { deleteShift } from '../actions';
import { formatTimeForInput } from '../utils';

export default function ShiftList({ shifts }: { shifts: Shift[] }) {
    if (shifts.length === 0) {
        return <p className="text-center text-gray-500 py-10">Chưa có ca làm việc nào.</p>;
    }

    return (
        <div className="grid gap-4">
            {shifts.map((shift) => (
                <div key={shift.id} className="border p-4 rounded-lg shadow-sm bg-white flex justify-between items-center hover:shadow-md transition">
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{shift.name}</h3>
                        <p className="text-gray-500 text-sm">
                            {formatTimeForInput(shift.startTime)}
                            <span className="mx-2 text-gray-400">→</span>
                            {formatTimeForInput(shift.endTime)}
                        </p>
                        {shift.unitPrice !== undefined && (
                            <p className="text-gray-500 text-sm">
                                Giá đơn vị: {shift.unitPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <Link
                            href={`/shifts/${shift.id}/edit`}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium"
                        >
                            Sửa
                        </Link>
                        <button
                            onClick={() => {
                                if (confirm('Bạn có chắc muốn xóa ca này?')) {
                                    deleteShift(shift.id)
                                }
                            }}
                            className="px-3 py-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 text-sm font-medium"
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}