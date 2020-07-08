const multiplicationTable = function(maxValue) {
  table = "" 
  for (let i = 1; i <= maxValue; i++) {
    for (let k = 1; k <= maxValue; k++) {
      table += (i * k) + ' ';
    }
    table += "\n"
  }
  return table
  // Your code here
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));