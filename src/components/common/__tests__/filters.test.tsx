import { render } from "@testing-library/react";
import { FiltersCountriesList } from "../filters";

describe("FiltersCountriesList", () => {
    it("renders correctly", () => {
        const mockSetName = jest.fn();
        const mockSetRegion = jest.fn();

        const { getByPlaceholderText } = render(
            <FiltersCountriesList
                name=""
                setName={mockSetName}
                region=""
                setRegion={mockSetRegion}
            />
        );

        expect(getByPlaceholderText("Search for a country..."))
            .toBeInTheDocument();
    });
});
