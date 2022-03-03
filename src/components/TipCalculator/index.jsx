import React from 'react';

import { maskCurrency, regex } from 'utils';
import { useBill } from 'stores';

import {
  Amount,
  AmountPerPerson,
  AmountReason,
  Label,
  Reason,
  ResetButton,
  StyledTipCalculator,
} from './TipCalculator.styles';

const parseNumber = stringWithNumber => {
  return +stringWithNumber.toString().replace(regex.commas, '');
};

const renderAmountPerPerson = (label, amount) => (
  <AmountPerPerson>
    <AmountReason>
      <Reason>{label}</Reason>
      <Label>/ person</Label>
    </AmountReason>
    <Amount>{`$${maskCurrency(amount)}`}</Amount>
  </AmountPerPerson>
);

const TipCalculator = () => {
  const {
    bill,
    tip,
    numberOfPeople,
    resetBill,
    isInitialState,
  } = useBill();

  const billAsNum = parseNumber(bill);
  const tipAsNum = parseNumber(tip);
  const numberOfPeopleAsNum = parseNumber(numberOfPeople);

  const billPerPerson = billAsNum / numberOfPeopleAsNum || 0;
  const tipPerPerson = (billPerPerson * tipAsNum) / 100;
  const totalPerPerson = billPerPerson + tipPerPerson;

  return (
    <StyledTipCalculator>
      {renderAmountPerPerson('Tip Amount', tipPerPerson.toFixed(2))}
      {renderAmountPerPerson('Total', totalPerPerson.toFixed(2))}
      <ResetButton
        onClick={resetBill}
        disabled={isInitialState}
        fullWidth
      >
        RESET
      </ResetButton>
    </StyledTipCalculator>
  );
};

export default TipCalculator;
