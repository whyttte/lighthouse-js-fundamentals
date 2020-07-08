const concat = function (array1, array2) {
  let a = array1;
  let b = array2;
  for (let i = 0; i < b.length; i++) {
    a.push(i)
  }
  return a
}
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);