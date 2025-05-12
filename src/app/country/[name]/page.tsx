
import { Country } from '@/types/country';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const fetchCountry = async (name: string): Promise<Country | null> => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data[0];
    } catch {
        return null;
    }
};

const fetchBorderCountries = async (codes: string[]): Promise<string[]> => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((c: any) => c.name.common);
};

export default async function CountryPage({ params }: { params: { name: string } }) {
    const country = await fetchCountry(params.name);
    if (!country) notFound();

    const nativeName = country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common;

    const languages = Object.values(country.languages || {}).join(', ');
    const currencies = Object.values(country.currencies || {})
        .map((c) => c.name)
        .join(', ');
    const borders = country.borders ? await fetchBorderCountries(country.borders) : [];

    return (
        <div className="container mx-auto px-6 py-10">
            <button
                onClick={() => history.back()}
                className="mb-8 px-4 py-2 rounded shadow bg-white border hover:bg-gray-100"
            >
                ← Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Image
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    width={640}
                    height={480}
                    className="rounded shadow"
                />

                <div>
                    <h1 className="text-4xl font-bold mb-6">{country.name.common}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p><strong>Native Name:</strong> {nativeName}</p>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Sub Region:</strong> {country.subregion}</p>
                            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain:</strong> {country.tld?.join(', ')}</p>
                            <p><strong>Currencies:</strong> {currencies}</p>
                            <p><strong>Languages:</strong> {languages}</p>
                        </div>
                    </div>

                    {borders.length > 0 && (
                        <div className="mt-8">
                            <h2 className="font-semibold mb-2">Border Countries:</h2>
                            <div className="flex flex-wrap gap-2">
                                {borders.map((b) => (
                                    <span
                                        key={b}
                                        className="px-3 py-1 border rounded shadow text-sm bg-white hover:bg-gray-100"
                                    >
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}