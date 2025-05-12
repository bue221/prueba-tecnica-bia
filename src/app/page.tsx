'use client'
import { Country } from '@/types/country';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Home() {

  const [region, setRegion] = useState<string>('Europe');
  const [name, setName] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const params = new URLSearchParams({ region });
      if (name) params.append('name', name);

      const res = await fetch(`/api/countries?${params.toString()}`);
      const data: Country[] = await res.json();
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, [region, name]);

  console.log(countries);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <div className='flex justify-between items-center w-full px-10 py-4 gap-2'>
        <input
          type="text"
          placeholder="Search for a country..."
          className="border border-gray-300 dark:border-gray-600 rounded-md p-2 mb-4 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="border border-gray-300 dark:border-gray-600 rounded-md p-2 mb-4 w-full"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="container px-10 min-h-full min-w-full flex flex-wrap gap-12 ">
        {loading
          && (
            <>
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="flex flex-col w-[250px] bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden animate-pulse">
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
              ))}
            </>
          )}
        {!loading && countries?.map((country) => (
          <Link href={`/country/${country.name.common}`} key={country.name.common}>
            <div key={country.name.common} className="flex flex-col w-[250px] bg-white dark:bg-[#2B3743] rounded-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out shadow-sm">
              <Image
                src={country.flags.png}
                alt={country.name.common}
                width={300}
                height={200}
                className="bg-cover h-36 w-full object-cover"
              />
              <div className='p-4'>
                <h1 className='text-lg font-bold'>{country.name.common}</h1>
                <div className='pt-2'>
                  <p><strong>Population:</strong> {country.population}</p>
                  <p><strong>Region:</strong> {country.region}</p>
                  <p><strong>Capital:</strong> {country.capital}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div >

  );
}
