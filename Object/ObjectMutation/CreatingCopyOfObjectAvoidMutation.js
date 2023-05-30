// Копирование объекта, избегая потонциальных мутаций.
// В JavaScript можно создать много копий одного и того же объекта.
// Нельзя забывать где находится оригинальный объект, ведь изменив копию,
// все предыдущие переменные тоже изменятся

const person = {
  name: 'Bob',
  age: 25
}

// parse - конвертация в объект
// stringify - конвертация в строку
const person2 = JSON.parse(JSON.stringify(person)) // Ссылки на вложенные объекты не сохраняются
person2.name = 'Alice'

console.log(person2.name)   // Alice
console.log(person.name)    // Bob