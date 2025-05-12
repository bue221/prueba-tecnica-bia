
import { Country } from '@/types/country';

export async function GET(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const name = searchParams.get('name');

    if (!region) {
        return Response.json({ error: 'Parámetro "region" es requerido' }, { status: 400 });
    }

    try {
        const apiUrl = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`Falló la consulta a la API externa: ${res.status}`);
        }

        const countries: Country[] = await res.json();

        const filtered = name
            ? countries.filter((c) =>
                c.name.common.toLowerCase().includes(name.toLowerCase())
            )
            : countries;

        return Response.json(filtered, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error en API:', error.message);
        } else {
            console.error('Error en API:', error);
        }
        return Response.json({ error: 'Error interno en el servidor' }, { status: 500 });
    }
}