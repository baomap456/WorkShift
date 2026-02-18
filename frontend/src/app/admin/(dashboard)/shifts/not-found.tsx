import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">404 - Không tìm thấy</h2>
            <Link href="/shifts" className="text-indigo-600 mt-4 inline-block">Về trang chủ</Link>
        </div>
    );
}