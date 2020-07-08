const camelCase = function(input) {
  return input.replace(/\W+(.)/g, function(match, text) {
    return text.toUpperCase()
  })
  
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


