// Мутирования копий

const person = {  // person хранит только ссылку
  name: 'Bob',
  age: 25
}

// copy by reference
const person2 = person   // копируем ссылку

person2.age = 26         // мутация копии объекта
person2.isAdult = true   // на который ссылается person2

console.log(person.age)     // 26
console.log(person.isAdult) // true