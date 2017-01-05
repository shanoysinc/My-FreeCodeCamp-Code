// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Here are some helpful links:

// Boolean Objects
// Array.prototype.filter()


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(function(val) {
    if (typeof val === 'string' || typeof val === 'number') {
      return val;
    }
  });
  return newArr;
}



bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]
