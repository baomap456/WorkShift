'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Users Module Error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-96 text-center space-y-4">
            <div className="bg-red-50 p-4 rounded-full">
                <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Không thể tải dữ liệu nhân viên</h2>
            <p className="text-gray-500 max-w-md">
                Hệ thống đang gặp sự cố khi kết nối với máy chủ. Vui lòng thử lại sau.
            </p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Thử lại
            </button>
        </div>
    );
}