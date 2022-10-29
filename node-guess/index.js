const ps = require("prompt-sync");
   const prompt = ps();

let LEVELS = {
    initial_range: 2,
    range_step: 1,
  }
  var gameOver = false
  var numbers = 0
  var currentRange = LEVELS.initial_range;
  generateNumber = (range) => {
    let QNumber = Math.floor(Math.random()*range + 1)
    return QNumber
  }
  console.log('Welcome to the No. 1 most challenging...\nNUMBER GUESSING GAME')
  var userName = prompt("Enter your username: ")
  prompt('click "Enter" to start playing')
  do {
    numbers++
    let {range_step} = LEVELS;
    let currentQNumber = generateNumber(currentRange)
    console.log(`Stage ${numbers} (1-${currentRange})`)
    do {var userGuess = prompt("Enter Guess from the range above")} while(
      !(userGuess && 1<=userGuess<=currentRange && Number.isInteger(parseFloat(userGuess)))
    )
    if (userGuess == currentQNumber) {
      console.log(`Correct!🎉 - (score = ${numbers})`)
      currentRange += range_step
      if (numbers == 5) {
        prompt('You are about to enter mega Mode("Enter" to continue)')
      }
      if (numbers == 10) {
        prompt("you are kiling it, lets go")
      }
    }
    else {
      if (numbers > 1) {
        console.log(`Wrong!😢 - (score = ${numbers - 1})\n${userName}, nice`)
      }
      else {
        console.log(`Wrong!😢; ${userName}, Try your best next time`)
      }
      gameOver = true
    }
  } while (!gameOver);