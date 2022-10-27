/* Видио по гит

Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст

Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию, которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.

Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.

Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.

Выведите информацию с объекта userTwo используя метод объекта userOne.

Работа с контекстом(bind call apply) bind call apply

 

Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь. Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().

Создайте объект пользователь и задайте ему имя. 
Сделайте так чтобы данное свойство нельзя было удалить.

Создайте объект пользователь запиите в объект имя и фалиоию. 
Добавьте геттер который выведит информацию о пользоваетле

 */

function user() {
    console.log (this)
};

const userOne = {
    name: "VOva",
    sername: "Bor",
    age: 26,
    sayHi (phone = 'no phone'){
        return (`Hello,  my name is ${this.name} ${this.sername}! ${phone}`)
    }
};


Object.defineProperty(userOne, "name", {writable: false, enumerable: false, configurable: false});

userOne.name = "Bob"


console.log(userOne.sayHi())

console.log(userOne.sayHi.bind(window)())

userTwo = {
    name: "Liza",
    sername: "Bor", 
    age: 23,
}

console.log(userOne.sayHi.bind(userTwo, "+329789 ")())
console.log(userOne.sayHi.apply(userTwo, ["+392329"]))
console.log(userOne.sayHi.call(userTwo, "+392329"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* создайте метод который бдует умножать элементы массива на число заданное пользователем. 
сделайте так что бы метод наследовался массивом поодобно методу pop() */

/* function mull(number, arr) {
    return arr.map(function (el) {
        return el * number
    })
} */

/* Array.prototype.mull = function(number) {
    return this.map(function (el) {
        return el * number
    })
}

console.log(mull(2, [2,3,5,8])) */