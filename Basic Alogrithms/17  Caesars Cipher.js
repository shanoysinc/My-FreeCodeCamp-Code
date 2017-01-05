// One of the simplest and most widely known ciphers is a Caesar cipher, also known
//  as a shift cipher. In a shift cipher the meanings of the letters are shifted by
// some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a
// decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character
// (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  var newArr = arr.map(function(char){
    var num = char.charCodeAt() + 13;
    var belowNum = char.charCodeAt();

    if (belowNum < 65){
      return char;
    } else if ( num > 90 ){
      var newNum = (num - 90) + 64;
      return String.fromCharCode(newNum);
    } else {
      return String.fromCharCode(num);
    }
  });
  return newArr.join('');


}

// Change the inputs below to test
rot13("SERR YBIR?") ; //"FREE LOVE?"
rot13("SERR PBQR PNZC") //"FREE CODE CAMP"
