import regex from "./regex";

const isDecimalUnderOne = (value) => !isNaN(value) && +value < 1;

const maskCurrency = (value) => {
  if (value === "0" || value === "0.00") {
    return "";
  }

  if (isDecimalUnderOne(value)) {
    return +value;
  }

  const {
    nonDigitCharacters,
    rightmostTwoDigits,
    everyThreeDigits,
    leadingZeros,
  } = regex;

  let maskedCurrency = value.replace(nonDigitCharacters, "");
  maskedCurrency = maskedCurrency.replace(leadingZeros, "");
  maskedCurrency = maskedCurrency.replace(rightmostTwoDigits, "$1.$2");
  maskedCurrency = maskedCurrency.replace(everyThreeDigits, ",");

  return maskedCurrency;
};

export default maskCurrency;
