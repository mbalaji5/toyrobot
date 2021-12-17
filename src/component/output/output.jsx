import PropTypes from "prop-types";
import React from "react";
import "./output.css";
const Output = ({ commends }) => {
  return (
    <>
      <div className="output">
        {commends &&
          commends.map((item, index) => {
            return (
              <div key={index}>
                <span>
                  {`>`}
                  {item}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

Output.propTypes = {
  commends: PropTypes.array.isRequired
};

Output.defaultProps = {
  commends: []
};
export default Output;
