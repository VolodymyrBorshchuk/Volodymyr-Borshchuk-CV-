let clothes, allClothes, boots, goggle, head, jacket, tshort, collection = [];

let clothesCategories = [];
let home = [];
let targetCategoryValue = 'home';
let targetItem;
let currentCollection = [];
let basket = [];

fetch('../json/clothes.json')
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        clothes = data;
        showClothes()
        cardCreation()
    })
    .catch(() => {
        console.error();
    })

function showClothes() {
    allClothes = clothes;

    while (home.length < 10) {
        let randomNumber = getRandomClothes();
        home.push(clothes[randomNumber]);
        home = Array.from(new Set(home)); //продотвращаем повторение єлементов массива
    }
    /* for(item in home){
        console.log(home[item])
    } */
}

function getRandomClothes(min, max) {
    min = 0;
    max = clothes.length
    return Math.floor((max - min) * Math.random());
}

const app = document.getElementById("app");

//navigation bar
const nav = document.createElement('div');

//selection bar
const selectionBar = document.createElement('div');
const buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
const subCategoriesContainer = document.createElement('div');
subCategoriesContainer.className = 'subContainer';
selectionBar.appendChild(buttonContainer);
selectionBar.appendChild(subCategoriesContainer);

//basket
const basketDiv = document.createElement("div");
selectionBar.appendChild(basketDiv);
basketDiv.textContent = "Bag"
basketDiv.className = 'basket'
let basketItems = document.createElement('div')
selectionBar.appendChild(basketItems)
basketItems.className = 'basketItems';
basketItems.textContent = 'Empty'

//Button Go to order
const orderDiv = document.createElement('div')
orderDiv.className = 'orderDiv'
selectionBar.appendChild(orderDiv)
orderDiv.textContent = 'Go to Order'

/* const basketCreate = () => {

    basketDiv.addEventListener('click', () => {
    })
}
basketCreate(); */


const buttonAll = document.createElement('button');
buttonAll.value = 'home'
const buttonBoots = document.createElement('button');
buttonBoots.value = "boots"
const buttonGoggles = document.createElement('button');
buttonGoggles.value = 'goggle'
const buttonHeads = document.createElement('button');
buttonHeads.value = 'head'
const buttonJackets = document.createElement('button');
buttonJackets.value = 'jacket'
const buttonTshorts = document.createElement('button');
buttonTshorts.value = "tshort"

let selectionBarCreation = () => {
    buttonBoots.textContent = 'Boots'
    buttonGoggles.textContent = 'Goggles'
    buttonAll.textContent = 'Home'
    buttonHeads.textContent = "Heats"
    buttonJackets.textContent = "Jackets"
    buttonTshorts.textContent = "T-Shorts"
    buttonContainer.appendChild(buttonAll)
    buttonContainer.appendChild(buttonBoots)
    buttonContainer.appendChild(buttonGoggles)
    buttonContainer.appendChild(buttonHeads)
    buttonContainer.appendChild(buttonJackets)
    buttonContainer.appendChild(buttonTshorts)
    buttonAll.className = 'selection-button';
    buttonBoots.className = 'selection-button';
    buttonJackets.className = 'selection-button';
    buttonHeads.className = 'selection-button';
    buttonTshorts.className = 'selection-button';
    buttonGoggles.className = 'selection-button';

}
selectionBarCreation()


const getCategories = () => {
    buttonContainer.addEventListener('click', (e) => {

        let targetCategory = e.target
        targetCategoryValue = targetCategory.value;

        /* console.log(e.currentTarget) */
        if (targetCategoryValue !== undefined) {
            clearCollection();
            clearClothesCategories();

            collection = clothes.filter((item) => {
                return item.type === targetCategoryValue;
            });
            currentCollection = collection;

            getClothesCollection();
            getSubcategoriesClothes()

            if (targetCategory == buttonAll) {
                collection = home;
            };

            subCategoriesCreation();
            cardCreation();
            getCards();

        }
    },)
}

function getClothesCollection() {
    for (let item in collection) {
        clothesCategories.push(collection[item].desc)
    };
    clothesCategories = Array.from(new Set(clothesCategories))
}
getCategories()

const clearCollection = () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

const clearClothesCategories = () => {
    clothesCategories = [];
    while (subCategoriesContainer.firstChild) {
        subCategoriesContainer.removeChild(subCategoriesContainer.firstChild);
    }
}

window.onload = () => {
    setTimeout(() => {
        collection = home;
        showClothes; //!! 
        cardCreation();
        getCards();
    }, 400);

}

buttonAll.addEventListener('click', () => {
    clearCollection();
    collection = home;
    cardCreation();
    getCards()
})


//main
const main = document.createElement('div');

app.appendChild(nav);
nav.className = 'nav';
app.appendChild(selectionBar)
selectionBar.className = 'selection_bar'

const categoryName = document.createElement('div');
categoryName.className = 'categoryName'
let nameOfcategory = document.createElement("h2");
nameOfcategory.className = 'nameOfCategory';
selectionBar.appendChild(categoryName);
categoryName.appendChild(nameOfcategory);

app.appendChild(main);
main.className = 'main'
nav.textContent = "Navigation Menu"

//subCategories adding
let subCategoriesCreation = () => {
    for (subCategory in clothesCategories) {
        let subCategoryItem = document.createElement("h4");
        subCategoryItem.className = 'subCategoryItem'
        subCategoryItem.value = clothesCategories[subCategory]
        subCategoryItem.textContent = clothesCategories[subCategory];
        subCategoriesContainer.appendChild(subCategoryItem)
    }
}

