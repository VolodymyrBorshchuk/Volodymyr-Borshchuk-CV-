window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".keys"),
        display = document.querySelector(".display > input")



    let calcRes = '';
    let savedRes = "";
    let counter = 1;

    const calc = {
        value1: "",
        value2: "",
        operator: "",
        answer: false,
    }

    btn.addEventListener('click', function (e) {
        if (!e.target.classList.contains('button')) return;

        //очищаем значение и экран калькулятора
        if (e.target.classList.contains('clean')) {
            clear(calc, display);
        };

        //ищем кнопку =
        const equal = document.querySelector('.orange');

        //нажатое значение
        const inputValue = e.target.value;

        //присваеваем значения переменным

        if (e.target.classList.contains('black') && !e.target.classList.contains('clean')) {
            if (calc.value1 !== '' && calc.value2 !== '' && calc.answer !== '' && calc.answer === true) {
                clear(calc, display);
                calc.answer = false;
                equal = setAttribute('disabled', '');
                calc.value1 += inputValue;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
            } else if (calc.value2 === "" && calc.operator === '') {
                calc.value1 += inputValue;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
            } else if (calc.operator !== '') {
                calc.value2 += inputValue;
                calc.value2 = parseInt(calc.value2);
                show(calc.value2, display);
                if (equal.hasAttribute('disabled')) {
                    equal.removeAttribute('disabled');
                }
            } 
            return;
        }

        //присваеваем операторам нажатое значение
        if (e.target.classList.contains('pink') && calc.value2 === '') {
            calc.operator = inputValue;
            return;
        }

        //кнопка результата (равно =)
        if (e.target.classList.contains('orange')) {
            calcRes = calculatedLogic(calc.value1, calc.value2, calc.operator);
            show(calcRes, display);
            calc.answer = true;

            //
        } else if (e.target.classList.contains('pink') && calc.value2 !== '') {
            calcRes = calculatedLogic(calc.value1, calc.value2, calc.operator);
            calc.answer = true;
            calc.value1 = calcRes;
            calc.operator = inputValue;
            calc.value2 = '';
        }

        if (calcRes !== '' && e.target.classList.contains('pink')) {
            calc.answer = false;
            calc.value1 = calcRes;
            calc.operator = inputValue;
            calc.value2 = '';
        } else if (savedRes !== '' && e.target.classList.contains('pink')) {
            calc.answer = false;
            calc.value1 = savedRes;
            calc.operator = inputValue;
            calc.value2 = ''
        }


        //добавляем в память 
        const memory = document.querySelector('.memory');

        if (e.target.classList.contains('gray') && !e.target.classList.contains('getRes')) {
            memory.setAttribute('style', 'display:block');
            savedRes = calcRes;
        }

        if (e.target.classList.contains('getRes')) {
            clear(calc, display);
            calc.answer = false;
            equal.setAttribute("disabled", "");
            calcRes = "";

            if (counter % 2 !== 0) {
                calc.value1 += savedRes;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
                counter++;
            } else {
                savedRes = "";
                show(savedRes, display);
                memory.setAttribute("style", "display: none");
                counter++;
            }
        }


    })

})

function show(value, el) {
    el.value = value
}

function clear(calc, display) {
    calc.value1 = '';
    calc.value2 = '';
    calc.operator = '';
    display.value = '';

    return calc;
}


function calculatedLogic(a, b, c) {
    if (c == '+') {
        return (a + b);
    } else if (c == '-') {
        return (a - b);
    } else if (c == '*') {
        return (a * b);
    } else if (c == '/') {
        return (a / b);
    }
}