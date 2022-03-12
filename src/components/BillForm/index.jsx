import React, { useState } from "react";

import { maskCurrency, regex } from "utils";
import { useBill } from "stores/bill-context";
import { dollarIcon, personIcon } from "assets";

import { Button, InputWithIcon } from "components/UI";

import {
  CustomTipInput,
  ButtonGroup,
  Error,
  InputHeader,
  Label,
  StyledBillForm,
} from "./BillForm.styles";

const tipOptions = ["5", "10", "15", "25", "50"];

const maskNumberOfPeople = (value) => {
  const { leadingZeros, nonDigitCharacters } = regex;

  let maskedNumberOfPeople = value.replace(nonDigitCharacters, "");
  maskedNumberOfPeople = maskedNumberOfPeople.replace(leadingZeros, "");
  // TODO: change this regex to a more meaningful name
  maskedNumberOfPeople = maskedNumberOfPeople.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    "$1,"
  );

  return maskedNumberOfPeople;
};

const BillForm = () => {
  const [customTip, setCustomTip] = useState("");

  const { bill, setBill, tip, setTip, numberOfPeople, setNumberOfPeople } =
    useBill();

  const isValidNumberOfPeople = () => {
    return +numberOfPeople.toString().replace(regex.commas, "") > 0;
  };

  const handleBillChange = (event) => {
    const input = event.target.value;

    if (!input) {
      setBill(0);
      return;
    }

    const maskedInput = maskCurrency(input);
    setBill(maskedInput);
  };

  const handleNumberOfPeopleChange = (event) => {
    const input = event.target.value;

    if (!input) {
      setNumberOfPeople(0);
      return;
    }

    const maskedInput = maskNumberOfPeople(input);
    setNumberOfPeople(maskedInput);
  };

  const handleTipChange = (event) => setTip(event.target.value);

  const handleCustomTipChange = (event) => {
    handleTipChange(event);

    let newCustomTip = event.target.value;
    newCustomTip = newCustomTip.replace(regex.nonDigitCharacters, "");

    setCustomTip(newCustomTip);
  };

  return (
    <StyledBillForm>
      <InputHeader>
        <Label htmlFor="">Bill</Label>
      </InputHeader>
      <InputWithIcon
        className="bill-form__input"
        inputMode="numeric"
        value={bill}
        icon={dollarIcon}
        onChange={handleBillChange}
      />

      <InputHeader>
        <Label htmlFor="">Select Tip %</Label>
      </InputHeader>
      <ButtonGroup className="bill-form__button-group">
        {tipOptions.map((option, index) => {
          return (
            <Button
              key={index}
              value={option}
              selected={option === tip}
              onClick={handleTipChange}
              fullWidth
            >
              {`${option}%`}
            </Button>
          );
        })}
        <CustomTipInput
          placeholder="Custom"
          inputMode="numeric"
          value={customTip}
          onChange={handleCustomTipChange}
        />
      </ButtonGroup>

      <InputHeader>
        <Label htmlFor="">Number of People</Label>
        {!isValidNumberOfPeople() && <Error>Can't be zero</Error>}
      </InputHeader>
      <InputWithIcon
        inputMode="numeric"
        value={numberOfPeople}
        icon={personIcon}
        invalid={!isValidNumberOfPeople()}
        onChange={handleNumberOfPeopleChange}
      />
    </StyledBillForm>
  );
};

export default BillForm;
