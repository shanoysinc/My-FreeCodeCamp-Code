// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
 var args = Array.prototype.slice.call(arguments);

  var newArr = arr.filter(function(val) {
      if (args[1] !== val && args[2] !== val && args[3] !== val) {
        return val;
      }

  });

   return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); //[1]
destroyer(["tree", "hamburger", 53], "tree", 53) //["hamburger"]
