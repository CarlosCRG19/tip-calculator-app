import styled, { css } from "styled-components";

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
