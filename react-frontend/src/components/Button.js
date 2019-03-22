import React from 'react';
import '../css/Button.css';



function Button() {
  function handleClick(e) {
    e.preventDefault();
      window.location.reload();
  }

  return (
    <button className="quoteButton" onClick={handleClick}>
      Generate Quote
    </button>
  );
}


export default Button;
