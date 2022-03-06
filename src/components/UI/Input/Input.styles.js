import styled, { css } from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  direction: rtl;
  font-size: 1.5rem;
  border-radius: 0.35rem;
  padding: 0 0.9rem;

  ${({ theme }) => css`
    color: ${theme.colors.veryDarkCyan};
    font-weight: ${theme.typography.fontWeight.bold};
    background-color: ${theme.colors.lightGrayishCyan2};

    &::placeholder {
      color: ${theme.colors.darkGrayishCyan2};
    }
  `}

  ${({ invalid }) =>
    invalid
      ? css`
          outline: none;
          border: 2.5px solid ${({ theme }) => theme.colors.brown};
        `
      : css`
          &:focus {
            outline: none;
            border: 2.5px solid ${({ theme }) => theme.colors.strongCyan};
          }
        `}
`;

export default StyledInput;
