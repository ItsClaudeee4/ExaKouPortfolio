import React from "react";
import "./Btn.css";

function Btn({ BtnText, link }) {
  const handleClick = () => {
    // Opens external link in a new tab safely
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button className="btnA" onClick={handleClick}>
      {BtnText}
    </button>
  );
}

export default Btn;
