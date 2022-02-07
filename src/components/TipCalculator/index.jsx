import React from 'react';

import { regex } from 'utils';
import { useBill } from 'stores';

const parseNum = (stringWithNum) => {
  return +stringWithNum.toString().replace(regex.commas, '');
}

const TipCalculator = () => {
  const { bill, tip, numberOfPeople, resetBill } = useBill(); 

  const billAsNum = parseNum(bill);
  const tipAsNum = parseNum(tip);
  const numberOfPeopleAsNum = parseNum(numberOfPeople);

  const billPerPerson = billAsNum / numberOfPeopleAsNum;
  const tipPerPerson = (billPerPerson * tipAsNum) / 100;
  const totalPerPerson = billPerPerson + tipPerPerson;

  return (
    <div>
      <h1>Tip Per Person: {tipPerPerson.toFixed(2)}</h1>
      <h1>Total Per Person: {totalPerPerson.toFixed(2)}</h1>
      <button onClick={resetBill}>Reset</button>
    </div>
  );
};

export default TipCalculator;
