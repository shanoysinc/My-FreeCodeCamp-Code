function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  for(var n in arr) {
    var largestNumber = 0;
    for (var sn in arr[n]) {
      if (arr[n][sn] > largestNumber ) {
        largestNumber = arr[n][sn];
      }
    }
    newArr.push(largestNumber);
  }

  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
