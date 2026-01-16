export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Logo hoặc Tiêu đề chung */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">My App System</h2>
                </div>
                {children}
            </div>
        </div>
    );
}