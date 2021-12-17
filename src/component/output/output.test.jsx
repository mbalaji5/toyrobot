import { render, screen } from "@testing-library/react";
import { Output } from ".";

describe("Should validate Error component", () => {
  it("should validate snapshot", () => {
    const { baseElement } = render(<Output commends={[]} />);
    expect(baseElement).toMatchSnapshot();
  });
  it("should validate snapshot with commends", () => {
    const { baseElement } = render(
      <Output commends={["place 1,2,west", "move"]} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it("should validate text", () => {
    render(<Output commends={["place 1,2,west", "move"]} />);

    const element = screen.getByText(/place 1,2,west/i);
    expect(element).toBeDefined();
  });
});
