import ShiftForm from '../_components/shift-form';
import Link from 'next/link';

export default function CreatePage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/shifts" className="text-sm text-gray-500 hover:underline">← Quay lại danh sách</Link>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">Tạo ca làm việc mới</h1>
            </div>
            <ShiftForm />
        </div>
    );
}
