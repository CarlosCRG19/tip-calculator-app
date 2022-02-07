import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    ${({ theme }) => css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.veryDarkCyan};
      font-size: 1.4rem;
      font-weight: ${theme.typography.fontWeight.bold};
      border: none;
      border-radius: 5px;
      height: 3rem;
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
    `}}

  ${({ theme, selected, disabled }) =>
    !selected &&
    !disabled &&
    css`
      &:hover {
        color: ${theme.colors.veryDarkCyan};
        background-color: ${theme.colors.lightGrayishCyan1};
      }
    `}
`;

export default StyledButton;
