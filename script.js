'use strict'


function startGame(randomNum) {
  const checkMatching = function() {
    let userNum = prompt('Угадай число от 1 до 100: ')

    alert('вы ввели' + userNum + typeof userNum)

    if (userNum !== null) { //обработка "отмены"
        userNum = parseInt(userNum) //перевод в число: "", "   " и "впорыглодыол" => NaN

        if( !isNaN(userNum)  ) {
          
            if(userNum < randomNum) {
              alert('Загаданное число больше' + userNum + typeof userNum)
              checkMatching()
            } else if (userNum > randomNum) {
              alert('Загаданное число меньше' + userNum + typeof userNum)
              checkMatching()
            } else if (userNum == randomNum) {
              alert('Поздравляю, Вы угадали!!!' + userNum + typeof userNum)
            }

        } else {
          confirm('Введи число!' + userNum + typeof userNum)
          checkMatching()
        }

    } else {
      alert('Игра окончена' + userNum + typeof userNum)
    }
 
  }

  checkMatching()
}

startGame(10)