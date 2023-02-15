import React from 'react';
import './Button.css';
  
const Button = ({ label, buttonStyle, buttonSize, clickHandler }) => {

  const style = ['btn--primary', 'btn--outline'];
  const size = ['btn--medium', 'btn--large'];

  const checkButtonStyle = style.includes(buttonStyle) ? 
  buttonStyle : style[0];

  const checkButtonSize = size.includes(buttonSize) ?
  buttonSize : size[1];

  return (
    <button 
    onClick={ clickHandler }
    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
       { label }
    </button>
  )
}

export default Button;  