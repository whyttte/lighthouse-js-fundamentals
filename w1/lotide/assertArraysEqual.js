const assertArrayEqual =  function(array1, array2) {
  let ans = eqArray(array1, array2)
  if (!ans) {
    console.log("arrays are not equal")
  }
  else {
    console.log("passed, arrays are equal")
  }
}
    


eqArrays([1, 2, 3], [1, 2, 5])