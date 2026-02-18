'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="text-center py-20">
            <h2 className="text-xl font-bold text-red-600">Đã xảy ra lỗi!</h2>
            <p className="text-gray-500 mb-4">{error.message}</p>
            <button onClick={() => reset()} className="bg-indigo-600 text-white px-4 py-2 rounded">Thử lại</button>
        </div>
    );
}