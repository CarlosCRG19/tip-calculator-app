import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  height: 3rem;
  cursor: pointer;
  font-size: 1.4rem;
  
  border: none;
  border-radius: 5px;
    
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.veryDarkCyan};
    font-weight: ${theme.typography.fontWeight.bold};
    
    &:hover {
      color: ${theme.colors.veryDarkCyan};
      background-color: ${theme.colors.lightGrayishCyan1};
    }
  `}
  
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: 7.1rem;
        `}

  ${({ theme, selected }) =>
    selected &&
    css`
      color: ${theme.colors.veryDarkCyan};
      background-color: ${theme.colors.strongCyan};
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.darkGrayishCyan1};
      background-color: ${theme.colors.darkGrayishCyan2};
    `}
`;

export default StyledButton;
