import { ModeToggle } from "@/components/common/theme-toggle-btn"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-4 dark:bg-gray-900 shadow-md">
            <div>
                <h1 className="text-2xl font-bold">Where in the world?</h1>
            </div>
            <ModeToggle />
        </nav>
    )
}

export default Navbar