import regex from './regex';

const maskCurrency = (value) => {
  const { nonDigitCharacters, rightmostTwoDigits, everyThreeDigits, leadingZeros } = regex;

  let maskedCurrency = value.replace(nonDigitCharacters, '');
  maskedCurrency = maskedCurrency.replace(leadingZeros, '');
  maskedCurrency = maskedCurrency.replace(rightmostTwoDigits, '$1.$2');
  maskedCurrency = maskedCurrency.replace(everyThreeDigits, ',');

  return maskedCurrency;
};

export default maskCurrency;
