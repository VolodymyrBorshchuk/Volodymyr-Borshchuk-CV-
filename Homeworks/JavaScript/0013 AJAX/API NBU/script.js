let urlReq = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

let rec = new XMLHttpRequest();

rec.open("GET", urlReq);

rec.addEventListener("readystatechange", () => {
    if (rec.readyState === 4 && rec.status >= 200 && rec.status < 300) {
        showCurrency(JSON.parse(rec.responseText));
    }
});

rec.send();

let rere = []

function showCurrency(arr) {

    arr.forEach(element => {
        const { txt, rate } = element;
        rere.push([element.txt, element.rate])

        if (element.rate > 20) {
            let div = document.createElement("div");
            div.append(`${txt} === ${rate}`)

            document.body.append(div)

            let color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
            div.style.backgroundColor = color
        }
    });

    let input = document.createElement("input")
    input.type = 'text';
    input.placeholder = 'enter the name of '
    document.body.prepend(input)
    let inpFinded = document.querySelector("input")

    function search(el) {
        el.addEventListener('change', (e) => {
            arr.forEach(element => {
                const { txt, rate } = element;
                if (e.target.value === txt) {
                    let f = document.createElement('div');
                    inpFinded.after(f);
                    f.innerHTML = (`${txt} === ${rate}`)

                    let styles = {
                        'color': 'red',
                        'background-color': 'beige',
                        'padding-bottom': '10px',
                        'margin': '5px',
                        'border': '3px solid black',
                        'display': 'flex',
                        'justify-content': 'center'
                    };

                    let elementStyle = f.style;
                    for (let styleName in styles) {
                        elementStyle[styleName] = styles[styleName];
                    }
                }
            });
        })

    };

    search(inpFinded)

    /* function check(arr, str) {
        const newArr = arr.sort((a, b) => b.length - a.length);
        let dpStr = str.slice();
        newArr.forEach(value => dpStr = dpStr.replace(value, ""));
        if (!dpStr) {
            return console.log('Соотвествует');
        }
        return console.log('Не соотвествует');
    } */
}

