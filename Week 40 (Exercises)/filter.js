// The filter method:
// MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// The filter method is a method available on Arrays, where we can filter the content of the array.
// So given an Array fx:
const numbers = [1, 9, 3, 7, 2, 5, 8, 4, 6];
// We can filter the Array, and get all numbers below 5:
const belowFive = numbers.filter((num) => {
  if (num < 5) {
    return num;
  }
});

console.log(belowFive); // Result: [ 1, 2, 3, 4 ]
// The filter function returns a new array, with the filtered data, so the original array, in this case, will remain the same
console.log(numbers); // Result: [1, 9, 3, 7, 2, 5, 8, 4, 6]

// Exercise data:
const cars = [
  {
    make: "Cadillac",
    model: "DeVille",
    model_year: "2003",
  },
  {
    make: "Saturn",
    model: "VUE",
    model_year: "2010",
  },
  {
    make: "Nissan",
    model: "NV3500 HD Passenger",
    model_year: "2013",
  },
  {
    make: "Isuzu",
    model: "Rodeo Sport",
    model_year: "2003",
  },
  {
    make: "Buick",
    model: "LeSabre",
    model_year: "2004",
  },
  {
    make: "Dodge",
    model: "Monaco",
    model_year: "1992",
  },
  {
    make: "INFINITI",
    model: "G",
    model_year: "1995",
  },
  {
    make: "Chevrolet",
    model: "Equinox",
    model_year: "2010",
  },
  {
    make: "Pontiac",
    model: "LeMans",
    model_year: "1993",
  },
  {
    make: "Lamborghini",
    model: "Gallardo",
    model_year: "2007",
  },
];

/* 
    Exercise 1:
    Given the cars array above, finish the filter method, 
    to create a new array containing only the "Chevrolet" cars.
*/
const chevroletCars = cars.filter((car) => {
  if (cars.make == "Chevrolet") {
    return car;
  }
});
console.log(chevroletCars);

/* 
    Exercise 2:
    Given the cars array above, use the filter method, 
    to create a new array containing only the cars from year 2000 or above.
*/
