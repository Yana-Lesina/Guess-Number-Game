'use strict'

let userChoice;


const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== null;
}


const game = function() {
  const randomNum = Math.round(Math.random() * 99 + 1);
  let attempts = 3;

  return function repeat() {

    if (attempts > 0) {

      let userNum = prompt('Угадай число от 1 до 100: ');

      if( isNumber(userNum) ) {

        if( userNum < randomNum ) {
          alert ('Загаданное число больше, осталось попыток: ' + --attempts)
          repeat()
        } else if ( userNum > randomNum ) {
          alert ('Загаданное число меньше, осталось попыток: ' + --attempts)
          repeat()
        } else {
          userChoice = confirm ('Поздравляю, Вы угадали!!! \nХотите сыграть ещё?')
        }

      } else {
        if( userNum === null ) {
          alert('Игра окончена')
          userChoice = false

        } else {
          alert ('Введи число!!!')
          repeat ()
        }
      }
  
    } else {
      userChoice = confirm ('Игра окончена, вы проиграли \nХотите сыграть ещё?')
    }
  }
}


const guessNumber = function () {
  userChoice = true

  return function startGame() {
    game()()

    if(userChoice) {
      startGame()
    } else {
      alert('Вы вышли из игры успешно')
    }
  }
}





guessNumber()()
