import styled, { css } from 'styled-components';

import { Button, Card } from 'components/UI';

const AmountPerPerson = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const AmountReason = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Amount = styled.p`
  color: ${({ theme }) => theme.colors.strongCyan};
  margin: 0;
  font-size: 3rem;
`;

const Reason = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-size: 1rem;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.darkGrayishCyan2};
  margin: 0;
  font-size: 0.9rem;
`;

const ResetButton = styled(Button)`
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.veryDarkCyan};
  background-color: ${({ theme }) => theme.colors.strongCyan};
  margin-top: 1rem;

  ${({ theme, disabled }) => disabled
    && css`
      color: ${theme.colors.darkGrayishCyan1};
      background-color: ${theme.colors.darkGrayishCyan2};
    `}
`;

const StyledTipCalculator = styled(Card)`
  padding: 1.5rem;
  margin: 0.5rem 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.veryDarkCyan};
`;

export {
  Amount,
  AmountPerPerson,
  AmountReason,
  Label,
  Reason,
  ResetButton,
  StyledTipCalculator,
};
