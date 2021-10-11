'use strict'

let ifRound = confirm('Хотите сыграть в игру?')

const game = function() {
  
  
  function startRound(randomNum) {
  alert('Загаданное число = ' + randomNum) 

  let attempts = 10;

  const checkMatching = function() {
      let userNum = prompt('Угадай число от 1 до 100: ')

      if (userNum !== null) { //обработка "отмены"
          userNum = parseInt(userNum) //перевод в число: "", "   " и "впорыглодыол" => NaN

          if( !isNaN(userNum)  ) {

              if (attempts > 0) {

                if(userNum < randomNum) {

                alert('Загаданное число больше, осталось попыток: ' + --attempts)

                checkMatching()
              } else if (userNum > randomNum) {
                alert('Загаданное число меньше, осталось попыток: ' + --attempts)
                checkMatching()
              } else if (userNum == randomNum) {
                ifRound = confirm('Поздравляю, Вы угадали!!!\nХотите сыграть ещё?')
              }



              } else {
                ifRound = confirm('Попытки закончились, хотите сыграть еще?') 
              }
            
          } else {
            confirm('Введи число!')
            checkMatching()
          }

      } else {
        alert('Игра окончена')
        ifRound = false
      }
  
  }

    checkMatching()
  }


  if(ifRound) {
    startRound(Math.round(Math.random() * 99 + 1))
      
    } else { 
      alert('Вы вышли из игры успешно!');
      //break;
    }


  game()  
}

 
game()