const numberOfVowels = function(data) {
  let info = data;
  total = 0;
  let k = 0;
  while (k < info.length) {
    if (info[k] === 'a' || info[k] === 'e' || info[k] === 'i' || info[k] === 'o' || info[k] === 'u' || info[k] === 'A' || info[k] === 'E' || info[k] === 'I' || info[k] === 'O' || info[k] === 'U'){ 
      total += 1
    }
    else{
      total += 0
    }
    k++
  }
  return total
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
