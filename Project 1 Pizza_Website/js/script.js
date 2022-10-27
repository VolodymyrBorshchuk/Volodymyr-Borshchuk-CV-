document.addEventListener("DOMContentLoaded", () => {

    const pizzaSizeObject = {
        smallPizzaPrice: 100,
        midPizzaPrice: 200,
        bigPizzaPrice: 300,
    };

    const saucePriceObject = {
        firstSauce: 30,
        secondSauce: 40,
        thirdSauce: 50,
    };

    let componentsPriceObject = {
        cheese1: 20,
        cheese2: 30,
        cheese3: 40,
        component1: 40,
        component2: 20,
        component3: 30,
    };

    let totalCost = 300;



    let labels = document.querySelectorAll("label.radio");

    labels.forEach((item) => {
        item.addEventListener("click", () => {
            if (saucesPriceSpan !== undefined || componentPriceSpan !== undefined) {
                cleanPizza()
            }
        })
    });


    let pizzaSize = document.querySelector("#pizza");
    let priceField = document.querySelector(".price");
    let priceSpan = document.createElement("span");
    priceSpan.className = "priceValue"
    priceField.after(priceSpan);
    priceSpan.innerHTML = totalCost + " грн"


    const setPizzaPrice = function (target) {
        switch (target) {
            case "small": return priceSpan.innerHTML = pizzaSizeObject.smallPizzaPrice + " грн", totalCost = pizzaSizeObject.smallPizzaPrice;
            case "mid": return priceSpan.innerHTML = pizzaSizeObject.midPizzaPrice + " грн", totalCost = pizzaSizeObject.midPizzaPrice;
            case "big": return priceSpan.innerHTML = pizzaSizeObject.bigPizzaPrice + " грн", totalCost = pizzaSizeObject.bigPizzaPrice;
            default: return;
        }
    };


    let size
    pizzaSize.addEventListener("click", function (e) {
        let [...sizes] = e.currentTarget;

        sizes.forEach((element) => {
            if (element.checked === true) {
                size = element.id
            } else {
                return
            };
        });
        setPizzaPrice(size)
        console.log(size)
        console.log(totalCost)
    })

    //получаем и віводим стоимость соуса

    let sauces = document.querySelectorAll(".sauce");
    let saucePriceShow = document.querySelector(".sauces");
    let saucesPriceSpan = document.createElement("span");
    saucesPriceSpan.className = "price2Value"
    saucePriceShow.after(saucesPriceSpan);

    const setSaucePrice = function (target) {
        switch (target) {
            case "sauceClassic": return saucesPriceSpan.innerHTML = saucePriceObject.firstSauce + " грн", totalCost += saucePriceObject.firstSauce;
            case "sauceBBQ": return saucesPriceSpan.innerHTML = saucePriceObject.secondSauce + " грн", totalCost += saucePriceObject.secondSauce;
            case "sauceRikotta": return saucesPriceSpan.innerHTML = saucePriceObject.thirdSauce + " грн", totalCost += saucePriceObject.thirdSauce;
            default: return;
        };
    };

    let size2;
    let size2Arr = []
    sauces.forEach((element) => {
        element.addEventListener("click", () => {
            if (element.classList.contains("sauce")) {
                size2 = element.id;
                setSaucePrice(size2);
                element.style.border = "2px solid black";
                priceSpan.innerHTML = totalCost + " грн";

                //добавляем после каждой аналагичной опперации данные в массив что бы получить полноценный заказ с ценой и ингридиентами после отправки формы.
                size2Arr.push(size2)
                console.log(size2Arr)

                console.log(totalCost)
            } else return;
        });
    });


    //добавляем ингридиенті

    let components = document.querySelectorAll(".component");
    let componentPriceShow = document.querySelector(".topings");
    let componentPriceSpan = document.createElement("span");
    componentPriceSpan.classList = "price3Value";
    componentPriceShow.after(componentPriceSpan);

    const setComponentPrice = function (target) {
        switch (target) {
            case "moc1": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.cheese1 + " грн", totalCost += componentsPriceObject.cheese1;
            case "moc2": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.cheese2 + " грн", totalCost += componentsPriceObject.cheese2;
            case "moc3": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.cheese3 + " грн", totalCost += componentsPriceObject.cheese3;
            case "telya": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.component1 + " грн", totalCost += componentsPriceObject.component1;
            case "vetch1": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.component2 + " грн", totalCost += componentsPriceObject.component2;
            case "vetch2": return componentPriceSpan.innerHTML += " +" + componentsPriceObject.component3 + " грн", totalCost += componentsPriceObject.component3;
            default: return;
        }
    };


    let size3;
    let size3Arr = [];
    components.forEach((element) => {
        element.addEventListener("click", () => {
            if (element.classList.contains("component")) {
                size3 = element.id;
                setComponentPrice(size3);
                element.style.border = "2px solid black";
                priceSpan.innerHTML = totalCost + " грн";

                //добавляем после каждой аналагичной опперации данные в массив что бы получить полноценный заказ с ценой и ингридиентами после отправки формы.
                size3Arr.push(size3)
                console.log(size3Arr)

                console.log(totalCost)
            } else return;
            console.log(size3);
        })
    });


    const [...draggables] = document.querySelectorAll('.draggable')



    draggables.forEach((item) => {
        item.addEventListener('dragstart', (evt) => {
            evt.dataTransfer.effectAllowed = "move";
            evt.dataTransfer.setData("Text", item.id);
        }, false)

        item.addEventListener('dragend', (evt) => {
            /* console.log(evt); */

            /* let size2;
            let size2Arr = [];
            let size3;
            let size3Arr = []; */

            if (evt.target.classList.contains("sauce")) {
                size2 = evt.target.id;
                setSaucePrice(size2);
                evt.target.style.border = "2px solid black";
                priceSpan.innerHTML = totalCost + " грн";

                //добавляем после каждой аналагичной опперации данные в массив что бы получить полноценный заказ с ценой и ингридиентами после отправки формы.
                size2Arr.push(size2)
                console.log(size2Arr)

                console.log(totalCost)
            }

            if (evt.target.classList.contains("component")) {
                size3 = evt.target.id;
                setComponentPrice(size3);
                evt.target.style.border = "2px solid black";
                priceSpan.innerHTML = totalCost + " грн";

                //добавляем после каждой аналагичной опперации данные в массив что бы получить полноценный заказ с ценой и ингридиентами после отправки формы.
                size3Arr.push(size3)
                console.log(size3Arr)

                console.log(totalCost)
            } else return;

        }, false)
    });

    let mainPizza = document.querySelector(".table");

    mainPizza.addEventListener('dragover', (evt) => {
        if (evt.preventDefault) evt.preventDefault();
        return false;
    }, false)

    mainPizza.addEventListener('drop', (evt) => {
        if (evt.preventDefault) evt.preventDefault();
        if (evt.stopPropagation) evt.stopPropagation();
        let id = evt.dataTransfer.getData("Text");

        let elem = document.getElementById(id);
        let clone = elem.cloneNode(true);
        mainPizza.append(clone);

        console.log(clone);
    });


    function cleanPizza() {
        priceField = "";
        totalCost = 0;
        saucesPriceSpan.innerHTML = "";
        componentPriceSpan.innerHTML = "";
        size2Arr = [];
        size3Arr = [];
        console.log(size2Arr, size3Arr)

        let divPizza = document.querySelector(".table");
        let imgPizza = divPizza.children[0]
        let elements = divPizza.querySelectorAll('img');

        elements.forEach((item) => {
            item.remove()
        })
        //возвращаем изображение
        divPizza.append(imgPizza);

        let delateImageStyles = document.querySelectorAll("img");
        delateImageStyles.forEach((element) => {
            element.style.border = "none";
        })
    };

    //////////// cursors
    draggables.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.cursor = "grab"
        })
    });

    labels.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.cursor = "pointer"
        })
    });




    ///// VALIDATION

    localStorage.user = JSON.stringify([]);

    class User {
        constructor(name, tel, email) {
            this.name = name;
            this.tel = tel;
            this.email = email;
        }
    };

    let [...formInputs] = document.querySelectorAll(".form_input");

    let submit = document.querySelector(".buttonSubmit");

    let inputsResult = formInputs.map(function (element) {
        return element;
    });
    console.log(inputsResult)


    const validate = (target) => {
        console.log(target.id)
        switch (target.id) {
            case "name": return /[A-zА-я]{2,}\s[A-zА-я]+/g.test(target.value)
                break;
            case "phone": return /\+380\d{9}/g.test(target.value)
                break;
            case "email": return /\@\S+\./g.test(target.value)
                break;
            default: throw new Error("Невірний виклик регулярного виразу")
                break;
        };
    };

    inputsResult.forEach((e) => {
        e.addEventListener("change", (event) => {
            validate(event.target)
            console.log(event.target)

            if (validate(event.target) !== true) {
                console.log("error in data")
                console.log(event.target.id)

                event.target.value = "";
                switch (event.target.id) {
                    case "name": event.target.style.border = "5px solid red", event.target.placeholder = "Fill the field correctly"
                        break;
                    case "phone": event.target.style.border = "5px solid red", event.target.placeholder = "Fill the field correctly"
                        break;
                    case "email": event.target.style.border = "5px solid red", event.target.placeholder = "Fill the field correctly"
                        break;
                    default: console.log("success")
                        break;
                }
            } else {
                event.target.style.border = "5px solid green"
            }
        })
    });

    class UserBasket {
        constructor(basketTotalPrice, basketSauces, basketIngr) {
            this.basketSauces = size2Arr;
            this.basketIngr = size3Arr;
            this.basketTotalPrice = totalCost;
        }
    };

    let mainResult = [];


    submit.addEventListener("click", (evt) => {

        let validateRez = inputsResult.map(function (element) {
            return validate(element);
        })

        if (!validateRez.includes(false)) {
            let userArray = JSON.parse(localStorage.user);

            userArray.push(new User(...inputsResult.map((element) => {
                return element.value
            })), new UserBasket(mainResult.map((element) => {
                return element
            })));

            localStorage.user = JSON.stringify(userArray);

            inputsResult.forEach(element => element.value = "");

            window.location.href = "./thank-you.html"

        } else {
            /* if (evt.preventDefault) evt.preventDefault();
            if (evt.stopPropagation) evt.stopPropagation(); */
            alert("Please, fill out the form");
        };


    });

    let resetButton = document.querySelector(".buttonReset");

    resetButton.addEventListener("click", () => {
        inputsResult.forEach((element) => cleanTheForm(element))
    });

    function cleanTheForm(element) {
        /* Коментар: можна було б зробити все із додаванням спану і в цій функції просто видалити його, повністю і коректно очистивши форму. (Бо якщо була допущена помилка при вводі - міняється плейсхолдер, і при очищенні форми плейсхолдер-підказка не показується.)
        if (get('span.input-span')) {
            get('span.input-span').remove()
        } */

        element.value = "";
        element.style.border = "none";
    };


    // Runaway Discount

    function discountFunction() {
        let div = document.querySelector("div#banner")
        //кнопка убегает при наведении
        div.addEventListener('mouseover', () => {
            div.style.position = "absolute";
            div.style.bottom = Math.floor(Math.random() * 80) + "%";
            div.style.right = Math.floor(Math.random() * 80) + "%";
        })
        //кнопка возвращается на место через 2 сек с помощью setTimeout
        div.addEventListener('mouseout', () => {
            setTimeout(() => {
                div.style.position = "fixed";
                div.style.bottom = 2 + "%";
                div.style.right = 1 + "%";
            }, 2000);

        })
    }
    discountFunction()



    /* те саме, лаконічніше */
   /*  let discount = document.querySelector("#banner");

    //Escape from cursor when mouse is onto discaunt element AND when mouse moves along discaunt element
    ['mouseover', 'mousemove'].forEach(e => {
        discount.addEventListener(e, function () {
            let bottomPosition = Math.floor(Math.random() * 50);
            let rightPosition = Math.floor(Math.random() * 50);
            discount.style.bottom = bottomPosition + "%";
            discount.style.right = rightPosition + "%";
        });
    }); */

    /* Що необхідно допрацювати: 
    1) додавання картинок на корж при кліку а не перетягуванні
    2) відправку данних на сервер */


});
