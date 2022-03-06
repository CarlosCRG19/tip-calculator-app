import styled, { css } from "styled-components";

import { Button, Card } from "components/UI";

const AmountPerPerson = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 1.8rem;
  }
`;

const AmountReason = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Amount = styled.p`
  color: ${({ theme }) => theme.colors.strongCyan};
  margin: 0;
  font-size: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3rem;
  }
`;

const Label = styled.p`
  margin: 0;

  ${({ theme, variant }) =>
    variant === "secondary"
      ? css`
          color: ${theme.colors.darkGrayishCyan2};
          font-size: 0.9rem;
        `
      : css`
          color: ${theme.colors.white};
          font-size: 1rem;
        `}
`;

const ResetButton = styled(Button)`
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.veryDarkCyan};
  background-color: ${({ theme }) => theme.colors.strongCyan};
  margin-top: 1rem;

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.darkGrayishCyan1};
      background-color: ${theme.colors.darkGrayishCyan2};
    `}
`;

const StyledTipCalculator = styled(Card)`
  padding: 1.5rem;
  margin: 0.5rem 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.veryDarkCyan};
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 1rem;
    padding: 2.5rem;
  }
`;

export {
  Amount,
  AmountPerPerson,
  AmountReason,
  Label,
  ResetButton,
  StyledTipCalculator,
};
