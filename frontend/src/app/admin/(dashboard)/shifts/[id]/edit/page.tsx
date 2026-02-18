import ShiftForm from '../../_components/shift-form';
import Link from 'next/link';
import { Shift } from '../../types';

async function getShiftById(id: string): Promise<Shift> {
    const respone = await fetch(`${process.env.API_URL}/shift/${id}`, {
        cache: 'no-store',
    });

    if (!respone.ok) {
        throw new Error('Failed to fetch shift');
    }

    return respone.json();
}

export default async function EditPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const shift = await getShiftById(id);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/shifts" className="text-sm text-gray-500 hover:underline">← Quay lại danh sách</Link>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">Chỉnh sửa ca làm việc</h1>
            </div>
            <ShiftForm initialData={shift} />
        </div>
    );
}