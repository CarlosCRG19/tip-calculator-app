import styled, { css } from 'styled-components';

const StyledInput = styled.div`
  height: 3rem;
  display: flex;
  position: relative;
  align-items: center;

  & img {
    width: 1rem;
    position: absolute;

    top: 0.6rem;
    left: 1.5rem;
  }

  & input {
    width: 100%;
    height: 100%;

    border: none;
    padding: 0.5rem 1.5rem 0.5rem 4rem;
    direction: rtl;
    font-size: 1.7rem;    
    border-radius: 0.35rem;
    
    ${({ theme }) => css`
      color: ${theme.colors.veryDarkCyan};
      font-weight: ${theme.typography.fontWeight.bold};
      background-color: ${theme.colors.lightGrayishCyan2};  
    `}
  }
  
  & input:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.strongCyan};
  }
`;

export { StyledInput };