import { render } from "@testing-library/react";
import { Toyrobot } from ".";

describe("Should validate Error component", () => {
  it("should validate snapshot", () => {
    const { baseElement } = render(<Toyrobot />);
    expect(baseElement).toMatchSnapshot();
  });
});
