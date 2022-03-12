import regex from "./regex";

const maskCurrency = (value) => {
  if (value === "0" || value === "0.00") {
    return "";
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
