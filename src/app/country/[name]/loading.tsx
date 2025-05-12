
export default function CountrySkeleton() {
    return (
        <div className="container mx-auto px-6 py-10 animate-pulse">
            <div className="mb-8">
                <div className="w-24 h-10 bg-gray-300 dark:bg-gray-600 rounded shadow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Bandera */}
                <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 rounded shadow" />

                {/* Detalles */}
                <div className="flex flex-col gap-4">
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5" />
                        </div>
                    </div>

                    {/* Fronteras */}
                    <div className="mt-8 space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-40" />
                        <div className="flex gap-2">
                            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
                            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
                            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}