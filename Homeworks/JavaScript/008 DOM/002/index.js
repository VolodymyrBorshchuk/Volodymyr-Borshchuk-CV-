let diametr,
    round;

const main = () => {
    usersAsk();
    diametr = checkInput(diametr);
    makeRound();
    deleteRound();
};

function usersAsk() {
    diametr = +prompt('entry diametr from 1 to 200', '100')
};

function checkInput(x) {
    while (isNaN(x) || x <= 0 || x > 200) {
        alert('uncorrect value');
        x = parseFloat(prompt('entry diametr from 1 to 200', '100'))
    }
    return x;
};

const makeRound = () => {
    let section = document.createElement('div');
    section.style.marginTop = '20px';
    document.body.append(section);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            round = document.createElement('div');

            round.className = "circle";
            round.style.cssText = `
            display : inline-block;
            border : 3px solid black;
            border-radius : 50%;
            background-color : hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);
            width : ${diametr}px;
            height : ${diametr}px;
            `;

            section.append(round);
        }
        let perenos = document.createElement('br');
        section.append(perenos);
    };
};

function deleteRound() {
    let [...circle] = document.querySelectorAll('.circle');

    circle.forEach(el => {
        el.onclick = function () {
            el.style.display = 'none';

            //то же самое циклом for..............................................

            //    for (let i = 0; i < circle.length; i++) {
            //        circle[i].onclick = function () {
            //            circle[i].remove();
            //        }
            //    }
        };
    });
};