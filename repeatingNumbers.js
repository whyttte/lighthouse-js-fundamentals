const repeatNumbers = function(data) {
  let final = []
  for (let i = 0; i < data.length; i++) {
    let a = data[i];
    let b = ""
    let [a1, a2] = a;
    for (let k = 0; k < a2; k++) {
      b += a1;
    }
    final.push(b);
  }
  return final
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));