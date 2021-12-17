import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const InputField = ({ handlecommend, clear }) => {
  const [inputCommend, setInputCommend] = useState("");

  const onInputCommendBlur = ({ target: { value } }) => {
    setInputCommend(value.trim());
  };

  const onInputCommendChange = ({ target: { value } }) => {
    setInputCommend(value.toUpperCase());
  };

  const onSubmit = () => {
    handlecommend(inputCommend);
    setInputCommend("");
  };
  const onClear = () => {
    clear();
    setInputCommend("");
  };
  return (
    <>
      Please enter commend:
      <input
        data-testid="inputCommend"
        type="text"
        id="inputCommend"
        value={inputCommend}
        onChange={onInputCommendChange}
        onBlur={onInputCommendBlur}
      />
      <button id="submit" onClick={onSubmit}>
        Submit
      </button>
      <button id="clear" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

InputField.propTypes = {
  handlecommend: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

InputField.defaultProps = {
  handlecommend: () => {},
  clear: () => {}
};

export default InputField;
