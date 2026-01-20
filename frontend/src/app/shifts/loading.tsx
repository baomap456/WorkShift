export default function Loading() {
    return (
        <div className="max-w-4xl mx-auto space-y-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
                ))}
            </div>
        </div>
    );
}