const agecalculator = function (name, yearofbirth, currentyear) {
  let a = name
  let b = yearofbirth
  let c = currentyear
  const age = c - b
  return (a +  " is " + age + " years old.")
} 
console.log(ageCalculator("Miranda", 1983, 2015));