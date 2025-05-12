
'use client'

import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FiltersCountriesList({
    name,
    setName,
    region,
    setRegion,
}: {
    name: string
    setName: (val: string) => void
    region: string
    setRegion: (val: string) => void
}) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-10 py-4 gap-4 mt-8 mb-6">
            <Input
                type="text"
                placeholder="Search for a country..."
                className="w-full md:w-1/2 bg-white dark:bg-[#2B3743] dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Select value={region} onValueChange={(value) => setRegion(value)}>
                <SelectTrigger className="w-full md:w-1/4 bg-white dark:bg-[#2B3743] dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600" aria-label="Filter by Region">
                    <SelectValue placeholder="Filter by Region" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Africa">Africa</SelectItem>
                    <SelectItem value="America">America</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}