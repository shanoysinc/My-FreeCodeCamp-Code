
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newStr = str.substring(str.length - target.length, str.length);
  if (newStr === target) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("Open sesame", "same");
