// Функция может быть именованной (иметь имя, по которому её можно вызвать)
// Функция также может быть присвоена переменной
// Функция может быть анонимной
// Функция может быть аргументом при вызове другой функции, значением
// свойства (метода) объекта, такие функции называются callBack функциями

// Функция это объект, у которого есть свойства
// Пример функции

function myFn(a, b) {
  let c
  a = a + 1
  c = a + b
  return c
}

console.dir(myFn())