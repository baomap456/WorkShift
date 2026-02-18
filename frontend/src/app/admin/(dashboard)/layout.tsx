import { ReactNode } from 'react';
import Link from 'next/link';

// Layout này sẽ bọc cả /users và /shifts
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* --- SIDEBAR CHUNG (CỐ ĐỊNH) --- */}
      <aside className="w-64 bg-white border-r hidden md:block flex-shrink-0">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-indigo-600">HRM System</h2>
        </div>
        
        <nav className="p-4 space-y-2">
          {/* Link sang Users */}
          <Link 
            href="/users" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-medium transition-colors"
          >
            <span className="text-xl">👥</span>
            Quản lý Nhân viên
          </Link>

          {/* Link sang Shifts */}
          <Link 
            href="/shifts" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-medium transition-colors"
          >
            <span className="text-xl">📅</span>
            Quản lý Ca làm việc
          </Link>

          {/* Link ví dụ khác */}
          <Link 
            href="/settings" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-medium transition-colors"
          >
            <span className="text-xl">⚙️</span>
            Cài đặt
          </Link>
        </nav>

        <div className="p-4 border-t mt-auto absolute bottom-0 w-64">
            <button className="w-full text-left p-2 text-red-600 hover:bg-red-50 rounded">
                Đăng xuất
            </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT (THAY ĐỔI) --- */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b h-16 flex items-center px-8 justify-between sticky top-0 z-10">
            <h1 className="font-semibold text-gray-700">Dashboard</h1>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                A
            </div>
        </header>
        
        {/* Đây là nơi nội dung của Users hoặc Shifts sẽ hiện ra */}
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
}