/*Return true if the string in the first element of the array contains all of
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string
"hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters
in "line" are present in "Alien".
*/

function mutation(arr) {
  var str = arr[1].split('');
  var val;
  for (var s in arr[1]) {
    val = arr[0].toLowerCase().indexOf(str[s].toLowerCase());
    if (val === -1) {
      return false;
    }
  } 
  return true;

}

mutation(["hello", "hey"]); //false
mutation(["Mary", "Army"]); //true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //true
mutation(["voodoo", "no"]); //false
