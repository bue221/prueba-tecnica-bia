import { fireEvent, render } from "@testing-library/react";
import { ModeToggle } from "../theme-toggle-btn";

describe("ModeToggle", () => {
    it("renders and toggles theme", () => {
        const { getByRole } = render(<ModeToggle />);

        const button = getByRole("button");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        // Add assertions for theme change if applicable
    });
});
