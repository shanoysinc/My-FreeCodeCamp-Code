function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = '';
 for (var i = 0; i < num; i++) {
   newStr+=str;
 }
  return newStr;
}

repeatStringNumTimes("abc", 3); //"abcabcabc"
