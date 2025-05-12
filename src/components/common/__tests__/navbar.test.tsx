import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Navbar from "../navbar";

describe("Navbar", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Navbar />);

        expect(getByText("Where in the world?")).toBeInTheDocument();
    });
});
