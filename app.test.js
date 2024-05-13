test("One euro should be 1.07 dollars", function () {
  // Import the function from app.js
  const { fromEuroToDollar } = require("./app.js");

  // Use the function like its supposed to be used
  const dollars = fromEuroToDollar(3.5);

  // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  // This is the comparison for the unit test
  expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

// Import the function sum from the app.js file
const { sum } = require("./app.js");

// Start your first test
test("adds 14 + 9 to equal 23", () => {
  // Inside the test we call our sum function with 2 numbers
  let total = sum(14, 9);

  // We expect the sum of those 2 numbers to be 23
  expect(total).toBe(23);
});

test("One dollar should be yens", function () {
  // Import the function from app.js
  const { fromDollarToYen } = require("./app.js");

  // Use the function like its supposed to be used
  const yens = fromDollarToYen(3.5);

  // If 1 dollar is 146.26168224299064 yen, then 3.5 dollars should be (3.5 * 146.26168224299064)
  const expected = 3.5 * 146.26168224299064;

  // This is the comparison for the unit test
  expect(yens).toBe(expected); // 1 dollar is 146.26168224299064 yen, then 3.5 dollars should be = (3.5 * 146.26168224299064)
});

test("One yen should be pounds", function () {
  // Import the function from app.js
  const { fromYenToPound } = require("./app.js");

  // Use the function like its supposed to be used
  const pounds = fromYenToPound(3.5);

  // If 1 yen is 0.05559105431309904 pounds, then 3.5 yen should be (3.5 * 0.05559105431309904)
  const expected = 3.5 * 0.005559105431309904;

  // This is the comparison for the unit test
  expect(pounds).toBe(expected); // 1 yen is 0.05559105431309904 pounds, then 3.5 yen should be = (3.5 * 0.05559105431309904)
});
