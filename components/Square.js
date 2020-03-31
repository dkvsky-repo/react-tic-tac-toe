import React from "react";

const style = {
  backgroundColor: "white",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  padding: "15px 20px"
};

const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
