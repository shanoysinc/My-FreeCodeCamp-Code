function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var newStr = [];
  for (var i = 0; i < arr.length; i++){
    newStr.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i.length-1]));
  }

  return newStr.join(' ');
}

titleCase("sHoRt AnD sToUt");
