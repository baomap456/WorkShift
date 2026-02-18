import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-96 space-y-4">
            <h2 className="text-4xl font-bold text-gray-300">404</h2>
            <h3 className="text-xl font-semibold text-gray-900">Không tìm thấy nhân viên</h3>
            <p className="text-gray-500">Hồ sơ nhân viên bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link
                href="/users"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
                ← Quay lại danh sách
            </Link>
        </div>
    );
}