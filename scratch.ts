type A = number | A[];
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, [8, [9, 11], 10], 6],
];

// unest this array
// const unestedArray: number[] = [];

// const unNest = (array_to_unnest: A[] | number): void | number => {
//   if (typeof array_to_unnest == "number") {
//     return array_to_unnest;
//   } else {
//     array_to_unnest.map((arrayElement) => {
//       if (arrayElement instanceof Array) {
//         console.log("array encountered", arrayElement, "recursing into it");
//         unNest(arrayElement);
//       } else {
//         return arrayElement;
//       }
//     });
//   }
// };

// const unestedArray = nestedArray.reduce(
//   (acc, arrElem) => [...acc, unNest(arrElem)],
//   [],
// );

// console.log(
//   nestedArray,
//   nestedArray.length,
//   "\n",
//   unestedArray,
//   unestedArray.length,
// );

console.log(typeof "Hello", typeof "Hello" == "string");
