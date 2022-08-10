//switching values between variables:

//METHOD 1

// let temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

//METHOD 2

// [arr[0],arr[1]]= [arr[1],arr[0]]

const randomArr = [
  1, 2, 8, 4, 18, 98, 13, 45, 7, 5, 4, 7, 8, 47, 43, 44, 88, 10,
];

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(randomArr));
