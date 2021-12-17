export const directions = ["EAST", "SOUTH", "WEST", "NORTH"];

export const isValidCommend = (commend) => {
  return new RegExp(
    "(PLACE\\s[0-5],[0-5](,?(SOUTH|NORTH|EAST|WEST))?)|MOVE|LEFT|RIGHT|REPORT"
  ).test(commend.toUpperCase());
};

export const isValidPlaceCommend = (commend) => {
  return new RegExp("(PLACE\\s[0-5],[0-5],(SOUTH|NORTH|EAST|WEST))").test(
    commend.toUpperCase()
  );
};

export const rightIndex = (direction) =>
  directions.indexOf(direction) === 3 ? 0 : directions.indexOf(direction) + 1;

export const leftIndex = (direction) =>
  directions.indexOf(direction) === 0
    ? directions.length - 1
    : directions.indexOf(direction) - 1;

export const moveRobot = (direction, x, y, setX, setY) => {
  switch (direction.toLowerCase()) {
    case "north":
      setY(y < 5 ? parseInt(y) + 1 : y);
      break;
    case "south":
      setY(y >= 1 ? parseInt(y) - 1 : y);
      break;
    case "east":
      setX(x < 5 ? parseInt(x) + 1 : x);
      break;
    case "west":
      setX(x >= 1 ? parseInt(x) - 1 : x);
      break;
    default:
      break;
  }
};

export const addToCommend = (inputCommend, commends, setCommends) => {
  const comm = Object.assign([], commends);
  comm.push(`${inputCommend}`);
  setCommends(comm);
};
export const setPlaceValues = (inputCommend, setX, setY, setDirection) => {
  const b = inputCommend.split(" ");
  const a = b[1].split(",");
  setX(a[0]);
  setY(a[1]);

  if (a.length === 3) {
    setDirection(a[2]);
  }
};

export const executeCommend = (
  inputCommend,
  x,
  y,
  setX,
  setY,
  direction,
  setDirection,
  commends,
  setCommends
) => {
  if (inputCommend.indexOf("PLACE") >= 0) {
    setPlaceValues(inputCommend, setX, setY, setDirection);
  }

  switch (inputCommend.toLowerCase()) {
    case "move":
      moveRobot(direction, x, y, setX, setY);
      break;
    case "left":
      setDirection(directions[leftIndex(direction)]);
      break;
    case "right":
      setDirection(directions[rightIndex(direction)]);
      break;
    case "report":
      addToCommend(`Output ${x},${y},${direction}`, commends, setCommends);
      break;
  }
};
