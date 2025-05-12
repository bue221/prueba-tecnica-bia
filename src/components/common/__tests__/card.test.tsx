import { mockCountries } from "@/constants/mock-data";
import { render } from "@testing-library/react";
import { CountryCard } from "../card";

describe("CountryCard", () => {
    it("renders correctly", () => {
        const { getByText, getByAltText } = render(<CountryCard country={mockCountries[0]} />);

        expect(getByText("Test Country")).toBeInTheDocument();
        expect(getByText(/Population:/)).toBeInTheDocument();
        expect(getByText(/Region:/)).toBeInTheDocument();
        expect(getByText(/Capital:/)).toBeInTheDocument();
        expect(getByAltText("Test Country")).toBeInTheDocument();
    });
});
