import React from 'react';

import { maskCurrency, regex } from 'utils';
import { useBill } from 'stores/bill-context';

import { Button, Input } from 'components/UI';

const tipOptions = ['5', '10', '15', '25', '50'];

const maskNumberOfPeople = (value) => {
  const { leadingZeros, nonDigitCharacters } = regex;

  let maskedNumberOfPeople = value.replace(nonDigitCharacters, '');
  maskedNumberOfPeople = maskedNumberOfPeople.replace(leadingZeros, '');
  // TODO: change this regex to a more meaningful name
  maskedNumberOfPeople = maskedNumberOfPeople.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return maskedNumberOfPeople;
};

const BillInput = () => {
  const { bill, setBill, tip, setTip, numberOfPeople, setNumberOfPeople } = useBill();

  const handleBillChange = (event) => {
    const input = event.target.value;

    if (!input) {
      setBill(0);
      return;
    }

    const maskedInput = maskCurrency(event.target.value);
    setBill(maskedInput);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    const input = event.target.value;

    if (!input) {
      setNumberOfPeople(0);
      return;
    }

    const maskedInput = maskNumberOfPeople(event.target.value);
    setNumberOfPeople(maskedInput);
  };

  return (
    <div>
      <Input type="text" value={bill} onChange={handleBillChange} />
      {tipOptions.map((option, index) => {
        return (
          <Button key={index} onClick={handleTipChange} value={option} selected={option === tip}>
            {option}%
          </Button>
        );
      })}
      <Input type="text" value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
    </div>
  );
};

export default BillInput;
