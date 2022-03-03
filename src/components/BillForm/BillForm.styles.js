import styled from 'styled-components';

import { Input } from 'components/UI';

const CustomTipInput = styled(Input)`
  width: 100%;
  height: 100%;

  font-size: 1.4rem;

  padding: 0 1.5rem;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: 1fr 1fr;  
  grid-template-rows: 1fr 1fr 1fr;  
  grid-gap: 1rem;
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colors.brown};
  margin: 0;
  font-size: 1rem;
`;
  
const InputHeader = styled.div`
  margin-bottom: 1rem;
  
  display:flex;
  justify-content: space-between;
  
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrayishCyan1};
  font-size: 1rem;
`;

const StyledBillForm = styled.div`
  padding: 2rem;
`;

export { CustomTipInput, ButtonGroup, Error, InputHeader, Label,  StyledBillForm };
