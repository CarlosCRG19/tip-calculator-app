import styled, { css } from "styled-components";

import { Card } from 'components/UI';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Card)`
  width: 100%;
  height: 100%;

  gap: 1.5rem;
  border-radius: 1rem 1rem 0 0;
  box-sizing: border-box;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop }) {
    width: 64%;
    padding: 2rem;
    flex-direction: row;
    align-items: stretch;

    gap: 2rem;
    border-radius: 1rem;
  };
`;

export { Container, Content };
