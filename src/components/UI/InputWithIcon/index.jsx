import React from 'react';

import { Input } from 'components/UI';

import { StyledInputWithIcon } from './InputWithIcon.styles';

const InputWithIcon = ({ icon,  ...inputProps}) => {
  return (
    <StyledInputWithIcon>
      <img src={icon} alt="" />
      <Input {...inputProps} />
    </StyledInputWithIcon>
  );
};

// debe de no tener fondo 
// tiene un placeholder en 0s
// cuando está on focus debe de poner un borde de color
// cuando tiene un error utiliza un naranja además de un mensaje de erro

export default InputWithIcon;

