'use strict'

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== null;
}

const game = function() {
  const randomNum = Math.round(Math.random() * 99 + 1);
  alert('Загаданное число = ' + randomNum); ////////////////////это проверка, потом удалить

  return function repeat() {

    let userNum = prompt('Угадай число от 1 до 100: ');

    if( isNumber(userNum) ) {

      if( userNum < randomNum ) {
        alert ('Загаданное число больше')
        repeat()
      } else if ( userNum > randomNum ) {
        alert ('Загаданное число меньше')
        repeat()
      } else {
        alert ('Поздравляю, Вы угадали!!!')
      }

    } else {
      if( userNum === null ) {
        alert('Игра окончена')

      } else {
        alert ('Введи число!!!')
        repeat ()
      }
    }
  }
}

game()()
