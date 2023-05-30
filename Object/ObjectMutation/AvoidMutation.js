// Как избежать мутаций

const person = {
  name: 'Bob',
  age: 25
}

// Если у объекта есть вложенные объекты, то ссылки на них сохраняются
// В данном примере мы сможем избежать мутирования только корневых свойств,
// такик как name и age.
const person2 = Object.assign({}, person)
person2.age = 26

console.log(person2.age)  // 26
console.log(person.age)   // 25

// Второй вариант создания копии объекта

const person = {
  name: 'Bob',
  age: 25
}

// Ссылки на вложенные объекты так-же сохраняются
const person2 = {... person}   // (spread) оператор разделения объекта на свойства
person2.name = 'Alice'

console.log(person2.name)   // Alice
console.log(person.name)    // Bob

