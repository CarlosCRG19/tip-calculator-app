import React from 'react';

import { appLogo } from 'assets';

import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <img src={appLogo} alt="logo" />
    </StyledHeader>
  );
};

export default Header
