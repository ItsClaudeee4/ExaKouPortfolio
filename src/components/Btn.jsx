import React from "react";
import "./Btn.css";

function Btn({ BtnText, link }) {
  const handleClick = () => {
    window.open(link, "_blank"); // opens in a new tab
  };

  return (
    <button className="btnA" onClick={handleClick}>
      {BtnText}
    </button>
  );
}

export default Btn;
