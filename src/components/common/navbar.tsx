import { ModeToggle } from "@/components/common/theme-toggle-btn"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-4 bg-white dark:bg-[#2B3743] shadow-md mb-12 sticky top-0 z-10">
            <Link href="/">
                <h1 className="text-lg md:text-2xl font-bold">Where in the world?</h1>
            </Link>
            <ModeToggle />
        </nav>
    )
}

export default Navbar