import React from 'react';
import { StyledInput } from './Input.styles';
import dollarIcon from 'assets/icon-dollar.svg';

const Input = ({ icon,  ...inputProps}) => {
  return (
    <StyledInput>
      <img src={dollarIcon} alt="" />
      <input {...inputProps} type="text" />
    </StyledInput>
  );
};

// debe de no tener fondo 
// tiene un placeholder en 0s
// cuando está on focus debe de poner un borde de color
// cuando tiene un error utiliza un naranja además de un mensaje de erro

export default Input;
