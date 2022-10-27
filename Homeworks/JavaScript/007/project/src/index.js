/*
Реализовать функцию для создания объекта "пользователь".
Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser. При вызове функция должна спросить у вызывающего имя и фамилию. Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName. Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko). Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
*/
/*
Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.
Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом: При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday. Создать метод getAge() который будет возвращать сколько пользователю лет. Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/


class CreateNewUser {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;   
        this.birthday = birthday

    }

    getAge() {
      return   new Date().getFullYear() - this.birthday.split(".")[2] 
    }

    getPassword() {
        return `${this.firstName[0].toLocaleUpperCase()}${this.lastName.toLocaleLowerCase()}${this.birthday.split(".")[2]}`
    }

    getLogin(){
        return `${this.firstName[0].toLocaleLowerCase()}${this.lastName.toLocaleLowerCase()}` 
    }
}

const newUser = new CreateNewUser(prompt("name"), prompt("lastName"), prompt("birthday", "dd.mm.yyyy"))

console.log(newUser.getLogin())