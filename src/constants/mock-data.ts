import { Country } from "@/types/country";

export const mockCountries: Country[] = [
    {
        cca3: "USA",
        name: {
            common: "United States",
            official: "United States of America",
            nativeName: {
                eng: {
                    official: "United States of America",
                    common: "United States"
                }
            }
        },
        region: "Americas",
        population: 331002651,
        capital: "Washington, D.C.",
        subregion: "North America",
        languages: {
            eng: "English"
        },
        currencies: {
            USD: {
                name: "United States Dollar",
                symbol: "$"
            }
        },
        flags: {
            png: "https://restcountries.com/data/usa.png",
            svg: "https://restcountries.com/data/usa.svg"
        },
        borders: ["CAN", "MEX"],
        tld: [".us"]
    },
    {

        cca3: "CAN",
        name: {
            common: "Canada",
            official: "Canada",
            nativeName: {
                eng: {
                    official: "Canada",
                    common: "Canada"
                }
            }
        },
        region: "Americas",
        population: 37742154,
        capital: "Ottawa",
        subregion: "North America",
        languages: {
            eng: "English",
            fra: "French"
        },
        currencies: {
            CAD: {
                name: "Canadian Dollar",
                symbol: "$"
            }
        },
        flags: {
            png: "https://restcountries.com/data/can.png",
            svg: "https://restcountries.com/data/can.svg"
        },
        borders: ["USA"],
        tld: [".ca"]
    }]