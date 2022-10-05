// The sort method:
// MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// The sort method is a method available on Arrays, where we can sort the content of the array.
// So given an Array fx:
const numbers = [1, 9, 3, 7, 2, 5, 8, 4, 6];
// We can sort the Array, and get this mess sorted out:
const sortedNumbers = numbers.sort();
console.log(sortedNumbers); // Result: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Unlike the filter function, it changes the original Array.
// So after the sort function has been executed, the original array has also been sorted.
console.log(numbers); // Result: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Another example given a numbers array, with some larger numbers:
const largeNumbers = [100, 1, 2, 3, 10000];
// The sorting function is not so smart;
const sortedLargeNumbers = largeNumbers.sort();
console.log(sortedLargeNumbers); // Result: [ 1, 100, 10000, 2, 3 ]

// As 2, is definitely not larger than 100.
// We can implement our own sortin algoritm:
const correctlySortedLargeNumbers = largeNumbers.sort((a, b) => {
  return a - b;
});
console.log(correctlySortedLargeNumbers); // Result: [ 1, 2, 3, 100, 10000 ]

// The function we pass into the sorting function is called a "compare" function.
// Read the MDN documentation linked to at the top, to understand how this function works.

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
    Given the cars array, finish the sort method to sort them according to their model year, starting from oldest, to newest
*/
cars.sort((a, b) => {
  // TODO: Compare the model_year, and understand the compareFn documentation in order to finish Exercise 1.
  return a;
});

console.log(cars);

const birthdays = [
  {
    first_name: "Lauren",
    last_name: "Bell",
    birthday: "2014-05-17T12:02:45.416+02:00",
  },
  {
    first_name: "Brian",
    last_name: "Powell",
    birthday: "2010-06-23T16:07:28.113+02:00",
  },
  {
    first_name: "Sean",
    last_name: "Nelson",
    birthday: "2010-10-01T05:24:47.343+02:00",
  },
  {
    first_name: "Brian",
    last_name: "Coleman",
    birthday: "2016-05-30T15:12:35.117+02:00",
  },
  {
    first_name: "Nicholas",
    last_name: "Rodriguez",
    birthday: "2022-03-19T03:35:04.783+01:00",
  },
  {
    first_name: "Brandon",
    last_name: "Lewis",
    birthday: "2017-06-07T20:35:22.514+02:00",
  },
  {
    first_name: "Alyssa",
    last_name: "Rivera",
    birthday: "2019-09-21T14:52:57.664+02:00",
  },
  {
    first_name: "Dylan",
    last_name: "Davis",
    birthday: "2010-06-08T21:39:02.065+02:00",
  },
  {
    first_name: "Brianna",
    last_name: "Carter",
    birthday: "2022-03-05T03:39:10.019+01:00",
  },
  {
    first_name: "Charles",
    last_name: "Wilson",
    birthday: "2016-10-25T23:23:41.129+02:00",
  },
];

/* 
  Exercise 2:
  Given the birthday array, sort them according to their birthday.
  Hint 1: 
    Read the docs on dateString parameter: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
  Hint 2:
    Read the answers to this problem: 
    https://stackoverflow.com/questions/492994/compare-two-dates-with-javascript
*/
const result = birthdays.sort((a, b) => {
  const date1 = new Date(a.birthday);
  const date2 = new Date(b.birthday);
  return date1 - date2;
});

console.log(result);
