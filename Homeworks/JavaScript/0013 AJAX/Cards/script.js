let url = "https://swapi.dev/api/people/";

class Obj {
    constructor(name, height, gender) {
        this.name = name;
        this.height = height;
        this.gender = gender;
    }
};

let generalArray = []

const dataRequest = fetch(url, { method: "GET" })

    .then((promise) => promise.json(), (error) => console.error(error))

    .then((data) => {
        cardBuild(data.results)
    });

function cardBuild(data) {
    let name = document.querySelector(".name");

    data.forEach((item => {
        generalArray.push(new Obj(item.name, item.height, item.gender))

        //creating elements and put to them data's
        let div = document.createElement("div");
        name.append(div);
        div.innerHTML = item.name;

        let height = document.querySelector(".height");
        let div1 = document.createElement("div");
        height.append(div1);
        div1.innerHTML = item.height;

        let gender = document.querySelector(".gender");
        let div2 = document.createElement("div");
        gender.append(div2);
        div2.innerHTML = item.gender;


    }));


    //////////METHOD 1

    /* let pow = generalArray.map((arr) => {
        createCard(arr)
        console.log(arr)
    }); */

    //////////METHOD 2

    for (let i = 0; i < generalArray.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<p>${generalArray[i].name}</p>`;
        document.querySelector('.divname').append(div)

        let div2 = document.createElement('div');
        div2.innerHTML = `<p>${generalArray[i].height}</p>`;
        document.querySelector('.divheight').append(div2)

        let div3 = document.createElement('div');
        div3.innerHTML = `<p>${generalArray[i].gender}</p>`;
        document.querySelector('.divgender').append(div3)
    }

}

/* function createCard(element) {
    let gettedDivs = document.querySelectorAll(".card>div")

    for (let item of gettedDivs) {
        let newDiv = document.createElement("div");
        item.append(newDiv);

        if (item.className === "divname") {
            newDiv.append(element.name)
        } else if (item.className === "divheight") {
            newDiv.append(element.height)
        } else if (item.className === "divgender") {
            newDiv.append(element.gender)
        }
    }
} */