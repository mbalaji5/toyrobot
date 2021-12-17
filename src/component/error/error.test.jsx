import { render, screen } from "@testing-library/react";
import { Error } from ".";

describe("Should validate Error component", () => {
  it("should validate snapshot", () => {
    const { baseElement } = render(<Error errorMessage="Error message" />);
    expect(baseElement).toMatchSnapshot();
  });
  it("should validate Error message", () => {
    render(<Error errorMessage="Error message" />);

    const element = screen.getByText(/Error message/i);
    expect(element).toBeDefined();
  });
});
