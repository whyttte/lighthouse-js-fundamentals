const urlEncode = function(text) {
  let worktext = text.trim();
  let final = '';

  for (let i = 0; i < worktext.length; i++) {
      if (worktext[i] === ' ') {
          final += '%20';
      } else {
          final += worktext[i];
      }
  }

  return final;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));