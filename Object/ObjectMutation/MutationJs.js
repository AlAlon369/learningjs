// Мутация

// Значение примитивных типов

const a = 10
let b = a   // копирование значения (copy by value)

b = 30

console.log(a)  // 10

console.log(b)  // 30

// Значение ссылочного типа (объект)

const person = {
  name: 'Oleg',
  age: 21
}

person.age = 22               // Мутация объекта на который ссылается переменная 'person'
person.isAdult = true

console.log(person.age)     // 22
console.log(person.isAdult) // true