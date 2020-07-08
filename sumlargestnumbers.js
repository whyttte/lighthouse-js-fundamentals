const sumLargestNumbers = function(data) {
  var a = data.sort(function(a, b){return a-b})
  var b = a.reverse()
  var largest = b[0]
  var larger = b[1]
  var summation = largest + larger
  return summation
  // Put your solution here
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));