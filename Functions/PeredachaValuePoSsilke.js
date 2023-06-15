// Передача знаения по ссылке

const personOne = {
  name: "Oleg",
  age: 23
}

function  increasePersonAge(person) {
  person.age += 1
  return person
}

increasePersonAge(personOne)       // Передача объекта по ссылке
console.log(personOne.age)         // 22

