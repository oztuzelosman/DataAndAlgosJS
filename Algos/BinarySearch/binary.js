const values = [7, -1189, -96, 169, 117, 15, 44, 57, 85, 54, 63, 98, 12, 2, 87];

function binary(val, arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let lowestInd = 0;
  let highestInd = sortedArr.length - 1;

  while (lowestInd <= highestInd) {
    middle = Math.floor((highestInd + lowestInd) / 2);

    if (val === sortedArr[middle]) {
      return middle;
    } else if (val < sortedArr[middle]) {
      highestInd = middle - 1;
    } else {
      lowestInd = middle + 1;
    }
  }
  return -1;
}

console.log(binary(1, values));
