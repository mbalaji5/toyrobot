import { fireEvent, render, screen } from "@testing-library/react";
import { Robot } from ".";

describe("Should validate Robot component", () => {
  it("should validate snapshot", () => {
    const { baseElement } = render(<Robot />);
    expect(baseElement).toMatchSnapshot();
  });
});
describe("should validate the use case", () => {
  // Use case 1:
  // > PLACE 0,0,NORTH
  // > MOVE
  // > REPORT
  // Output: 0,1,NORTH
  it("should validate  usecase 1", () => {
    render(<Robot />);
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 0,0,NORTH" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "REPORT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    expect(screen.getByText(">Output 0,1,NORTH")).toBeDefined();
  });

  // UseCase 2:
  // > PLACE 0,0,NORTH
  // > LEFT
  // > REPORT
  // Output: 0,0,WEST
  it("should validate usecase 2", () => {
    render(<Robot />);
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 0,0,NORTH" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "LEFT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "REPORT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    expect(screen.getByText(">Output 0,0,WEST")).toBeDefined();
  });
  // Use case 3:
  // > PLACE 1,2,EAST
  // > MOVE
  // > MOVE
  // > LEFT
  // > MOVE
  // > REPORT
  // Output: 3,3,NORTH
  it("should validate usecase 3", () => {
    render(<Robot />);
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 1,2,EAST" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "LEFT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "REPORT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    expect(screen.getByText(">Output 3,3,NORTH")).toBeDefined();
  });

  //Use case 4:
  // > PLACE 1,2,EAST
  // > MOVE
  // > LEFT
  // > MOVE
  // > PLACE 3,1
  // > MOVE
  // > REPORT
  // Output: 3,2,NORTH
  it("should validate usecase 4", () => {
    render(<Robot />);
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 1,2,EAST" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "LEFT" }
    });

    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 3,1" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "MOVE" }
    });
    fireEvent.click(screen.getByText("Submit"), {});
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "REPORT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    expect(screen.getByText(">Output 3,2,NORTH")).toBeDefined();
  });
});

describe("should Validate error message", () => {
  it("should validate input field and click", () => {
    render(<Robot />);
    fireEvent.change(screen.getByTestId("inputCommend"), {
      target: { value: "PLACE 0,0,NORT" }
    });
    fireEvent.click(screen.getByText("Submit"), {});

    expect(
      screen.getByText(
        'Please enter valid place commend.Format:"Place x,y,east | west | north | south"'
      )
    ).toBeDefined();
  });
});
