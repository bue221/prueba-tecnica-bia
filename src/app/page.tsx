'use client'
import { CountryCard, CountryCardSkeleton } from '@/components/common/card';
import { FiltersCountriesList } from '@/components/common/filters';
import { Country } from '@/types/country';
import { useEffect, useState } from 'react';


export default function Home() {

  const [name, setName] = useState<string>('');
  const [region, setRegion] = useState<string>('Europe');
  const [loading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const params = new URLSearchParams({ region });
      if (name) params.append('name', name);

      const res = await fetch(`/api/countries?${params.toString()}`, { next: { revalidate: 60 } });
      const data: Country[] = await res.json();
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, [region, name]);


  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <FiltersCountriesList
        name={name}
        setName={setName}
        region={region}
        setRegion={setRegion}
      />
      <div className="container px-10 min-h-full min-w-full flex flex-wrap gap-12 ">
        {loading
          && (
            <>
              {Array.from({ length: 20 }).map((_, index) => (
                <CountryCardSkeleton key={index} index={index} />
              ))}
            </>
          )}
        {!loading && countries?.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
        {!loading && (countries?.length ?? 0) === 0 && (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-2xl font-bold text-gray-800">No countries found</h1>
            <p className="text-gray-600">Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div >
  );
}
