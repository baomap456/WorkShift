import Link from 'next/link';
import ShiftList from './_components/shift-list';
import { Shift } from './types';

async function getShifts(): Promise<Shift[]> {
    const respone = await fetch(`${process.env.API_URL}/shift`, {
        cache: 'no-store',
    });

    if (!respone.ok) {
        throw new Error('Failed to fetch shifts');
    }

    return respone.json();
}

export default async function ShiftPage() {
    const shifts = await getShifts();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý Ca làm việc</h1>
                    <p className="text-gray-500 text-sm">Danh sách các ca hiện có</p>
                </div>

                <Link
                    href="/shifts/create"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium"
                >
                    + Thêm ca mới
                </Link>
            </div>

            <ShiftList shifts={shifts} />
        </div>
    );
}