const regex = {
  commas: /,/g,
  leadingZeros: /^0+(?!$)/,
  nonDigitCharacters: /\D/g,
  rightmostTwoDigits: /(\d)(\d{2})$/,
  everyThreeDigits: /(?=(\d{3})+(\D))\B/g,
};

export default regex;
