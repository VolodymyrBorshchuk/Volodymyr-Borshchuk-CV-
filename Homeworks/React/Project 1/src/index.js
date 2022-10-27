import React from "react";
import ReactDom from "react-dom";

/* let text1 = document.createElement("div");
let text2 = React.createElement("div", null, "Hello World");
console.dir(text1)
console.dir(text2)
ReactDom.render(text2,document.querySelector("#root")) */

//let text2 = <div>Hello World</div> 

const App = function () {
    //return <h1>Hello World</h1>
    return (
        <div className="maindiv">
            <Title></Title>
            <TitleMonth></TitleMonth>
            <TitleZodiac></TitleZodiac>
        </div>
    )
}
document.querySelector("#root").style.display = "flex"
document.querySelector("#root").style.flexDirection = 'row'

const Title = function () {
    return (
        <div>
            <h2>Days of the week</h2>
            <ul>
                <li>Mondey</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
            </ul>
        </div>
    )
}

const TitleMonth = function () {
    return (
        <div>
            <h2>Monthes</h2>
            <ul>
                <li>Jan</li>
                <li>Feb</li>
                <li>March</li>
                <li>April</li>
                <li>May</li>
                <li>June</li>
                <li>Jul</li>
                <li>Au</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
            </ul>
        </div>

    );
}

const TitleZodiac = function(){
    return(
        <div>
            <h2>Zodiacs</h2>
            <ul>
                <li>ram</li>
                <li>bull</li>
                <li>twins</li>
                <li>crab</li>
                <li>lion</li>
                <li>maiden</li>
                <li>scales</li>
                <li>scorpion</li>
                <li>archer(centaur)</li>
                <li>goat</li>
                <li>walter-bearer</li>
                <li>fish</li>
            </ul>
        </div>
    )
}

ReactDom.render(<App></App>, document.querySelector("#root"));

