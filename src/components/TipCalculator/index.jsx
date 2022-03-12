import React from "react";

import { maskCurrency, regex } from "utils";
import { useBill } from "stores";

import {
  Amount,
  AmountPerPerson,
  AmountReason,
  Label,
  ResetButton,
  StyledTipCalculator,
} from "./TipCalculator.styles";

const MILLION = 1000000;

const parseNumber = (stringWithNumber) => {
  return +stringWithNumber.toString().replace(regex.commas, "");
};

const normalizeAmount = (amount) => {
  if (!amount) {
    return;
  }

  if (amount > MILLION) {
    return amount.toExponential(2);
  }

  return maskCurrency(amount.toFixed(2));
};

const renderAmountPerPerson = (label, amount) => {
  return (
    <AmountPerPerson>
      <AmountReason>
        <Label>{label}</Label>
        <Label variant="secondary">/ person</Label>
      </AmountReason>
      <Amount>{`$${normalizeAmount(amount) || "0.00"}`}</Amount>
    </AmountPerPerson>
  );
};

const TipCalculator = () => {
  const { bill, tip, numberOfPeople, resetBill, isInitialState } = useBill();

  const billAsNum = parseNumber(bill);
  const tipAsNum = parseNumber(tip);
  const numberOfPeopleAsNum = parseNumber(numberOfPeople);

  const billPerPerson = billAsNum / numberOfPeopleAsNum || 0;
  const tipPerPerson = (billPerPerson * tipAsNum) / 100;
  const totalPerPerson = billPerPerson + tipPerPerson;

  return (
    <StyledTipCalculator>
      <div>
        {renderAmountPerPerson("Tip Amount", tipPerPerson)}
        {renderAmountPerPerson("Total", totalPerPerson)}
      </div>
      <ResetButton onClick={resetBill} disabled={isInitialState} fullWidth>
        RESET
      </ResetButton>
    </StyledTipCalculator>
  );
};

export default TipCalculator;
