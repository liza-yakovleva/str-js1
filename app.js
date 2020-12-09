// TODO Завдання.Написати функцію, яка приймає випадкове число, і виводить інформацію в консоль чи воно парне чи ні.
function getRandomInt(min = 0, max = 1000) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  if (num % 2 === 0) {
    return (`Число ${num} є парним`)
  } else {
    return (`Число ${num} не є парним`)
  }
}
console.log(getRandomInt(10, 10000));
console.log(getRandomInt(0, 10));
console.log(getRandomInt(100, 100000));