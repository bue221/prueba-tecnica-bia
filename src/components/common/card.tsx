import { Country } from "@/types/country"
import Image from "next/image"
import Link from "next/link"

export const CountryCard = ({ country }: { country: Country }) => {
    return (
        <Link href={`/country/${country.name.common}`} key={country.name.common}>
            <div key={country.name.common} className="flex flex-col w-[310px] md:w-[250px] min-h-[330px] bg-white dark:bg-[#2B3743] rounded-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out shadow-sm">
                <Image
                    src={country.flags.png}
                    alt={country.name.common}
                    width={300}
                    height={200}
                    className="bg-cover h-36 w-full object-cover"
                />
                <div className='p-4'>
                    <h1 className='text-lg font-bold'>{country.name.common}</h1>
                    <div className='pt-2 text-sm'>
                        <p><strong>Population:</strong> {country.population}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const CountryCardSkeleton = ({ index }: { index: number }) => {
    return (
        <div key={index} className="flex flex-col w-[310px] md:w-[250px] min-h-[330px] bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden animate-pulse">
            <div className="bg-gray-300 dark:bg-gray-600 h-36 w-full"></div>
            <div className='p-4'>
                <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2'></div>
                <div className='space-y-2'>
                    <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
                    <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
                    <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
                </div>
            </div>
        </div>
    )
}