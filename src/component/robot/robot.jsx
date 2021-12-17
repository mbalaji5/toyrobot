import { useState } from "react";
import {
  addToCommend,
  executeCommend,
  isValidCommend,
  isValidPlaceCommend,
  setPlaceValues
} from "../../utils";
import { InputField } from "../inputField";
import { Output } from "../output";
import { Error } from "../error";
import "./robot.css";

const Robot = () => {
  const [commends, setCommends] = useState([]);
  const [direction, setDirection] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [gotValidPlaceCommend, setGotValidPlaceCommend] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlecommend = (inputCommend) => {
    addToCommend(inputCommend, commends, setCommends);
    if (!gotValidPlaceCommend) {
      if (isValidPlaceCommend(inputCommend)) {
        setErrorMessage("");
        setPlaceValues(inputCommend, setX, setY, setDirection);
        setGotValidPlaceCommend(true);
      } else {
        setErrorMessage(
          'Please enter valid place commend.Format:"Place x,y,east | west | north | south"'
        );
      }
    } else if (isValidCommend(inputCommend)) {
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
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Please enter valid comment.should be from Left,Right,Move,Report,Place x,y"
      );
    }
  };

  const clear = () => {
    setX(0);
    setY(0);
    setDirection("");
    setCommends([]);
    setErrorMessage("");
  };

  return (
    <div className="container">
      <InputField handlecommend={handlecommend} clear={clear} />
      {commends && <Output commends={commends} />}
      {errorMessage && <Error errorMessage={errorMessage} />}
    </div>
  );
};

export default Robot;
