import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Tổng quan hệ thống</h2>
      
      {/* Các thẻ thống kê (Stats Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Thẻ Nhân viên */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Tổng nhân viên</div>
          <div className="text-4xl font-bold text-indigo-600 mb-4">12</div>
          <Link href="/users" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-auto">
            Xem chi tiết &rarr;
          </Link>
        </div>

        {/* Thẻ Ca làm việc */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Ca làm việc</div>
          <div className="text-4xl font-bold text-green-600 mb-4">5</div>
          <Link href="/shifts" className="text-green-600 hover:text-green-800 text-sm font-medium mt-auto">
            Quản lý lịch &rarr;
          </Link>
        </div>

        {/* Thẻ Chấm công (Ví dụ tương lai) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Chấm công hôm nay</div>
          <div className="text-4xl font-bold text-blue-600 mb-4">8/12</div>
          <span className="text-gray-400 text-sm mt-auto">Đang cập nhật...</span>
        </div>
      </div>

      {/* Khu vực biểu đồ hoặc thông báo nhanh (Giả lập) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
        <h3 className="font-bold text-gray-800 mb-4">Hoạt động gần đây</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Nguyễn Văn A vừa chấm công vào lúc 08:05
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Đã thêm ca làm việc mới "Ca Đêm T7"
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            Trần Thị B cập nhật thông tin cá nhân
          </li>
        </ul>
      </div>
    </div>
  );
}