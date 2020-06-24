const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return (num % 2 === 0);
}

function filterArray(mixedArray, isEven) {
  var evenNumbers = [];
  for (var i = 0; i < mixedArray.length; i++) {
    var numbers = mixedArray[i]
    if (isEven(mixedArray[i])) {
      evenNumbers.push(numbers);
    }
  }
  return evenNumbers;
}

console.log(filterArray(mixedArray, isEven));