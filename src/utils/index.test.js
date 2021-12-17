import {
  addToCommend,
  executeCommend,
  isValidCommend,
  isValidPlaceCommend,
  leftIndex,
  moveRobot,
  rightIndex,
  setPlaceValues
} from ".";

describe("Should validate isValidCommed method", () => {
  it("Should return true for valid commend", () => {
    const ValidCommends = ["place 1,1,west", "move", "report", "left", "right"];

    ValidCommends.forEach((commend) => {
      expect(isValidCommend(commend)).toBeTruthy();
    });
  });
  it("Should return false for invalid commend", () => {
    const inValidCommends = [
      "place1,1west",
      "place1,1,west",
      "mve",
      "eport",
      "let",
      "rght"
    ];

    inValidCommends.forEach((commend) => {
      expect(isValidCommend(commend)).toBeFalsy();
    });
  });
});

describe("Should validate isValidPlaceCommend method", () => {
  it("Should return true for valid commend", () => {
    const ValidCommends = [
      "place 1,1,west",
      "plaCe 1,1,North",
      "Place 1,1,south",
      "PLACE 1,1,east"
    ];

    ValidCommends.forEach((commend) => {
      expect(isValidPlaceCommend(commend)).toBeTruthy();
    });
  });
  it("Should return false for invalid commend", () => {
    const inValidCommends = [
      "place1,1west",
      "place1,1,west",
      "place1,1",
      "place",
      "place1,1,"
    ];

    inValidCommends.forEach((commend) => {
      expect(isValidPlaceCommend(commend)).toBeFalsy();
    });
  });
});
describe("Should validate right and left index method", () => {
  it("Should validate right from west", () => {
    expect(rightIndex("WEST")).toBe(3);
  });
  it("Should validate right from North", () => {
    expect(rightIndex("NORTH")).toBe(0);
  });
  it("Should validate left from west", () => {
    expect(leftIndex("WEST")).toBe(1);
  });
  it("Should validate left from North", () => {
    expect(leftIndex("NORTH")).toBe(2);
  });
});

describe("Should vadliate addToCommend function", () => {
  it("Should valdiate addToCommend", () => {
    const setFunction = jest.fn();
    addToCommend("testComment", [], setFunction);
    expect(setFunction).toBeCalledTimes(1);
    expect(setFunction).toBeCalledWith(["testComment"]);
  });
});

describe("Should validate setPlaceValues function", () => {
  it("Should valdiate setPlaceValues with place x,y,facing", () => {
    const setX = jest.fn();
    const setY = jest.fn();
    const setDirection = jest.fn();

    setPlaceValues("place 1,2,west", setX, setY, setDirection);
    expect(setX).toBeCalledTimes(1);
    expect(setX).toBeCalledWith("1");
    expect(setY).toBeCalledTimes(1);
    expect(setY).toBeCalledWith("2");
    expect(setDirection).toBeCalledTimes(1);
    expect(setDirection).toBeCalledWith("west");
  });
  it("Should valdiate setPlaceValues only place x,y", () => {
    const setX = jest.fn();
    const setY = jest.fn();
    const setDirection = jest.fn();

    setPlaceValues("place 1,2", setX, setY, setDirection);
    expect(setX).toBeCalledTimes(1);
    expect(setX).toBeCalledWith("1");
    expect(setY).toBeCalledTimes(1);
    expect(setY).toBeCalledWith("2");
    expect(setDirection).toBeCalledTimes(0);
  });
});

describe("Should validate executeCommend", () => {
  it("Should validate move", () => {
    const inputCommend = "move";
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "WEST";
    const setDirection = jest.fn();
    const commends = [];
    const setCommends = jest.fn();

    executeCommend(
      inputCommend,
      x,
      y,
      setX,
      setY,
      direction,
      setDirection,
      commends,
      setCommends
    );
    expect(setX).toBeCalledTimes(1);
    expect(setX).toBeCalledWith(0);
    expect(setY).toBeCalledTimes(0);
  });

  it("Should validate left case", () => {
    const inputCommend = "left";
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "EAST";
    const setDirection = jest.fn();
    const commends = [];
    const setCommends = jest.fn();

    executeCommend(
      inputCommend,
      x,
      y,
      setX,
      setY,
      direction,
      setDirection,
      commends,
      setCommends
    );
    expect(setDirection).toBeCalledTimes(1);
    expect(setDirection).toBeCalledWith("NORTH");
  });
  it("Should validate right case", () => {
    const inputCommend = "right";
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "EAST";
    const setDirection = jest.fn();
    const commends = [];
    const setCommends = jest.fn();

    executeCommend(
      inputCommend,
      x,
      y,
      setX,
      setY,
      direction,
      setDirection,
      commends,
      setCommends
    );
    expect(setDirection).toBeCalledTimes(1);
    expect(setDirection).toBeCalledWith("SOUTH");
  });
  it("Should validate report case", () => {
    const inputCommend = "report";
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "EAST";
    const setDirection = jest.fn();
    const commends = [];
    const setCommends = jest.fn();

    executeCommend(
      inputCommend,
      x,
      y,
      setX,
      setY,
      direction,
      setDirection,
      commends,
      setCommends
    );
    expect(setCommends).toBeCalledTimes(1);
    expect(setCommends).toBeCalledWith(["Output 1,1,EAST"]);
  });
});

describe("should validate moveRobot", () => {
  it("Should move west side", () => {
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "WEST";

    moveRobot(direction, x, y, setX, setY);
    expect(setX).toBeCalledTimes(1);
    expect(setX).toBeCalledWith(0);
    expect(setY).toBeCalledTimes(0);
  });
  it("Should move north side", () => {
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "NORTH";

    moveRobot(direction, x, y, setX, setY);
    expect(setY).toBeCalledTimes(1);
    expect(setY).toBeCalledWith(2);
    expect(setX).toBeCalledTimes(0);
  });
  it("Should move south side", () => {
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "SOUTH";

    moveRobot(direction, x, y, setX, setY);
    expect(setY).toBeCalledTimes(1);
    expect(setY).toBeCalledWith(0);
    expect(setX).toBeCalledTimes(0);
  });
  it("Should move east side", () => {
    const x = 1;
    const y = 1;
    const setX = jest.fn();
    const setY = jest.fn();
    const direction = "EAST";

    moveRobot(direction, x, y, setX, setY);
    expect(setX).toBeCalledTimes(1);
    expect(setX).toBeCalledWith(2);
    expect(setY).toBeCalledTimes(0);
  });
});
