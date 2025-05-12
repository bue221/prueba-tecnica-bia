import { mockCountries } from "@/constants/mock-data";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { CountryCard } from "../card";

test('loads and displays greeting', async () => {
    // ARRANGE
    const { getByText } = render(<CountryCard country={mockCountries[0]} />)

    expect(getByText("Test Country")).toBeInTheDocument();
    expect(getByText(/Population:/)).toBeInTheDocument();
})