export interface Country {
    cca3: string;
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    region: string;
    population: number;
    capital: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    flags: {
        png: string;
        svg: string;
    };
    borders?: string[];
}