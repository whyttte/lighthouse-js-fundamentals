const range = function (start, end, step) {
  let a = start;
  let b = end;
  let c = step;
  let arr = [];
  let i = 0
  while (i <= b) {
    arr.push(i)
    i = i + c
  }
  return arr
}
console.log(range(0, 31, 2))