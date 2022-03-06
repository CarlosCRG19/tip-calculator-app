import styled from "styled-components";

import { Input } from "components/UI";

const CustomTipInput = styled(Input)`
  width: 100%;
  height: 100%;

  font-size: 1.4rem;

  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colors.brown};
  margin: 0;
  font-size: 1rem;
`;

const InputHeader = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

const InputWithIcon = styled.div`
  height: 2rem;
  display: flex;
  position: relative;
  align-items: center;

  & img {
    width: 0.75rem;
    position: absolute;

    top: 0.5rem;
    left: 1.2rem;
  }

  & input {
    padding: 0.5rem 1.2rem 0.5rem 3.15rem;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrayishCyan1};
  font-size: 1rem;
`;

const StyledBillForm = styled.div`
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1.8rem 2.2rem;

    .bill-form__input {
      margin-bottom: 3.2rem;
    }

    .bill-form__button-group {
      margin-bottom: 2.7rem;
    }
  }
`;

export {
  CustomTipInput,
  ButtonGroup,
  Error,
  InputHeader,
  InputWithIcon,
  Label,
  StyledBillForm,
};
