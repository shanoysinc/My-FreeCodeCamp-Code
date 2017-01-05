// Write a function that splits an array (first argument) into groups the length
//  of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunky = [];
  while(arr.length) {
    chunky.push(arr.splice(0, size));
  }
return chunky;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);  //[["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)  // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)  //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]
