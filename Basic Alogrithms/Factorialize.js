function factorialize(num) {
  var prod = 1;
  for (var i = 1; i <= num; i++) {
    prod*=i;
  }
  return prod;
}

factorialize(5);