let getSubcategoriesClothes = () => {
    subCategoriesContainer.addEventListener('click', (e) => {

        let targetItem = e.target.value;
        let targetCategory = e.target;
        let targetItemValue = targetCategory.value;
        if (targetItemValue !== undefined) {
            let subcategoriesClothesItems = [];
            subcategoriesClothesItems = currentCollection.filter((item) => {
                return item.desc === targetItem;
            });
            collection = subcategoriesClothesItems;
            console.log(targetItem)
            clearCollection()
            cardCreation();
            getCards();
        }


    })
}
getSubcategoriesClothes()

let selectSubCategories = () => {
    let subCategoriesSelectionItems = document.querySelectorAll('subCategoryItem');
    for (item in subCategoriesSelectionItem) {

    }
}

//Card adding
let cardCreation = () => {
    for (item in collection) {

        let card = document.createElement('div');
        card.className = 'card'
        card.value = collection[item].id
        main.appendChild(card)

        let cardImageContainer = document.createElement("div");
        cardImageContainer.className = 'cardImageContainer';
        let cardImage = document.createElement('img');
        cardImage.className = 'cardImage';
        cardImage.loading = 'lazy'  //// плавная подгрузка изображений
        cardImageContainer.appendChild(cardImage);
        card.appendChild(cardImageContainer);

        let cardTitle = document.createElement('h3');
        cardTitle.className = ('cardTitle');
        card.appendChild(cardTitle);

        let cardPrice = document.createElement('h3');
        cardPrice.className = 'cardPrice';
        card.appendChild(cardPrice);
        //content adding
        let addContent = () => {
            cardImage.src = (collection[item].img);
            cardTitle.textContent = collection[item].title;
            cardPrice.textContent = collection[item].price + " " + "$";
        }
        addContent()
    }
}

const buttons = document.querySelectorAll(".selection-button");
[...buttons].forEach((button) => {
    button.addEventListener("click", addNameOfCategory);
})

function addNameOfCategory() {
    nameOfcategory.textContent = this.textContent
}

function getCards() {
    let cards = main.children;
    [...cards].forEach((card) => {
        card.onclick = getCardsArticle;
    })
}

let oneClothesItem;
function getCardsArticle() {
    oneItemArticle = this.value;

    oneClothesItem = collection.find(({ id }) => id === oneItemArticle);
    console.log(oneClothesItem)
    modalCreate()
}


let modalCreate = () => {

    //creating the modal card
    const modal = document.createElement('div');
    modal.className = 'modal'
    //container for close button
    const modalCloseContainer = document.createElement('div');
    modalCloseContainer.className = 'modalCloseContainer'
    modalCloseContainer.innerHTML = `<span class="modalCloseButton"> x </span>`
    modal.appendChild(modalCloseContainer)
    //container for content
    const modalContentContainer = document.createElement('div')
    modalContentContainer.className = 'modalContentContainer'
    const modalImageContainer = document.createElement('div')
    modalImageContainer.className = 'modalImageContainer'
    const modalTextContainer = document.createElement('div')
    modalTextContainer.className = 'modalTextContainer'
    modalContentContainer.appendChild(modalImageContainer)
    modalContentContainer.appendChild(modalTextContainer)
    modal.appendChild(modalContentContainer)
    //container for button
    const modalButtonContainer = document.createElement('div')
    modalButtonContainer.className = ('modalButtonContainer')
    modalTextContainer.innerHTML = `<span class="modalButtonButton">Додати до корзини</span>`

    app.appendChild(modal)

    let oneCardImage = document.createElement('img');
    oneCardImage.className = 'oneCardImage'
    modalImageContainer.appendChild(oneCardImage)
    oneCardImage.src = (oneClothesItem.img);

    let modalName = document.createElement('p')
    modalName.className = "modalName";
    modalName.textContent = `${oneClothesItem.title}`
    let modalColor = document.createElement("p")
    modalColor.className = "modalColor"
    modalColor.textContent = `color ${oneClothesItem.color}`
    let modalPrice = document.createElement('p')
    modalPrice.className = 'modalPrice'
    modalPrice.textContent = `${oneClothesItem.price} $`

    modalTextContainer.appendChild(modalName)
    modalTextContainer.appendChild(modalColor)
    modalTextContainer.appendChild(modalPrice)

    main.style.opacity = .2;
    selectionBar.style.opacity = .2

    const closeModal = () => {

        let buttonX = document.querySelector('.modalCloseButton')
        buttonX.addEventListener('click', (e) => {
            main.style.opacity = 1;
            selectionBar.style.opacity = 1;
            app.removeChild(modal)
        })
    }
    closeModal();

    //adding to basket
    let buttonAddtoBasket = document.querySelector('.modalButtonButton')
    function addToBasket() {
        buttonAddtoBasket.addEventListener("click", () => {
            basket.push(oneClothesItem);
            console.log(basket)
            app.removeChild(modal);
            main.style.opacity = 1;
            selectionBar.style.opacity = 1;
            alert("product added to bag")
            basketItems.textContent = `You have ${basket.length} items in your bag`;
        })
    }
    addToBasket()
}


const orderButton = () => {
    orderDiv.addEventListener('click', () => {
        console.log('your order is ready');

        localStorage.user = JSON.stringify(basket);
        let userBasket = JSON.parse(localStorage.user);
        alert(JSON.stringify(basket));

    })
}
orderButton()