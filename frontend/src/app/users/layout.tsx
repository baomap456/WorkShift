import { ReactNode } from 'react';

export const metadata = {
    title: 'Quản lý Nhân viên | HRM System',
};

export default function UsersLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar giả định cho module User */}
            <aside className="w-64 bg-white border-r hidden md:block">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-blue-600">Nhân sự</h2>
                </div>
                <nav className="p-4 space-y-2">
                    <a href="/users" className="block p-3 rounded-lg bg-blue-50 text-blue-700 font-medium">
                        Danh sách nhân viên
                    </a>
                    <a href="/users/create" className="block p-3 rounded-lg hover:bg-gray-100 text-gray-600">
                        Thêm mới
                    </a>
                </nav>
            </aside>

            {/* Khu vực nội dung chính */}
            <main className="flex-1 overflow-auto p-8">
                {children}
            </main>
        </div>
    );
}