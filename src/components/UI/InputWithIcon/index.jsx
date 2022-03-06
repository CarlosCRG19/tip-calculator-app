import React from "react";

import { Input } from "components/UI";

import { StyledInputWithIcon } from "./InputWithIcon.styles";

const InputWithIcon = ({ icon, className, ...inputProps }) => {
  return (
    <StyledInputWithIcon className={className}>
      <img src={icon} alt="" />
      <Input {...inputProps} />
    </StyledInputWithIcon>
  );
};

export default InputWithIcon;
