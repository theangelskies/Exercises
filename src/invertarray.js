// function invert(array) {

//   //   return invertnum;
// }

// const num = -2;
// const invertNum = -num;

// console.log(invertNum);

// let array = [1, -2, 3, -4, 5];
// let invertedArray = [];
// for (let i = 0; i < array.length; i++) {
//   let currentElement = array[i];
//   let invertedCurrentElement = -currentElement;
//   invertedArray.push(invertedCurrentElement);
// }

// console.log(invertedArray);
//make it into a function

function invertArray(arr) {
  let invertedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let invertedCurrentElement = -currentElement;
    invertedArray.push(invertedCurrentElement);
  }
  return invertedArray;
}

// Example usage
let array = [1, -2, 3, -4, 5];
let result = invertArray(array);
console.log(result); // [-1, 2, -3, 4, -5]

let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

