/* створити форму для реєстрації покупця
    імя прізвище мін 2 літери
    кириля , вік, число , телефон +38, індекс число, та статус за замовчуванням активний клієнт
    данні які ввів клієн зберігаємо в браузері , та після збередення показуємо данні у вигляді таблиці на сторінці, де мають бути показані 
    тільки діючі клієнти  */

localStorage.user = JSON.stringify([]);

class User {
    constructor(name, lastname, age, phonenumber, index) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.phonenumber = phonenumber;
        this.index = index;
        this.status = true;
    }
}

const createUserList = () => {
    //читаємо масив користувачів із пам'яті
    let currentUsers = JSON.parse(localStorage.user);
    currentUsers.forEach(function (element) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdLastname = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdNumber = document.createElement("td");
        let tdIndex = document.createElement("td");
        let tdStatus = document.createElement("td");
        let inputCheckBox = document.createElement('input');

        inputCheckBox.checked = element.status;
        inputCheckBox.type = "checkbox";
        tdName.innerText = element.name;
        tdLastname.innerText = element.lastname;
        tdAge.innerText = element.age;
        tdNumber.innerText = element.phonenumber;
        tdIndex.innerText = element.index;
        tdStatus.innerText = element.status;

        tdStatus.append(inputCheckBox);
        tr.append(tdName, tdLastname, tdAge, tdNumber, tdIndex, tdStatus);
        document.querySelector("tbody").append(tr);
    })
};

let [...allInputs] = document.querySelectorAll("input");

let inputsRez = allInputs.map(function (element) {
    /* console.log('element') */
    return element;
}).filter((element) => {
    return element.type != "button";
})

const validate = (target) => {
    /* console.log(target); */

    switch (target.id) {
        case "name": return /^[A-z]{2,}$/i.test(target.value);
        case "lastname": return /^[А-я]{2,}$/i.test(target.value);
        case "age": return /^\d{1,2}$/.test(target.value);
        case "phonenumber": return /^\+380\d{9}$/.test(target.value);
        case "index": return /^\d{5}$/.test(target.value);
        default: throw new Error("Невірний виклик регулярного виразу")
    }
};

inputsRez.forEach((e) => {
    e.addEventListener("change", (event) => {
        console.log(validate(event.target));
    })
});

let saveButton = document.querySelector("[type=button]");

saveButton.addEventListener("click", () => {
    // функція валідації після натиску кнопки
    let validateRez = inputsRez.map(function (element) {
        return validate(element);
    });

    //передивляємось чи немає помилок в інпутах
    if (!validateRez.includes(false)) {
        //якщо немає помилок - записуємо в LocalStorage
        let a = JSON.parse(localStorage.user);

        a.push(new User(...inputsRez.map((element) => {
            return element.value
        })));

        localStorage.user = JSON.stringify(a)

        inputsRez.forEach(element => element.value = "");

        createUserList()
    } //тут має бути вивід помилок користувачу


})