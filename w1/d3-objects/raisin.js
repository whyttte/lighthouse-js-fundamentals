/*
Function takes in an array
Go through the array of cookies and see if there is a raisin
If raisin present, console log Raisin alert
If no rainsin , console all good
​
*/
​
const raisinAlarm = function (cookie) {
  let arrayOfAlerts = [];
​
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === '🍇') {
      arrayOfAlerts.push('Raisin alert!');
      return arrayOfAlerts;
    }
  }
  arrayOfAlerts.push('All good');
  return arrayOfAlerts;
};
​
console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫']));
console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇']));
console.log(raisinAlarm(['🍫', '🍫', '🍫']));