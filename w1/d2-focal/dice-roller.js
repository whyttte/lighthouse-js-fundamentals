const diceRoller = function(number) {
  let i = 1
  let x = " "
  for (let i = 1; i < number; i++)
   {
    x += Math.floor(Math.random() * 6) + 1 + ", ";

  }
  let y = Math.floor(Math.random() * 6) + 1 + "."
  x = x + y
  console.log("You rolled " + number + " dice:" , x)
}
