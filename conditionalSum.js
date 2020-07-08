const conditionalSum = function(values, condition) {
  let a = values;
  let b = condition;
  total = 0;
  a.forEach(function(c) {
    if (c % 2 === 0 && b == "even") {
      total += c;
    }
    else if (c % 2 != 0 && b == "odd") {
      total += c;
    }
  })
  return total
}


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));