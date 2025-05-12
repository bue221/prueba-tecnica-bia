'use client'
import Image from 'next/image';
import React from 'react';
import { toast } from "sonner";


export default function Home() {

  const [countries, setCountries] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState<string>('');

  const getCountriesFlags = async () => {
    setError(null);
    setLoading(true);
    setCountries([]);
    try {
      const res = await fetch('https://restcountries.com/v3.1/all', {
        next: { revalidate: 60 },
      });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch {
      setError("Failed to fetch data");
      setLoading(false);
      toast.error("Failed to fetch data");
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCountriesFlags();
      if (data) {
        setCountries(data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container px-10 min-h-full min-w-full flex flex-wrap gap-12 items-center justify-center">
      {countries?.map((country) => (
        <div key={country.name.common} className="flex flex-col w-[250px] bg-white dark:bg-[#2B3743] rounded-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
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
      ))}
    </div>
  );
}
