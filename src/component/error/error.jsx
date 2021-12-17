import PropTypes from "prop-types";
import React from "react";
import "./error.css";

const Error = ({ errorMessage }) => {
  return (
    <>
      <div className="errormessage">
        <span>{errorMessage}</span>
      </div>
    </>
  );
};
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

Error.defaultProps = {
  errorMessage: "NA"
};

export default Error;
