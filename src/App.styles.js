import styled, { css } from "styled-components";

import { Card } from "components/UI";

const Container = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 100vh;
  }
`;

const Content = styled(Card)`
  border-radius: 1rem 1rem 0 0;
  box-sizing: border-box;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-weight: ${theme.typography.fontWeight.bold};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 60rem;
    height: 32rem;
    padding: 1.2rem;

    border-radius: 1rem;
  }
`;

export { Container, Content };
