// Функция callback

function  anotherFunction() {
  // Действие
}

function fnWithCallback(callbackFunction) {
  callbackFunction()    // В теле функции вызывается другая функция
}

fnWithCallback(anotherFunction())

function printMyName() {
  console.log('Oleg')
}

setTimeout(printMyName, 1000)       // setTimeout - встроенная функция
                                           // функция printMyName будет вызвана через 1000 миллисекунд