// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
  // Convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.07;
  // return the dollar value
  return valueInDollar;
};

// This is my function that sums two numbers
let oneEuroIs = {
  JPY: 156.5, // japan yen
  USD: 1.07, // us dollar
  GBP: 0.87, // british pound
};
const fromDollarToYen = (dollar) => {
  let euros = dollar / oneEuroIs["USD"];
  let yens = euros * oneEuroIs["JPY"];
  return yens;
};

const fromYenToPound = (yen) => {
  let euros = yen / oneEuroIs["JPY"];
  let pounds = euros * oneEuroIs["GBP"];
  return pounds;
};

// This is my function that sums two numbers
const sum = (a, b) => {
  return a + b;
};

// Just a console log for ourselves
console.log(sum(7, 3));

// Export the function to be used on other files
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// Just a console log for ourselves
console.log(fromDollarToYen(3.5));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));

// Export the function to be used on other files
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, sum, fromDollarToYen, fromYenToPound };
