export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto space-y-6 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center mb-6">
                <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded w-48"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>

            {/* Table Skeleton */}
            <div className="border rounded-lg shadow-sm bg-white p-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b last:border-0">
                        <div className="flex space-x-4 w-1/3">
                            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            <div className="space-y-2 flex-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                        <div className="h-8 bg-gray-200 rounded w-20"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}