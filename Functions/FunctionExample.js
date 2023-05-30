// Функция - это блок кода, который можно выполнять многократно
let a = 5
let b = 3

let c

c = a + b
console.log(c)   // 8

a = 8
b = 12

c = a + b
console.log(c)   // 20

// Создание функции
let a = 5
let b = 3

function sum(a, b) {   // Параметры функции
  const c = a + b      // Тело функции
  console.log(c)
}

sum(a, b)   // 8

a = 8
b = 12

sum(a, b)   // 20