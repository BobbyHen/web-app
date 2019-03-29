import React from 'react';
//import './css/Button.css';


const buttonStyle = {
  width: "700px",
  height: "50px",
  backgroundColor: "#1a8cff",
  color: "#fff",
  fontSize: "18px",
  borderRadius: "5px",
  textRecoration: "none"
}

function Button() {
  function handleClick(event) {
    event.preventDefault();
      window.location.reload(); // Not final
  }

  return (
    <button className="quoteButton" style={buttonStyle} onClick={handleClick}>
      Generate Quote
    </button>
  );
}


export default Button;
