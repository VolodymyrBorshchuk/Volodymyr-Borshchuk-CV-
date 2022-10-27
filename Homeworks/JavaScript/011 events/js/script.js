/* Створи клас, який буде створювати користувачів з ім'ям та прізвищем. Додати до класу метод для виведення імені та прізвища */

function User(name, sername) {
    this.name = name;
    this.sername = sername;
}

User.prototype.added = function () {
    console.log(`Name: ${this.name} --- Lastname: ${this.sername}`)
};


const user1 = new User('Bill', 'Clinton');
const user2 = new User('Marry', 'Poppins');

user1.added()
user2.added()

/* Створи список, що складається з 4 аркушів. Використовуючи джс зверніся до 2 li і з використанням навігації по DOM дай 1 елементу синій фон, а 3 червоний */

document.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement('div');
    div.className = 'div';
    document.body.prepend(div);

    let ul = document.createElement('ul');
    div.append(ul);

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    li1.innerText = "li 1";
    li2.innerText = "li 2";
    li3.innerText = "li 3";
    li4.innerText = "li 4";

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);

    li2.style.backgroundColor = 'blue';
    li3.style.backgroundColor = 'yellow';

    let a = document.createElement('div')
    a.style.borderBottom = '3px solid black'

    ul.after(a)

})

/* Створи див висотою 400 пікселів і додай на нього подію наведення мишки. При наведенні мишки виведіть текст координати, де знаходиться курсор мишки */

let div400 = document.createElement('div')
div400.style.height = '400px'
document.body.append(div400)
div400.style.backgroundColor = 'wheat'

let text = document.createElement('span')
text.innerText = 'Coordinates inside div'
div400.append(text)


div400.onmouseover = function () {
    text.style.display = 'block'
}
div400.onmouseout = function () {
    text.style.display = 'none'

}

div400.addEventListener('mousemove', (e) => {
    text.innerText = `(X:${e.offsetX}, Y:${e.offsetY})`
    text.style.left = e.clientX + 50 + "px";
    text.style.top = e.clientY + "px";
})

let a = document.createElement('div')
a.style.borderBottom = '3px solid black'
div400.after(a)


/* Створи див і зроби так, щоб при наведенні на див див змінював своє положення на сторінці */

let divLive = document.createElement('div');
document.body.append(divLive);
divLive.style.backgroundColor = 'black'
divLive.style.width = '300px';
divLive.style.height = '300px';
divLive.style.display = 'block';
divLive.addEventListener('mouseover', () => {
    divLive.style.marginLeft = 100 + 'px'
})
divLive.addEventListener('mouseout', () => {
    divLive.style.marginLeft = 0 + 'px'
})

let b = document.createElement('div')
b.style.borderBottom = '3px solid black'
divLive.after(b)

/* Створи інпут для введення логіну, коли користувач почне вводити дані в інпут виводь їх в консоль */

let input = document.createElement('input');
input.placeholder = 'input';
b.after(input)

input.addEventListener('input', (e) => {
    console.log(`Input ${e.target.value}`)
})

/* Створи поле для введення кольору, коли користувач вибере якийсь колір, зроби його фоном body */

let colorInput = document.createElement("input");
colorInput.type = "color";


let divCOlor = document.createElement('div');
input.after(divCOlor)
divCOlor.after(colorInput)

colorInput.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = colorInput.value
})

let d = document.createElement('div')
d.style.borderBottom = '3px solid black'
colorInput.after(d)

/* Створіть поле для введення даних у полі введення даних виведіть текст під полем */

let entryField = document.createElement('input');
entryField.placeholder = 'text'
d.after(entryField)

let span777 = document.createElement('span');
entryField.after(span777);

entryField.addEventListener('input', (e) => {
    span777.innerText = `${e.target.value}`
})



